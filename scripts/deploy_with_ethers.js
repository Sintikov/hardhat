const hre = require("hardhat");

async function main(){
  const Spike = await hre.ethers.getContractFactory("Spike");
  const SpikeDeployed = await Spike.deploy("SpikeName", "ONLY1");

  await SpikeDeployed.deployed[];

  console.log("Spike was deployed to:", SpikeDeployed.address);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});