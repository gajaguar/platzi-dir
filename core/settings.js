import dotenv from 'dotenv'

dotenv.config()

/*
 * Class representing the application configuration.
 * @class
 */
class Configuration {
  /**
   * Obtain the application name.
   * @returns {string} - The application name.
   */
  APP_NAME = process.env.APP_NAME || 'myApplication'

  /**
   * Obtain the application host.
   * @returns {string} - The application host.
   */
  APP_HOST = process.env.APP_HOST || 'localhost'

  /**
   * Obtain the application port.
   * @returns {number} - The application port.
   */
  APP_PORT = Number(process.env.APP_PORT) || 3000

  /**
   * Obtain the application environment.
   * @returns {string} - The application environment.
   */
  APP_ENV = process.env.APP_ENV || 'development'

  /**
   * Find the root path.
   * @returns {string} - The root path for the application.
   */
  getRootDir() {
    const { pathname: __root } = new URL('../', import.meta.url)
    return __root
  }

  /**
   * Obtain the application root path.
   * @returns {string} - The application root path.
   */
  get ROOT_DIR() {
    return this.getRootDir()
  }
}

export const settings = new Configuration()
