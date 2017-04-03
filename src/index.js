const microApi = require('micro-api')
const cors = require('micro-cors')()
const handlers = require('./handlers')

const api = microApi([
  {
    method: 'get',
    path: '/foo',
    handler: cors(handlers.foo)
  }
])

module.exports = api
