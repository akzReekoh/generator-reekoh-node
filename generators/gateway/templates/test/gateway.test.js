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

describe('<Plugin Name> Gateway', () => {
  
  before('init', function () {
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

  describe('#data', function () {
    it('should process the data', function (done) {
      this.timeout(10000)
      
      // TODO: 
      //    1. create a dummy sender to gateway plugin
      //    2. send data to gateway plugin
      //    3. verify that the data was relayed to appropriate queue

      /**
       * Example:
       *
       * 
       * 
       *
       */

    })
  })

  describe('#command', function () {
    it('should receive command from gateway plugin', function (done) {
      this.timeout(10000)

      // TODO: 

      /**
       * Example:
       *
       * 
       * 
       *
       */
    })
  })
})