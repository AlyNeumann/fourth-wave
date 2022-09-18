import { ObjectId } from 'mongodb';
import clientPromise from '../../lib/mongodb-connect';

export default async function handler(req, res) {
    const { status, id, type, vetter } = JSON.parse(req.body);
    console.log(req.body)

    try {
        const client = await clientPromise;
        const db = client.db("FourthWave");

        let formsCollection;
        if(type == "aunty"){
            formsCollection = db.collection("AuntyForms");
        }
        else {
            formsCollection = db.collection("CandidateForms");
        }

        const result = await formsCollection.updateOne({ "_id": ObjectId(id) }, { $set: { "status": status, "vetter" : vetter } }, { upsert: false });
        return res.status(200).send(result);

    } catch (e) {
        console.error(e);
        return {
            props: { isConnected: false },
        }
    }
}