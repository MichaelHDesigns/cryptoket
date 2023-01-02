 const fs = require('fs');

require('@nomiclabs/hardhat-waffle');

 const privateKey = fs.readFileSync('.secret').toString().trim();

module.exports = {
  networks: {
    hardhat: {
      chainId: 2330,
    },
     mumbai: {
      url: 'https://rpc0.altcoinchain.org/rpc',
      accounts: [privateKey],
     },
    // goerli: {
    //   url: 'https://goerli.infura.io/v3/0e46113c66824da89ce549a3fcc4a4a7',
    //   accounts: [privateKey],
    // },
  },
  solidity: '0.8.4',
};
