const {
    time,
    loadFixture,
    mine,
  } = require("@nomicfoundation/hardhat-network-helpers");
  const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
  const { expect, assert } = require("chai");
  
  
  describe("TestCases", function () {
    async function BasicDutchAuctiondeploy() {
  
      const [owner, otherAccount] = await ethers.getSigners();
  
      const BasicDutchAuction = await ethers.getContractFactory("BasicDutchAuction");
      const basicdutchauction = await BasicDutchAuction.deploy();
      signer = ethers.provider.getSigner(0);
  
      [signerAddress] = await ethers.provider.listAccounts();
      return { basicdutchauction, owner, otherAccount };
    }
  
    describe("Deployment", function () {
      it("Check if the starting block is 0", async function () {
        const { basicdutchauction, owner } = await loadFixture(BasicDutchAuctiondeploy);
        expect(await basicdutchauction.blocknumber()).to.equal(1);
      });
  
      it("Check if the initialPrice is 1800000000000000000 wei", async function () {
        var bigNum = BigInt("1800000000000000000");
        const { basicdutchauction, owner } = await loadFixture(BasicDutchAuctiondeploy);
        expect(await basicdutchauction.initialPrice()).to.equal(bigNum);
      });

    });
  
  });
  