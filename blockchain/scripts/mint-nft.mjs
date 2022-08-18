const CONTRACT_ADDRESS = "0xb84ef4AA0A882123Db2C96185b5347c713564E1a"
const META_DATA_URL = "https://bafyreibbfjbv5xopqpkscad4sy5x6ifvwsxo7w74z4buanjqcdd3zaunli.ipfs.dweb.link/metadata.json"

async function mintNFT(contractAddress, metaDataURL) {
   const AuntieNFT = await ethers.getContractFactory("AuntieNFT")
   const [owner] = await ethers.getSigners()
   await AuntieNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL)
   console.log("NFT minted to: ", owner.address)
}

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });