/* global describe, it, after, before */
'use strict'

const should = require('should')

let _app = null

/**
 * Example:
 *
 * const INPUT_PIPE = 'demo.pipe.storage'
 *
 * let _conn = null
 * let _channel = null
 * 
 */

describe('<Plugin Name> Storage', () => {
  
  before('init', function () => {
    // TODO: initialize all needed pre-test requirements i.e. process.env variables or connecting to some required services (e.g. rabbitmq)

    /**
     * Example:
     *
     * process.env.INPUT_PIPE = INPUT_PIPE
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
    it('should process the data', (done) => {
      this.timeout(10000)

      // TODO: send dummy data to reekoh 'INPUT_PIPE' queue to process 
      
      /**
       * Example:
       *
       * if(_channel.sendToQueue(INPUT_PIPE, new Buffer(JSON.stringify('"foo":"bar"')))) {
       *   done()
       * }
       *
       */
    })
  })

  describe('#command', function () {
    it('should have inserted the data', function (done) {
      this.timeout(10000)

      // TODO: 
      //    1. connect to storage server
      //    2. query previously inserted data 
      //    3. verify if correct

      /**
       * Example:
       *
       * let MongoClient = require('mongodb').MongoClient
       * MongoClient.connect(conf.connstring, (err, db) => {
       *   should.ifError(err)
			 * 
       *   db.collection('test').find({
       *     foo: 'bar'
       *   }).toArray((err, docs) => {
       *     should.ifError(err)
       *     should.equal(1, docs.length)
       *     should.equal(record.foo, docs[0].foo, 'Data validation failed. Field: foo')
       *     db.close(true, done)
       *   })
       * })
       *
       */

    })
  })
})

