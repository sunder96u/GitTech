const Router = require('express').Router()
const controller = require('../controllers/messageController')

Router.get('/:id', controller.getMessage)

module.exports = Router