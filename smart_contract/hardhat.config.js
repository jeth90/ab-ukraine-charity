require("@nomiclabs/hardhat-waffle");



module.exports = {
  solidity: "0.8.4",
  networks: {
      ropsten : {
        url: 'https://eth-ropsten.alchemyapi.io/v2/rJzoTIpi-Mm3ii45BwXkB5K8Q-upN6rA',
        accounts: ['5c8ba66c3ca3627829ce8c1af52f5bf799f58ea3cf64e7d06695d9af0550d012']
      }
      
  }
};
