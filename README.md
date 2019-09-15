# Real Estate Dapp
A decentralized housing product.

Contract Address : https://rinkeby.etherscan.io/address/0xedded15cbb20997c765bf7a047101f55e933143c

# Preview

Marketplace : https://rinkeby.opensea.io/assets/unidentified-contract-253

# Getting Started

### These instructions will get you a clone of the Real Estate dapp and lets you run the client on the local machine and deploys your own contract to the test network rinkeby.

# Setup

1. Clone this repository

```bash
  $git clone https://github.com/AjiteshBD/RealEstateDapp
```

2. Install all requiste npm packages

```bash
  $npm install
```

3. Edit truffle-config.js add mnemonic and Infura Endpoint

```javascript
  mnemonic: "YOUR-SEED-WORDS-FROM-METAMASK-ACCOUNT"
  ENDPOINT: "https://YOUR-INFURA-ENDPOINT_KEY"
```

4. Now launch your contracts to the network by following these commands in the directors eth-contracts:

```bash
  $cd eth-contracts
  $truffle compile
  $truffle migrate --reset --network rinkeby
 ```

5. Running the test Test

```bash
 $ganache-cli
 $truffle test
```

# Built With
*Ethereum - Ethereum is a decentralized platform that runs smart contracts
*Truffle Framework - Truffle is the most popular development framework for Ethereum with a mission to make your life a whole lot easier.
*truffle-hdwallet-provider - HD Wallet-enabled Web3 provider. Use it to sign transactions for addresses derived from a 12-word mnemonic.
*NODE + NPM



# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
