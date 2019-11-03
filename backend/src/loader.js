const server = require('./config/server')
require('./config/database')
//console.log(server)
require('./config/routes')(server)