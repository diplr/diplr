
var CrowdsaleToken = artifacts.require("./token/CrowdsaleToken.sol");
var SafeMathLib = artifacts.require("./math/SafeMathLib.sol");
var SafeMath = artifacts.require("./math/SafeMath.sol");

module.exports = function(deployer, network) {
  deployer.deploy(SafeMathLib);
  deployer.link(SafeMathLib, CrowdsaleToken);
  deployer.deploy(SafeMath);
  deployer.link(SafeMath, CrowdsaleToken);
  deployer.deploy(CrowdsaleToken,
    "diplr",
    "DPL",
    0,
    18,
    true  
  );
};
