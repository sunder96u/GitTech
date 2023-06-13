const Router = require('express').Router()
const controller = require('../controllers/connectionController')

Router.get('/:id', controller.getConnections)

module.exports = Router