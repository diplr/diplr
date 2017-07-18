fs = require('fs')

var HDWalletProvider = require("truffle-hdwallet-provider");


module.exports = {
  networks: {
    development: {
      provider: new HDWalletProvider(fs.readFileSync('./config/development/mnemonic').toString(), "http://localhost:8545/"),
      network_id: '*',
    },
    kovan: {
      network_id: '42',
      provider: new HDWalletProvider("", "https://kovan.infura.io/")
    },
  },
};