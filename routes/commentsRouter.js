const Router = require('express').Router()
const controller = require('../controllers/commentController')

Router.get('/:id', controller.getComments)
Router.post('/', controller.createComment)

module.exports = Router