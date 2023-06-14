const Router = require('express').Router()
const controller = require('../controllers/profileViewsController')

Router.get('/:id', controller.getViews)
Router.put('/', controller.addView)

module.exports = Router