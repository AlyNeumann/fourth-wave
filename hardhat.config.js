/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");
require('dotenv').config();
const { NEXT_PUBLIC_PRIVATE_KEY_1 } = process.env;

module.exports = {
  defaultNetwork: "PolygonMumbai",
  networks: {
    hardhat: {
    },
    PolygonMumbai : {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [NEXT_PUBLIC_PRIVATE_KEY_1]
    }
  },
  solidity: "0.8.12",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};
