const Router = require('express').Router()
const controller = require('../controllers/postLikeController')

Router.get('/:id', controller.PostLikes)
Router.get('/', controller.likes)
Router.put('/', controller.AddPostLike)

module.exports = Router