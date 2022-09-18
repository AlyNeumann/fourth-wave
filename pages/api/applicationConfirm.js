import clientPromise from '../../lib/mongodb-connect';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
    const { id, telegram, type } = req.body;

    const status = "pending"

    try {
        const client = await clientPromise;
        const db = client.db("FourthWave");
        const telegramId = telegram.toString();
        console.log(telegramId)

        let formsCollection;
        if (type == "aunty") {
            formsCollection = db.collection("AuntyForms");
        }
        else {
            formsCollection = db.collection("CandidateForms");
        }

        const result = await formsCollection.updateOne({ "_id": ObjectId(id) }, { $set: { "status": status, "telegramId": telegramId } }, { upsert: true });
        console.log(result)
        return res.redirect(302, '/thankyou');

    } catch (e) {
        console.error(e);
        return {
            props: { isConnected: false },
        }
    }
}