import { courses } from '../utils'
import { getDbConnection } from './'
import { settings } from '../core'

/**
 * Add mocked data to the database.
 */
export const populateDatabase = async () => {
  const { APP_NAME } = settings
  try {
    const dbConnetion = await getDbConnection()
    const collection = dbConnetion.collection('courses')
    const options = { ordered: true }
    const result = await collection.insertMany(courses, options)
    console.log(
      `[${APP_NAME}] ${result.insertedCount} courses were added to the database.`
    )
  } catch (error) {
    console.error(`[${APP_NAME}] ${error.message}`)

    throw error
  }
}
