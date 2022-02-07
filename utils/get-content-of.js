import { join } from 'path'
import { readFileSync } from 'fs'
import { settings } from '../core'

/**
 * Get the content from file in the given path.
 * @param {string} filePath - Path of the directory (from root).
 * @returns {string}
 */
export const getContentOf = (filePath) => {
  const basePath = settings.ROOT_DIR
  const fullPath = join(basePath, filePath)
  const content = readFileSync(fullPath, 'utf-8')

  return content
}
