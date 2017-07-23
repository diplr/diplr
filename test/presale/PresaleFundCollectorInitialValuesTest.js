var PresaleFundCollector = artifacts.require("./presale/PresalefundCollector.sol");

contract('PresaleFundCollector', function (accounts) {
  it("it should have a max_investor count of 100", function () {
    return PresaleFundCollector.deployed().then(function (instance) {
      return instance.MAX_INVESTORS.call();
    }).then(function (_mi) {
      assert.equal(_mi.valueOf(), "100", "max investor count was not correct");
    });
  });

  it("it shouldn't have a crowdsale at startup", function () {
    return PresaleFundCollector.deployed().then(function (instance) {
      return instance.crowdsale.call();
    }).then(function (_mi) {
      assert.equal(_mi.valueOf(), "0x0000000000000000000000000000000000000000", "crowdsale was not empty at startup");
    });
  });

  it("it shouldnt have investors at creation", function () {
    var meta;
    return PresaleFundCollector.deployed()
      .then(function (instance) {
        meta = instance;
        return meta.investorCount.call();
      }).then(function (ic) {
        assert.equal(ic.valueOf(), 0, "investorcount was not 0");
      });
  });

  it("it should have a wei minimum limit of 0.5eth", function () {
    return PresaleFundCollector.deployed()
      .then(function (instance) {
        return instance.weiMinimumLimit.call();
      }).then(function (minimum) {
        assert.equal(minimum.valueOf(), 0.5 * Math.pow(10,18), "0.5eth was not the minimum amount");
      });
  });
});