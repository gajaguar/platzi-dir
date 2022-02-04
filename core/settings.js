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
   * Obtain the database user name.
   * @returns {string} - The database user name.
   * @private
   */
  #DB_USER = process.env.DB_USER || 'root'

  /**
   * Obtain the database password.
   * @returns {string} - The database password.
   * @private
   */
  #DB_PASSWORD = process.env.DB_PASSWORD || 'root'

  /**
   * Obtain the database name.
   * @returns {string} - The database name.
   */
  DB_NAME = process.env.DB_NAME || 'myDatabase'

  /**
   * Obtain the database host.
   * @returns {string} - The database host.
   * @private
   */
  #DB_HOST = process.env.DB_HOST || 'localhost'

  /**
   * Obtain the database port.
   * @returns {number} - The database port.
   * @private
   */
  #DB_PORT = Number(process.env.DB_PORT) || 57017

  /**
   * Obtain the database connection string.
   * @returns {string} - The database connection string.
   */
  DB_CONNECTION_STRING = `mongodb://${this.#DB_USER}:${this.#DB_PASSWORD}@${
    this.#DB_HOST
  }:${this.#DB_PORT}/${this.DB_NAME}`

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

/**
 * Instance of the application configuration.
 * @type {Configuration} - The application configuration.
 */
export const settings = new Configuration()
