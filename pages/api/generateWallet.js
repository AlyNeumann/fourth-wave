//send wallet address back to front end - send NFT!

export default async function handler(req, res) {
    try {
        const resp = await fetch(
            `https://api-eu1.tatum.io/v3/polygon/wallet`,
            {
                method: 'GET',
                headers: {
                    'x-api-key': process.env.TATUM_API_KEY_TESTNET
                }
            }
        );

        const data = await resp.json();
        const xpub = data.xpub;
        const index = '1';

        const walletAddress = await fetch(
            `https://api-eu1.tatum.io/v3/polygon/address/${xpub}/${index}`,
            {
              method: 'GET',
              headers: {
                'x-api-key': process.env.TATUM_API_KEY_TESTNET
              }
            }
          );
          
          const dataResp = await walletAddress.json();
          const publicAddress = dataResp.address
          console.log(publicAddress);
    }
    catch (e) {
        console.log(e)
    }
}

