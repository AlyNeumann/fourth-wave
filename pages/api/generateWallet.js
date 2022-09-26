//send wallet address back to front end - send NFT!

export default async function handler(req, res) {
    try {
        const query = new URLSearchParams({ pageSize: '10' }).toString();

        const address = '0x03ef817689409e534e52528fa7e281f20d47b9ce';
        const resp = await fetch(
            `https://api-eu1.tatum.io/v3/polygon/account/transaction/${address}?${query}`,
            {
                method: 'GET',
                headers: {
                    'x-api-key': process.env.TATUM_API_KEY_TESTNET
                }
            }
        );

        const data = await resp.text();
        console.log(data);
        // const resp = await fetch(
        //     `https://api-eu1.tatum.io/v3/polygon/account/balance/0x03ef817689409e534e52528fa7e281f20d47b9ce`,
        //     {
        //       method: 'GET',
        //       headers: {
        //         'x-api-key': process.env.TATUM_API_KEY_TESTNET
        //       }
        //     }
        //   );

        //   const data = await resp.text();
        //   console.log(data);
        // const resp = await fetch(
        //     `https://api-eu1.tatum.io/v3/polygon/wallet`,
        //     {
        //         method: 'GET',
        //         headers: {
        //             'x-api-key': process.env.TATUM_API_KEY_TESTNET
        //         }
        //     }
        // );

        // const data = await resp.json();
        // const xpub = data.xpub;
        // const index = '1';

        // const walletAddress = await fetch(
        //     `https://api-eu1.tatum.io/v3/polygon/address/${xpub}/${index}`,
        //     {
        //       method: 'GET',
        //       headers: {
        //         'x-api-key': process.env.TATUM_API_KEY_TESTNET
        //       }
        //     }
        //   );

        //   const dataResp = await walletAddress.json();
        //   const publicAddress = dataResp.address
        //   console.log(publicAddress);
    }
    catch (e) {
        console.log(e)
    }
}

// test - 0x03ef817689409e534e52528fa7e281f20d47b9ce