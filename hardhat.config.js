 const fs = require('fs');
require('dotenv').config()

require('@nomiclabs/hardhat-waffle');

// const privateKey = fs.readFileSync('.secret').toString().trim();

module.exports = {
  networks: {
    hardhat: {
      chainId: 2330,
    },
  //   mumbai: {
  //    url: 'https://rpc0.altcoinchain.org/rpc',
  //    accounts: [privateKey],
  //   },
     goerli: {
       url: 'https://rpc0.altcoinchain.org/rpc',
      accounts: [process.env.WALLET_PRIVATE_KEY.toString()],
     },
  },
  solidity: '0.8.4',
};
