const Router = require('express').Router()
const controller = require('../controllers/userController')

Router.get('/', controller.findUsers)
Router.get('/:id', controller.findUserById)
Router.put('/edit/', controller.editUser)

module.exports = Router