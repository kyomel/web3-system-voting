require("@nomiclabs/hardhat-waffle");

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
module.exports = {
  solidity: "0.7.3",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    ganache: {
      url: "http://127.0.0.1:8545",
      accounts: ['0x7bbe43aadc08657cf243b0c47c1ee1e0831300c45d2e3629797dd3dc87baa228', '0xe233e09bb31c70868d4fd6fe7e127c03fe61c84611257bb7cef032d679ade264']
    },
    local: {
      url: "http://127.0.0.1:8545",
      accounts: ['0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80', '0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d']
    },
    geth: {
      url: "http://127.0.0.1:8551",
      accounts: ['0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80', '0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d']
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/8aVtElkUKD_5yBa1K6XVZ2s32P986Uwb",
      accounts: ["0xc3ba58d83413d1da1c789a1b9cffa35badb3b284ac129eeef76ff6454a912fe9"]
    }
  }
};

