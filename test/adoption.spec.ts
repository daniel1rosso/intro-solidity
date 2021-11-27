import { expect } from "chai";
import { ethers } from "hardhat";
let signers;
let owner: any;
let alice: any;
let adoption: any;
const emptyAddress = "0x0000000000000000000000000000000000000000";

describe("Adoption", function () {
  beforeEach(async () => {
    signers = await ethers.getSigners();
    owner = signers[0];
    alice = signers[1];
    const Adoption = await ethers.getContractFactory("Adoption");
    adoption = await Adoption.deploy();
    await adoption.deployed();
  });
  it("should start without adopters", async () => {
    const adopters = await adoption.getAdopters();
    expect(
      adopters.every((address: string) => address === emptyAddress)
    ).to.equal(true);
  });
  it("should adopt if id is between 0 and 15", async () => {
    await adoption.connect(alice).adopt(1).wait;
    const adopted = await adoption.connect(alice).getAdopterOf(1);
    expect(adopted).to.equal(alice.address);
  });
  it("should not adopt if id is not between 0 and 15", async () => {
    expect(adoption.connect(alice).adopt(16)).to.be.reverted;
  });
  it("should getAdopterOf if id is between 0 and 15", async () => {
    const adopter = await adoption.connect(alice).getAdopterOf(1);
    expect(adopter).to.equal(emptyAddress);
  });
  it("should not getAdopterOf if id is not between 0 and 15", async () => {
    expect(adoption.connect(alice).getAdopterOf(16)).to.be.reverted;
  });
});
