import { MongoClient } from 'mongodb'

const connection = process.env.db_useLocal  ? `mongodb://localhost:27017/${process.env.db_cluster}`
                                            : `mongodb+srv://${process.env.db_user}:${process.env.db_pass}@cluster0.y9rq6.mongodb.net/${process.env.db_cluster}?retryWrites=true&w=majority`

export const connectToDb = async () => {
  const client = await MongoClient.connect(connection)
  return client
}