const AuntieNFT = artifacts.require("AuntieNFT");

module.exports = function (deployer) {
  deployer.deploy(AuntieNFT);
};