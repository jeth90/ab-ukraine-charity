const main = async () => {
    const Donations = await hre.ethers.getContractFactory("Donations");
    const donations = await Donations.deploy();

    await donations.deployed();

    console.log("Donations deployed to: ", donations.address);
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

runMain();