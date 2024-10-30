# Blockchain Voting System

A decentralized voting system built with Hardhat, Ethereum and Solidity.

## Prerequisites

- Node.js
- npm or yarn

## Dependencies

- Hardhat
- Ethers.js
- Ganache (Local blockchain)
- Waffle & Chai (Testing framework)

## Installation

```bash
npm install
```
Available Scripts
Start local blockchain:
```bash
npm run ganache
```
Compile contracts:
```bash
npm run compile
```
Run tests:
```bash
npm run test
```

Project Structure
```bash
├── contracts/       # Smart contracts
├── scripts/        # Deployment scripts
├── test/          # Test files
└── hardhat.config.js
```

Testing
The project uses Waffle and Chai for testing smart contracts. Run the test suite with:
```bash
npm test
```

Local Development
1. Start Ganache local blockchain
2. Compile contracts
3. Deploy using Hardhat
4. Interact using ethers.js

This README.md provides a solid foundation for documenting the voting system project. It includes all the essential sections like installation, usage, testing, and project structure based on the Hardhat setup shown in package.json.
