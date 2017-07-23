var PresaleFundCollector = artifacts.require("./presale/PresalefundCollector.sol");

contract('PresaleFundCollector', function (accounts) {
    it("it should be possible to invest with 0.5", function () {
        var meta;
        return PresaleFundCollector.deployed().then(function (instance) {
            meta = instance;
            return meta.invest({
                from: accounts[0],
                value: 0.5 * Math.pow(10, 18)
            });
        }).then(function (investing) {
            return meta.balanceOf(accounts[0]);
        }).then(function (balance) {
            assert.equal(balance.valueOf(), 0.5 * Math.pow(10, 18), "balance wasn't correct after investing");
        });
    });

    it("it should not be possible to invest with less 0.5", function () {
        var meta;
        return PresaleFundCollector.deployed().then(function (instance) {
            meta = instance;
            return meta.invest({
                from: accounts[1],
                value: 0.4 * Math.pow(10, 18)
            });
        }).then(function (e) {
            assert.fail("should never succeed");
        }).catch(function (err) {
            console.log(err);
        });
    });
});