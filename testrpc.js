fs = require('fs')

if(fs.existsSync())
var mnemonic = fs.readFileSync('./config/development/mnemonic').toString();
var TestRPC = require("ethereumjs-testrpc");
var server = TestRPC.server({
	mnemonic: mnemonic,
	total_accounts: 5
});
server.listen(8545, function(err, blockchain){
 console.log("error:" + err);
 console.log(blockchain);
});
