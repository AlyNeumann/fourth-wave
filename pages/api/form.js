// import clientPromise from '../../lib/mongodb-connect';

export default async function handler(req, res) {

  // try {
  //   await clientPromise
  //   // `await clientPromise` will use the default database passed in the MONGODB_URI
  //   // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
  //   //
  //   // `const client = await clientPromise`
  //   // `const db = client.db("myDatabase")`
  //   //
  //   // Then you can execute queries against your database like so:
  //   // db.find({}) or any of the MongoDB Node Driver commands

  //   return {
  //     props: { isConnected: true },
  //   }
  // } catch (e) {
  //   console.error(e)
  //   return {
  //     props: { isConnected: false },
  //   }
  // }

    // Get data submitted in request's body.
    const body = req.body
  
    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body)
  
    // Guard clause checks for first and last name,
    // and returns early if they are not found
    if (!body.first || !body.last || !body.email) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ data: 'Please enter your first AND last name' })
    }
    if(!body.email){
        return res.status(400).json({ data: 'Please enter your email address' })
    }
    if(!body.twitter && !body.facebook && !body.socialother){
      return res.status(400).json({ data: 'Please enter at least one social media account' })
  }

  
    // Found the name.
    // Sends a HTTP success code
    res.status(200).json({ data: `${body.first}, ${body.last}, ${body.email}, ${body.reason}, ${body.twitter}, ${body.facebook}, ${body.socialother}` })
  }
