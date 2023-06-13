const Router = require('express').Router()
const controller = require('../controllers/postController')

Router.get('/', controller.findPosts)
Router.post('/', controller.createPost)

module.exports = Router