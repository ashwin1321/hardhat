const { task } = require("hardhat/config");

require("@nomicfoundation/hardhat-toolbox");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();     // getSigners() returns an array of Signer objects. has many methods, including getAddress() and getBalance(), etc.

  for (const account of accounts) {
    const address = await account.getAddress();
    const balance = await account.getBalance();
    console.log(` ${address} : ${hre.ethers.utils.formatEther(balance)}`);      // converting wei to ether
  }
});


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  defaultNetwork: "hardhat",
  nework: {
    hardhat: {}
  }
};
