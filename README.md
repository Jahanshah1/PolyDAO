# PolyDAO
A self governing platform where people can vote and buy fractions of NFTs 

## Purpose/the problem it solves
There are many expensive NFTs with great utility but people are unable to invest due to high floor price and many times due to enormous amount of existing projects people are unable to identify an opportunity hence this DAO will help people own fraction of NFT by having a common treasury for investors and find new opportunities by passing new proposals, investing and essentially self governing.

## Overview 
This projects consists of two smart contracts written in Solidity NFTDAOtoken and NFTDAO, NFTDAOtoken is an ERC20 token which will be used for voting on the DAO and NFTDAO is the governance contract featuring passing proposals and voting. 
### visualisation of the ERC20 token contract
<img width="378" alt="NFTdao token visual structure" src="https://user-images.githubusercontent.com/92823408/180609056-bb329037-da4d-4272-b49e-ff3bf17a446a.PNG">

### Visualisation of the governance contract 
<img width="377" alt="Visualised file structure governance" src="https://user-images.githubusercontent.com/92823408/180609074-10976913-6828-40c4-8eda-ea18c1cef69b.PNG">


## Use cases 
Users can directly view details of an NFT collections through the native platform's home page where they can view price action, floor-price, attributes, rarity, volume and other details of a collection. Any user can pass a proposal to buy NFT(s). The voting duration will be 5 days long and if there are more than 75% of investors in favour then the proposal will pass. 

## Screenshots & Preview 

### Initial Wireframe for the front-end platform 
![Untitled](https://user-images.githubusercontent.com/92823408/181214115-5af08f2a-edcf-497c-9f07-75cc00bae1e7.png)


### Features of the ERC20 token smart contract 
<img width="235" alt="features of token" src="https://user-images.githubusercontent.com/92823408/180609384-dd7c35cb-5f2f-40d9-9269-51e89b5302eb.PNG">

### Features of the governance smart contract 
<img width="231" alt="Features of governance" src="https://user-images.githubusercontent.com/92823408/180609401-2a36c59c-ad56-4bff-a0d4-872a6d28fee9.PNG">

### Governance smart contract deployed on Polygon Mumbai testnet 
link : https://mumbai.polygonscan.com/tx/0x40b18fbb2d28e0701aeacbacd5f930e4a6322da768b9df9d9254bde6fdf3309f
Contract Address : 0xe442f72b802bbcf7b3ec7b90278becc2fc46985c



### ERC20 smart contract deployed on Polygon Mumbai Testnet
link : https://mumbai.polygonscan.com/tx/0x22f3e5b1669b5f3c080818442a6ce80329e3bfa3b0bbe4369bda42dd63833334
Contract Address : 0x25648830919d2d1c505b0b6a53cd52c88faabd9d

### Demo link ( vid )
https://youtu.be/mvnrL6GT6E0


## Tech Stack used 
- Celo plugin
- Solidity 
- Openzeppelin 
- React.js
- Javscript 
- Typescript 
- Tatum API
- Polygon Mumbai testnet

## Run locally 
Clone the project 
```bash 
git clone https://github.com/Jahanshah1/PolyDAO
```
Go to client directory 
```bash 
cd client
```
Install dependencies 
```bash 
npm i 
```
start localhost 
```bash 
npm start
```
If there are any problems please refer to https://github.com/Jahanshah1/PolyDAO/blob/main/troubleshoot.md

## Future plans 1.0
- [x] Add NFTs on CELO for selection 
- [x] Add Proposals 
- [x] Create Native ERC20 token
- [ ] Fix bugs and glitches in UI
- [ ] Improve UI
- [ ] Add multi-chain compatibility 
   
