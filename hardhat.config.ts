import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "solidity-coverage";
import "hardhat-gas-reporter";
import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [{ version: "0.7.3", settings: {} }],
  },
  networks: {
    rinkeby: {
      url: 'https://eth-mainnet.alchemyapi.io/v2/4JUobyBpT6_uyJsRLgIVa-p4giUrGNh8',
      accounts: [`0xb70596a121F13F9E50585385B11035c016E48832`],
      gasPrice: 8000000000
      },
    hardhat: {},
    localhost: {},
    coverage: {
      url: "http://127.0.0.1:8555", // Coverage launches its own ganache-cli client
    },
  }
};

export default config