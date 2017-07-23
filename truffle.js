fs = require('fs')

var HDWalletProvider = require("truffle-hdwallet-provider");

var getMnemonic = function (env) {
  try {
    fs.readFileSync('./config/' + env + '/mnemonic').toString()
  } catch (exception) {
    return "diplr"
  }
}

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    local: {
      provider: new HDWalletProvider(getMnemonic('local'), "http://localhost:8545/"),
      network_id: '*',
    },
    kovan: {
      network_id: '42',
      provider: new HDWalletProvider(getMnemonic('kovan'), "https://kovan.infura.io/")
    },
    ropsten: {
      network_id: '42',
      provider: new HDWalletProvider(getMnemonic('ropsten'), "https://kovan.infura.io/")
    }
  },
};