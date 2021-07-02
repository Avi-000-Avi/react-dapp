require("@nomiclabs/hardhat-waffle");
const dotenv = require('dotenv');
dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 const {DEPLOYER_PRIVATE_KEY} = process.env;

 
//Greeter Deployed to 0x6cF4c05Fe37Da3Eb54778C6edf6F9f6009252A8C
module.exports = {
  defaultNetwork: "hardhat",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {},
    ropsten: {
      url: "https://ropsten.infura.io/v3/1b8e933a71464b4898aef49bcff77042",
      accounts: [`0x${DEPLOYER_PRIVATE_KEY}`]
    }
  },
  solidity: "0.8.4",
};


