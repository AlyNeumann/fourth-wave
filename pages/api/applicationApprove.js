


    //TODO: this logic will be for the final APPROVAL - this is the final collection with just Telegram & Application ID
    //this needs to add the user to the AcceptedAunties as well as delete their Application from original collection!!!
    //we also need to mint the NFT at this point

    // const { applicationId, telegramId } = req.body;
    // try {
    //     if (!applicationId || !telegramId) {
    //         return res.status(400).json({ data: 'Please enter the required information' });
    //     }

    //     const acceptedForms = new AcceptedForms({
    //         applicationId,
    //         telegramId,
    //         status
    //     });

    //     const client = await clientPromise;
    //     const db = client.db("FourthWave");

    //     const acceptedFormsCollection = db.collection("AcceptedAunties");

    //     await acceptedFormsCollection.insertOne(acceptedForms);