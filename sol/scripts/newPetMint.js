
const hre = require("hardhat");

const WALLET_ADDRESS = "0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199"
const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

async function main(_URI) {
    const NFT = await hre.ethers.getContractFactory("PassPet");

    const contract = NFT.attach(CONTRACT_ADDRESS);
    await contract._safeMint(WALLET_ADDRESS).then((txn) => {
        // Log Txn
        console.log(txn.hash)
        return(txn)
    });

}