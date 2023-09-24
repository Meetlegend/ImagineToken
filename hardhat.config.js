// hardhat.config.js
require("@nomiclabs/hardhat-waffle");
require("@nomicfoundation/hardhat-verify");
require('dotenv').config();

module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: process.env.INFURA_API_URL,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_APIKEY
 }
};