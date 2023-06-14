const Router = require('express').Router()
const controller = require('../controllers/skillController')

Router.get('/:id', controller.mySkills)
Router.post('/', controller.addSkill)
Router.put('/', controller.editSkill)
Router.delete('/', controller.deleteSkill)

module.exports = Router