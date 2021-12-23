import { MongoClient } from 'mongodb'

const connection = process.env.NODE_ENV == 'development' ? 
                  `mongodb://localhost:27017/${process.env.DB_NAME}` :
                  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_CLUSTER}.y9rq6.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

export const connectToDb = async () => {
console.log(connection)

  const client = await MongoClient.connect(connection)
  return client
}