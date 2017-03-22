'use strict'

let reekoh = require('reekoh')
let _plugin = new reekoh.plugins.Service()
let serviceClient = null

/**
 * Emitted when device data is received.
 * @param {object} data The data coming from the device represented as JSON Object.
 */
_plugin.on('data', (data) => {
  /*
   * Send the data to the service and expect a result.
   *
   * Example:
   *
   * serviceClient.send(data, (error, result) => {
   *     if (error) {
   *         _plugin.logException(error)
   *     }
   *     else {
   *         _plugin.pipe(data, result)
   *          .then(() => {
   *            _plugin.log({
   *              title: 'Data sent to service client.',
   *              data: data
   *            })
   *          .catch((err) => {0.
   *            _plugin.logException(err)
   *          })
   *     }
   * })
   */
  console.log(data)
})

/**
 * Emitted when the platform bootstraps the plugin. The plugin should listen once and execute its init process.
 */
_plugin.once('ready', () => {
  /*
   *  Initialize the connection using the _plugin.config. See config.json
   *  You can customize config.json based on the needs of your plugin.
   *  Reekoh will inject these configuration parameters as _plugin.config when the platform bootstraps the plugin.
   *
   *  Example:
   *
   * let clientId = _plugin.config.clientid
   * let clientSecret = _plugin.config.clientsecret
   *
   * serviceClient = new ServiceClient(clientId, clientSecret);
   *
   * Note: Config Names are based on what you specify on the config.json.
   */
  console.log(_plugin.config)
  _plugin.log('Service has been initialized.')
})

process.on('SIGINT', () => {
  // Do graceful exit
  serviceClient.close()
})
