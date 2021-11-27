import { ethers } from "hardhat";
async function main() {
  const adoption = await ethers.getContractFactory("Adoption");
  const contract = await adoption.deploy();
  console.log("Contract deployed to address:", contract.address);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
