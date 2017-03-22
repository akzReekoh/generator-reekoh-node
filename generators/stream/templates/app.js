'use strict'

let reekoh = require('reekoh')
let _plugin = new reekoh.plugins.Stream()
let client = null

/**
 * Emitted when the platform issues a sync request. Means that the stream plugin should fetch device data from the 3rd party service.
 */
_plugin.on('sync', () => {
  /*
   * When fetching data:
   * 1. Verify if the device id is registered by calling _plugin.requestDeviceInfo and passing the 'device' identifier
   * 2. If the device is registered, forward the data by using _plugin.pipe()
   *
   * Sample code:
   *
   * client.fetchData((err, dataCollection) => {
   *   dataCollection.forEach((data) => {
   *     _plugin.requestDeviceInfo(data.deviceId)
   *       .then(() => {
   *         _plugin.pipe(data)
   *       })
   *       .catch((err) => {
   *         _plugin.logException(err)
   *       })
   *  })
   * })
   */
})

/**
 * Emitted when a message or command is received from the platform.
 * The message object has the following properties:
 * - device {String} - which is the ID of the target device
 * - messageId {String} - which is the ID of the message in the Reekoh database
 * - message {String} - which is the message/command itself
 *
 * @param message {Object} - The message which came from an Application or another Device from within the same pipeline as the stream.
 */
_plugin.on('message', function (message) {
  // TODO: Send the message to the target client/device. These messages may contain data or commands.
  console.log(message)
})

/**
 * Emitted when the platform bootstraps the plugin. The plugin should listen once and execute its init process.
 */
_plugin.once('ready', () => {
  /*
   * Initialize your stream using the _plugin.config. See config.json
   * You can customize config.json based on the needs of your plugin.
   * Reekoh will inject these configuration parameters as _plugin.config when the platform bootstraps the plugin.
   *
   * Note: Config Names are based on what you specify on the config.json.
   */

  // TODO: Initialize your client or subscribe to the 3rd party service here.

  /*
   * Sample Code
   *
   * let service = require('service')
   *
   * service.connect(_plugin.config, (error, serviceClient) => {
   *  client = serviceClient
   * });
   */

  /*
   * When incoming data is received, forward it by using _plugin.pipe()
   */
  console.log(_plugin.config)
  _plugin.log('Stream has been initialized.')
})

process.on('SIGINT', () => {
  // Do graceful exit
  client.close()
})
