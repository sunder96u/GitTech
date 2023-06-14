const Router = require('express').Router()
const controller = require('../controllers/projectController')

Router.get('/:id', controller.myProjects)
Router.post('/', controller.newProject)
Router.put('/', controller.editProject)
Router.delete('/:id', controller.deleteProject)

module.exports = Router