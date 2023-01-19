const hre = require('hardhat')
async function main() {
  const Maluco = await hre.ethers.getContractFactory('Maluco')
  const maluco = await Maluco.deploy()

  await maluco.deployed()

  console.log(`Deployed to ${maluco.address}`)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
