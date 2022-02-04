import { courses } from '../utils'
import { getDbConnection } from './'
import { settings } from '../core'

/**
 * Add mocked data to the database.
 */
export const populateDatabase = async () => {
  const dbConnetion = await getDbConnection()
  const collection = dbConnetion.collection('courses')
  const options = { ordered: true }
  const result = await collection.insertMany(courses, options)
  const { APP_NAME: appName } = settings
  console.log(
    `[${appName}] ${result.insertedCount} courses were added to the database.`
  )
}