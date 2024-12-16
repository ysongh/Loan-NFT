require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    // npx hardhat run scripts/deploy.js --network sepolia
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`,
      accounts: [process.env.PRIVATEKEY],
      chainId: 11155111,
      gasPrice: 25000000000
    },
     // npx hardhat run scripts/deploy.js --network lensSepolia
    lensSepolia: {
      url: "https://rpc.testnet.lens.dev",
      accounts: [process.env.PRIVATEKEY],
      chainId: 37111,
      gasPrice: 25000000000
    },
  },
  paths: {
    artifacts: '../frontend/src/artifacts',
    cache: '../frontend/src/cache',
  }
};
