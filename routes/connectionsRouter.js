const Router = require('express').Router()
const controller = require('../controllers/connectionController')

Router.get('/:id', controller.getConnections)
Router.get('/pending/:id', controller.pendingConnections)
Router.get('/', controller.allUsers)
Router.post('/add/', controller.newConnection)
Router.get('/myconnections/:id', controller.myConnections)
Router.get('/myinvites/:id', controller.myInvites)

module.exports = Router