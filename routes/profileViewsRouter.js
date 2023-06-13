const Router = require('express').Router()
const controller = require('../controllers/profileViewsController')

Router.get('/:id', controller.getViews)

module.exports = Router