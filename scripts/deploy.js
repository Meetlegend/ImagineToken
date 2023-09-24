// deploy.js

const hre = require("hardhat");

async function main() {
  // deploying ERC20 token
  const [owner, addr1] = await ethers.getSigners();

  const ImagineToken = await hre.ethers.getContractFactory("ImagineToken");
  console.log('Deploying ImagineToken...');
  const token = await ImagineToken.deploy();
  await token.deployed();
  console.log("Token deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
