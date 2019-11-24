/*const express = require('express')

module.exports = function(server){
    //console.log(server)
    const router = express.Router()
    server.use('/api',router)

    const todoService = require('../api/todo/todoService')
    todoService.register(router,'/todos')
}
*/

const express = require('express')
const auth = require('./auth')

module.exports = function (server) {

    /*
     * Rotas protegidas por Token JWT
     */
    const protectedApi = express.Router()
    server.use('/api', protectedApi)

    //protectedApi.use(auth)

    const BillingCycle = require('../api/todo/todoService')
    BillingCycle.register(protectedApi, '/todos')

    /*
     * Rotas abertas
     */
    const openApi = express.Router()
    server.use('/oapi', openApi)

    const AuthService = require('../api/user/authService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)
}