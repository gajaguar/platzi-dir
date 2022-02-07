import { MongoClient } from 'mongodb'
import { settings } from '../core/'
import { log } from '../utils'

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
  const { DB_CONNECTION_STRING, DB_NAME } = settings
  try {
    const client = new MongoClient(DB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    await client.connect()
    database = client.db(DB_NAME)
    log.info('Connected to the database.')
  } catch (error) {
    log.error(`${error.message}`)

    throw error
  }

  return database
}
