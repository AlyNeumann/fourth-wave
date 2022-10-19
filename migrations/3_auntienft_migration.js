const AuntieNFT = artifacts.require("AuntieNFT");

//these can be changed to async if need be
module.exports = function (deployer) {
  deployer.deploy(AuntieNFT);
};