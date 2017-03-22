/* global describe, it, after, before */
'use strict'

const should = require('should')

let _app = null

/**
 * Example:
 *
 * const PLUGIN_ID = 'demo.dev-sync'
 *
 * let _conn = null
 * let _channel = null
 * 
 */

describe('<Plugin Name> Inventory Sync', () => {
  
  before('init', function () => {
    // TODO: initialize all needed pre-test requirements i.e. process.env variables or connecting to some required services (e.g. rabbitmq)

    /**
     * Example:
     *
     * process.env.PLUGIN_ID = PLUGIN_ID
     *
     * let amqp = require('amqplib')
     * 
     * amqp.connect('amqp://guest:guest@127.0.0.1/').then((conn) => {
     *   _conn = conn
     *   return conn.createChannel()
     * }).then((channel) => {
     *   _channel = channel
     * }).catch((err) => {
     *   console.log(err)
     * })
     * 
     */

  })

  after('terminate', function () {
    // TODO: gracefully terminate initialized services (e.g. rabbitmq)

    /**
     * Example:
     *
     * _conn.close()
     *
     */
  })

  describe('#start', function () {
    it('should start the app', function (done) {
      this.timeout(10000)
      _app = require('../app')
      _app.once('init', done)
    })
  })

  describe('#sync', function () {
    it('should execute device sync', function (done) {
      this.timeout(8000)

      // TODO: send 'sync' operation to reekoh queue

      /**
       * Example:
       *
       * _channel.sendToQueue(PLUGIN_ID, new Buffer(JSON.stringify({ operation: 'sync' })))
       * _app.on('sync.ok', done)
       *
       */
    })
  })

  describe('#adddevice', () => {
    it('should add the device', function (done) {
      this.timeout(10000)
      
      // TODO: send 'adddevice' operation to reekoh queue

      /**
       * Example:
       * 
       * _channel.sendToQueue(PLUGIN_ID, new Buffer(JSON.stringify({
       *   operation: 'adddevice',
       *   device: {
       *     _id: 123, name: 'device123'
       *   }
       * })))
       *
       * _app.on('add.ok', done)
       *
       */
    })
  })

  describe('#updatedevice', function () {
    it('should update the device', function (done) {
      this.timeout(10000)

      // TODO: send 'updatedevice' operation to reekoh queue

      /**
       * Example:
       * 
       * _channel.sendToQueue(PLUGIN_ID, new Buffer(JSON.stringify({
       *   operation: 'updatedevice',
       *   device: {
       *     _id: 123, name: 'device123'
       *   }
       * })))
       *
       * _app.on('update.ok', done)
       *
       */

    })
  })

  describe('#removedevice', function () {
    it('should remove the device', function (done) {
      this.timeout(10000)

      // TODO: send 'removedevice' operation to reekoh queue

      /**
       * Example:
       * 
       * _channel.sendToQueue(PLUGIN_ID, new Buffer(JSON.stringify({
       *   operation: 'removedevice',
       *   device: {
       *     _id: 123, name: 'device123'
       *   }
       * })))
       *
       * _app.on('remove.ok', done)
       *
       */

    })
  })
  
})

