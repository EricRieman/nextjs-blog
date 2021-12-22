import { MongoClient } from 'mongodb'

const connection = process.env.DB_CONNECTION

export const connectToDb = async () => {
console.log(connection)

  const client = await MongoClient.connect(connection)
  return client
}