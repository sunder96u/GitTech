const Router = require('express').Router()
const controller = require('../controllers/companyController')

Router.get('/:id', controller.getCompany)

module.exports = Router