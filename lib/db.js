import { MongoClient } from 'mongodb'
import { settings } from '../core/'

const {
  APP_NAME: appName,
  DB_CONNECTION_STRING: mongoUri,
  DB_NAME: dbName,
} = settings

/**
 * Database connection store.
 * @type {Object} - Database connection.
 */
let connection = null

/**
 * Attempt to connect to the database.
 * @returns {Promise} - Promise of the database connection.
 */
export const getDbConnection = () => {
  if (connection) return connection
  let client = null
  try {
    client = MongoClient.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    connection = client.db(dbName)
  } catch (error) {
    console.error(`[${appName}] ${error.message}`)

    throw error
  }

  return connection
}
