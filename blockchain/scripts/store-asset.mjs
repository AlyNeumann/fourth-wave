import { NFTStorage, File } from "nft.storage"
import fs from 'fs'
import dotenv from 'dotenv'
dotenv.config()

const { NEXT_PUBLIC_NFT_STORAGE_API_KEY } = process.env

export default async function StoreAsset() {
   const client = new NFTStorage({ token: NEXT_PUBLIC_NFT_STORAGE_API_KEY })
   console.log(NEXT_PUBLIC_NFT_STORAGE_API_KEY)
   const metadata = await client.store({
       name: 'Auntie',
       description: 'Auntie Role',
       location: 'Ohio',
       image: new File(
           [await fs.promises.readFile('blockchain/assets/AuntieNFT.png')],
           'AuntieNFT.png',
           { type: 'image/png' }
       ),
   })
   console.log("Metadata stored on Filecoin and IPFS with URL:", metadata.url)
}

StoreAsset()
   .then(() => process.exit(0))
   .catch((error) => {
       console.error(error);
       process.exit(1);
   });