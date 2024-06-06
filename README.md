
# Project: Dutch Auction

## Overview
This repository hosts a decentralized application (DApp) for a Dutch Auction, designed to be built over several milestones throughout the semester. This project leverages Ethereum smart contracts to facilitate a transparent and secure auction process, culminating in a robust web3 application.

## Project Goals
The goal is to develop a fully-functional Dutch Auction system using blockchain technology, focusing on security, usability, and real-world application. The project is structured into multiple milestones, each building upon the last, with strict adherence to security best practices as detailed in the Ethereum smart contract security guidelines.

## Milestones
Each milestone is due by the dates specified in the course syllabus. Submissions include links to a GitHub repository and tagged commits corresponding to each version.

### Version 1.0: Basic Dutch Auction
- **Setup**: Initialize a Hardhat project in the `v1.0` directory of your GitHub repository.
- **Contract Development**: Develop `BasicDutchAuction.sol`, implementing a Dutch auction mechanism.
- **Testing**: Write comprehensive test cases and generate a Solidity coverage report.
- **Key Components**:
  - `reservePrice`: Minimum sale price.
  - `numBlocksAuctionOpen`: Duration of the auction in blockchain blocks.
  - `offerPriceDecrement`: Reduction in price per block until the reserve price is met.
- **Functionality**: Accept bids, determine the winner, and handle transactions securely.

### Version 2.0: NFT Integration
- **Overview**: Integrate Non-Fungible Token (NFT) capabilities using the ERC721 standard.
- **Development**: Utilize OpenZeppelin contracts for ERC721 to ensure compliance and security.
- **Testing**: Focus on minting and transferring NFTs.

### Subsequent Versions
- **Version 3.0**: Implement auctions accepting ERC20 tokens.
- **Version 4.0**: Introduce upgradeability using UUPS proxies.
- **Version 5.0**: Add ERC20Permit functionality for gasless transactions.
- **Version 6.0**: Develop a ReactJS frontend for interacting with the auction.
- **Version 7.0**: Deploy on an Ethereum testnet and host the frontend on IPFS.

## Technical Overview
- **Data Acquisition**: Utilize `requests` and `BeautifulSoup` for web scraping.
- **Data Wrangling**: Employ Python's `pandas` library for data cleaning and preprocessing.
- **Exploratory Data Analysis (EDA)**: Use `matplotlib` and `seaborn` for visual data exploration.
- **Data Visualization**: Create an interactive dashboard using Tableau for visual storytelling.

## Usage Instructions
1. **Data Collection**: Navigate to the `data_collection/` directory and execute Python scripts to collect data.
2. **Data Preprocessing**: Perform cleaning and encoding in the `data_cleaning/` directory using Jupyter notebooks.
3. **Visualization**: Access the Tableau workbook in the `visualization/` directory for advanced analytics.

## Security
Ensure all code is reviewed against security best practices, with no personal data included in datasets.

## Contributions
Contributions via GitHub are welcome. Please fork the repository, make changes, and submit a pull request.

## Additional Resources
- Ethereum Smart Contract Security Best Practices
- Hardhat Documentation
- OpenZeppelin Contract Documentation
