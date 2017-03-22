/* global describe, it, after, before */
'use strict'

const should = require('should')

let _app = null

/**
 * Example:
 *
 * const PLUGIN_ID = 'demo.channel'
 * const INPUT_PIPE = 'demo.pipe.channel'
 * const COMMAND_RELAY = 'demo.channel.cmd.relay'
 *
 * let _conn = null
 * let _channel = null
 * 
 */

describe('<Plugin Name> Channel', () => {
  
  before('init', function () => {
    // TODO: initialize all needed pre-test requirements i.e. process.env variables or connecting to some required services (e.g. rabbitmq)

    /**
     * Example:
     *
     * process.env.PLUGIN_ID = PLUGIN_ID
     * process.env.INPUT_PIPE = INPUT_PIPE
     * process.env.COMMAND_RELAYS = COMMAND_RELAY
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
    it('should be able to serve a client and exchange data', (done) => {
      this.timeout(10000)

      // TODO: 
      //    1. initialize the receiving channel
      //    2. send dummy data to reekoh 'INPUT_PIPE' queue to process 
      //    3. verify that proccesed data will be receive by receiving channel

      /**
       * Example:
       *
       * let WebSocket = require('ws')
       * let ws = new WebSocket('http://127.0.0.1:8081')
       * 
       * ws.on('message', (data) => {
       *   data = JSON.parse(data)
       *   should.equal(data.foo, 'bar')
       *   done()
       * })
       * 
       * _channel.sendToQueue(INPUT_PIPE, new Buffer('{"foo":"bar"}'))
       *
       */
    })
  })

  describe('#command', function () {
    it('should be able to receive correct command', function (done) {
      this.timeout(10000)

      // TODO: 
      //    1. initialize command relay listener
      //    2. send command to channel plugin 
      //    3. verify that the sent command was received by listener

      /**
       * Example:
       *
       * let async = require('async')
       * 
       * _channel.consume(COMMAND_RELAY, (msg) => {
       *   if (!isEmpty(msg)) {
       *     async.waterfall([
       *       async.constant(msg.content.toString('utf8')),
       *       async.asyncify(JSON.parse)
       *     ], (err, parsed) => {
       *       should.equal(parsed.devices, '123')
       *       should.equal(parsed.deviceGroups, 'abc')
       *       should.equal(parsed.command, 'ACTIVATE')
       *       done(err)
       *     })
       *   }
       *   _channel.ack(msg)
       * }).catch((err) => {
       *   should.ifError(err)
       * })
       * 
       * let url = 'http://127.0.0.1:' + PORT
       * let ws = new WebSocket(url)
       * 
       * ws.on('open', function () {
       *   ws.send(JSON.stringify({
       *     type: 'message',
       *     devices: '123',
       *     deviceGroups: 'abc',
       *     command: 'ACTIVATE'
       *   }))
       * })
       *
       */

    })
  })
})

