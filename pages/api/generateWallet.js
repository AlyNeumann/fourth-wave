
export default async function handler(req, res) {
    //TODO: store this telegram id & keys in DB
    console.log(req.body)

    try {
        const walletCreate = await fetch(
            `https://api-eu1.tatum.io/v3/polygon/wallet`,
            {
                method: 'GET',
                headers: {
                    'x-api-key': process.env.TATUM_API_KEY_TESTNET
                }
            }
        );
        const wallet = await walletCreate.json();
        console.log(wallet);

        const { xpub, mnemonic } = wallet;
        const index = 1;
        console.log(xpub)
        const walletAddress = await fetch(
            `https://api-eu1.tatum.io/v3/polygon/address/${xpub}/${index}`,
            {
                method: 'GET',
                headers: {
                    'x-api-key': process.env.TATUM_API_KEY_TESTNET
                }
            }
        );

        const walletResponse = await walletAddress.json();
        const publicAddress = walletResponse.address
        console.log(publicAddress);

        const privateCreate = await fetch(
            `https://api-eu1.tatum.io/v3/polygon/wallet/priv`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': process.env.TATUM_API_KEY_TESTNET
                },
                body: JSON.stringify({
                    index: index,
                    mnemonic: mnemonic
                })
            }
        );

        const privateKey = await privateCreate.json();
        console.log('private key')
        console.log(privateKey);

        return res.status(200).send(publicAddress);

    }
    catch (e) {
        console.log(e)
    }
}

// test - 0x03ef817689409e534e52528fa7e281f20d47b9ce