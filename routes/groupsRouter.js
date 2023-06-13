const Router = require('express').Router()
const controller = require('../controllers/groupController')

Router.get('/:id', controller.getGroups)

module.exports = Router