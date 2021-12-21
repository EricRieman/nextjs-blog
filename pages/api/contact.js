import { connectToDb } from "../../modules/db"

const handler = async (req, res) => {
  if ( req.method === 'POST' ) {
    const {email, name, message} = req.body

    if( !email   || !email.includes('@') || 
        !name    || name.trim() === ''  ||
        !message || message.trim() === ''
    ) {
      res.status(422).json({message: 'Invalid input.'})
      return
    }

    const newMessage = {email, name, message}

    const client = await connectToDb()
    try { 
      const result = await client.db().collection(process.env.db_collection).insertOne(newMessage)
      client.close()
    }
    catch(err) {
      if ( client )
        client.close()

      console.log(err)
      res.status(500).json({message: 'could not connect to db'})
      return
    }

    res.status(201).json({message: 'Success, message stored'})
  }
}

export default handler