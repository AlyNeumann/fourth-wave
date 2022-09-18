import clientPromise from '../../lib/mongodb-connect';

export default async function handler(req, res) {
    try {
        const client = await clientPromise;
        const db = client.db("FourthWave");

        const acceptedFormsCollection = await db.collection("AcceptedForms").find({}).limit(100).toArray();
        return res.status(200).send(acceptedFormsCollection);
    }
    catch (e) {
        console.log(e);
    }
}