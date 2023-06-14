const Router = require('express').Router()
const controller = require('../controllers/experienceController')

Router.get('/:id', controller.myExperience)
Router.post('/', controller.addExperience)
Router.put('/', controller.editExperience)
Router.delete('/:id', controller.deleteExperience)

module.exports = Router