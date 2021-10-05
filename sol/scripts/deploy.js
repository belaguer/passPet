async function main() {
    const PassPet = await ethers.getContractFactory("PassPet")

    // Start deployment, returning a promise that resolves to a contract object
    const passPet = await PassPet.deploy()
    console.log("Contract deployed to address:", passPet.address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })