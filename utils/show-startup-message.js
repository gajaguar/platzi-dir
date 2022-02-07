'use strict'

import { settings } from '../core'
import { log } from './logger'

const { APP_HOST, APP_PORT, APP_ENV } = settings

/**
 * Build the start up message and show it.
 * @returns {Function} - Log with the start up message.
 */
export const showStarupMessage = () => {
  const message = `application is running on http://${APP_HOST}:${APP_PORT} in ${APP_ENV} mode`

  return log.info(message)
}
