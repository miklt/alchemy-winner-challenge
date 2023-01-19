const hre = require('hardhat')
async function main() {
  const MALUCO_ADDRESS = '0xCeFb9f2Cf69e3ea9E8941D679A1dB564A18aE530'
  const maluco = await hre.ethers.getContractAt('Maluco', MALUCO_ADDRESS)
  const tx = await maluco.callAttempt()
  await tx.wait()
  // challenge successfully passed on:
  // https://goerli.etherscan.io/tx/0xe368d90a508ec0a09d7732ca483e137e08bfc52609a2ed4bd21c5a4f764c0449
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
