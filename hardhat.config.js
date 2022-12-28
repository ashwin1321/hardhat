const { task } = require("hardhat/config");

require("@nomicfoundation/hardhat-toolbox");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();     // getSigners() returns an array of Signer objects. has many methods, including getAddress() and getBalance(), etc.

  for (const account of accounts) {
    const address = await account.getAddress();
    const balance = await account.getBalance();
    console.log(account);
    console.log(` ${address} : ${hre.ethers.utils.formatEther(balance)}`);      // converting wei to ether
  }
});


/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.17",
  // defaultNetwork: "goerli",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    },
    goerli: {
      url: "https://goerli.infura.io/v3/6d339ca37c3f48cabe9762fdbd1d58c2",              // infura project id
      accounts: ["8f02f63e53f06e210145d1fbd542ce969aa185a4d99e3cadbac315ebf29976ee"]    // private key of the account from metamask
    }
  },
};

// Path: scripts/sample-script.js
