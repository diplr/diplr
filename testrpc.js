fs = require('fs')

var mnemonic = fs.readFileSync('./config/development/mnemonic').toString();
var TestRPC = require("ethereumjs-testrpc");
var server = TestRPC.server({
	mnemonic: mnemonic
});
server.listen(8545, function(err, blockchain){
 console.log("error:" + err);
 console.log(blockchain);
});
