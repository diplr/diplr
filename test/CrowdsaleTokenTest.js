var CrowdsaleToken = artifacts.require("./token/CrowdsaleToken.sol");

contract('CrowdsaleToken', function (accounts) {
  it("it should have the name DIPLR", function () {
    return CrowdsaleToken.deployed().then(function (instance) {
      return instance.name.call();
    }).then(function (_name) {
      assert.equal(_name.valueOf(), "diplr", "DIPLR was not the name of the token");
    });
  });

  it("it should have the symbol DPL", function () {
    return CrowdsaleToken.deployed().then(function (instance) {
      return instance.symbol.call();
    }).then(function (_name) {
      assert.equal(_name.valueOf(), "DPL", "DPL was not the symbol of the token");
    });
  });

  it("it should have 18 decimals", function () {
    return CrowdsaleToken.deployed().then(function (instance) {
      return instance.decimals.call();
    }).then(function (_decimals) {
      assert.equal(_decimals.valueOf(), "18", "18 was not the amount of decimals");
    });
  });

  it("it should an empty initial supply", function () {
    return CrowdsaleToken.deployed().then(function (instance) {
      return instance.totalSupply.call();
    }).then(function (_supply) {
      assert.equal(_supply.valueOf(), "0", "initial supply was not empty");
    });
  });

  it("it should not be possible to upgrade before a crowdsale", function () {
    return CrowdsaleToken.deployed().then(function (instance) {
      return instance.canUpgrade();
    }).then(function (_canUpgrade) {
      assert.equal(_canUpgrade.valueOf(), false, "We could upgrade, which should not be possible");
    });
  });

  it("it should be possible to update Token Information", function () {
    var meta;
    return CrowdsaleToken.deployed().then(function (instance) {
      meta = instance;
      return meta.setTokenInformation("diplr2", "DIP");
    }).then(function () {
      return meta.name.call();
    }).then(function(_name){
      assert.equal(_name.valueOf(), "diplr2", "Name was not changed");    
      return meta.symbol.call();
    }).then(function(_symbol){
      assert.equal(_symbol.valueOf(), "DIP", "Symbol was not changed");    
    });
  });
});