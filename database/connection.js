import { MongoClient } from 'mongodb'
import { settings } from '../core/'

/**
 * Database connection store.
 * @type {Object} - Database connection.
 */
let database = null

/**
 * Attempt to connect to the database.
 * @returns {Promise} - Promise of the database connection.
 */
export const getDbConnection = async () => {
  if (database) return database
  const { APP_NAME, DB_CONNECTION_STRING, DB_NAME } = settings
  try {
    const client = new MongoClient(DB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    await client.connect()
    database = client.db(DB_NAME)
    console.log(`[${APP_NAME}] Connected to the database.`)
  } catch (error) {
    console.error(`[${APP_NAME}] ${error.message}`)

    throw error
  }

  return database
}
