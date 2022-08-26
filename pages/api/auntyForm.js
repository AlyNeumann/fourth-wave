import clientPromise from '../../lib/mongodb-connect';
import Forms from '../../models/Forms';

export default async function handler(req, res) {
  const formType = 'aunty';
  const status = "new";
  console.log(req.body)
  const { first,
    last,
    email,
    twitter,
    facebook,
    socialother,
    references,
    reason,
    age,
    wallet } = req.body;
  try {
    if (!first || !last || !email) {
      return res.status(400).json({ data: 'Please enter your first AND last name' });
    }
    if (!email) {
      return res.status(400).json({ data: 'Please enter your email address' });
    }
    if (!references) {
      return res.status(400).json({ data: 'Please enter at least one reference' });
    }
    if (!twitter && !facebook && !socialother) {
      return res.status(400).json({ data: 'Please enter at least one social media account' });
    }

    const forms = new Forms({
      formType,
      first,
      last,
      email,
      twitter,
      facebook,
      socialother,
      references,
      reason,
      wallet,
      age,
      status
    });

    const client = await clientPromise;
    const db = client.db("FourthWave");

    const formsCollection = db.collection("AuntyForms");
    const isDuplicate = await formsCollection.findOne({ "email": email });

    if (isDuplicate) {

      //TODO: make this pretty 
      return res.status(200).send('duplicate email');
    }

    await formsCollection.insertOne(forms);
    return res.redirect(302, '/thankyou');

  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    }
  }
}