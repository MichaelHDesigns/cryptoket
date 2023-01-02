 const fs = require('fs');

require('@nomiclabs/hardhat-waffle');

 const privateKey = fs.readFileSync('.secret').toString().trim();

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
      accounts: [privateKey],
     },
  },
  solidity: '0.8.4',
};
