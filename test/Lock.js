const { expect, assert } = require('chai');
const { ethers } = require('hardhat');

describe("Greeter", async function () {
  let data;

  beforeEach(async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();
    data = greeter;
  });

  it("Should return the new greeting once it's changed", async function () {
    // expect(await data.greet()).to.equal("Hello, world!");
    assert.equal(await data.greet(), "Hello, world!");          // assert ra expect ko kaam eautai huncha
  });


  it("Should assign new value to greeting function", async function () {
    const setGreetingTx = await data.setGreeting("Hola, change bhayo la!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await data.greet()).to.equal("Hola, change bhayo la!");
  })

})


