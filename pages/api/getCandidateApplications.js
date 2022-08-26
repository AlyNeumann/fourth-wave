import clientPromise from '../../lib/mongodb-connect';

export default async function handler(req, res) {
    try {
        const client = await clientPromise;
        const db = client.db("FourthWave");

        const formsCollection = await db.collection("CandidateForms").find({}).limit(100).toArray();
        return res.status(200).send(formsCollection);
    }
    catch (e) {
        console.log(e);
    }
}