'use strict'

const reekoh = require('reekoh')
const _plugin = new reekoh.plugins.Logger()

// let connectionString

/**
 * Emitted when device data is received.
 * This is the event to listen to in order to get real-time data feed from the connected devices.
 * * @param {string} logData The log data represented as string. Can be a JSON String.
 */
_plugin.on('log', (logData) => {
  // TODO: Send the log (title + description) to the logging service using the initialized connection..
  console.log(logData)
})

/**
 * Emitted when the platform bootstraps the plugin.
 * The plugin should listen once and execute its init process.
 */
_plugin.once('ready', () => {

  /**
   *
   *  Initialize the connection using the _plugin.config. See config.json
   *  You can customize config.json based on the needs of your plugin.
   *  Reekoh will inject these configuration parameters as _plugin.config when the platform bootstraps the plugin.
   *
   *
   * let connectionString = _plugin.config.connString
   * connection = loggingService.connect(connectionString)
   *
   *
   *  Note: Config Names are based on what you specify on the config.json.
   */

  // TODO: Initialize the connection to the logging service here.
  _plugin.log('Logger has been initialized.')
  _plugin.emit('init')
})

module.exports = _plugin