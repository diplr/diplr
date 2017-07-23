var PresaleFundCollector = artifacts.require("./presale/PresaleFundCollector.sol");
var SafeMathLib = artifacts.require("./math/SafeMathLib.sol");

module.exports = function(deployer, network, accounts) {
  deployer.link(SafeMathLib, PresaleFundCollector);
  deployer.deploy(PresaleFundCollector,
    accounts[0],
    "500000000000000000"
  );
};
