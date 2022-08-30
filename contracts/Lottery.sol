// SPDX-License-Identifier: MIT

pragma solidity ^0.8.11;

import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";

contract Lottery is VRFConsumerBase {
    address payable public owner;
    address payable[] public players;
    uint public lotteryId;
    mapping (uint => address payable) public lotteryHistory;

    bytes32 internal keyHash; 
    uint internal fee;        
    uint public randomResult;

    constructor()
        VRFConsumerBase(
            0x3d2341ADb2D31f1c5530cDC622016af293177AE0, // VRF coordinator
            0xb0897686c545045aFc77CF20eC7A532E3120E0F1 // LINK token address
        ) {
            keyHash = 0xf86195cf7690c55907b2b611ebb7343a6f649bff128701cc542f0569e2c549da;
            fee = 0.0001 * 10 ** 18;    // 0.0001 LINK

            owner = payable(msg.sender);
            lotteryId = 1;
        }

    function getRandomNumber() public returns (bytes32 requestId) {
        require(LINK.balanceOf(address(this)) >= fee, "Not enough LINK in contract");
        return requestRandomness(keyHash, fee);
    }

    function fulfillRandomness(bytes32 requestId, uint randomness) internal override {
        randomResult = randomness;
    }

    function getWinnerByLottery(uint lottery) public view returns (address payable) {
        return lotteryHistory[lottery];
    }

    function getContractBalance() public view returns (uint) {
        return (address(this).balance);
    }

    function getPlayers() public view returns (address payable[] memory) {
        return players;
    }

    function enter() public payable {
        require(msg.value > 0.00001 ether);

        // address of player entering lottery
        players.push(payable(msg.sender));
    }

    function donations() public payable {
        require(msg.value > 0.00001 ether);
    }

    //make this function only appear once metamask login of owner (me) is detected 
    function pickWinner() public onlyowner {
        getRandomNumber();
    }

    function payWinner() public onlyowner returns (uint) {
        require(randomResult > 0, "source of randomness required before choosing winner");
        uint index = randomResult % players.length;
        
        players[index].transfer(address(this).balance / 100 * 50);
        owner.transfer(address(this).balance);

        lotteryHistory[lotteryId] = players[index];
        lotteryId++;
        
        players = new address payable[](0);
        randomResult = 0;
        return index;
    }

    receive() payable external {}

    modifier onlyowner() {
      require(msg.sender == owner, "only the owner can call this function");
      _;
    }
}