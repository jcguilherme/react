const express = require('express')

module.exports = function(server){
    //console.log(server)
    const router = express.Router()
    server.use('/api',router)

    const todoService = require('../api/todo/todoService')
    todoService.register(router,'/todos')
}