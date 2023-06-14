const Router = require('express').Router()
const passport = require('passport')

const commentLikesRouter = require('./commentLikesRouter')
const commentsRouter = require('./commentsRouter')
const companiesRouter = require('./companiesRouter')
const connectionsRouter = require('./connectionsRouter')
const educationRouter = require('./educationRouter')
const experienceRouter = require('./experiencesRouter')
const groupsRouter = require('./groupsRouter')
const messagesRouter = require('./messagesRouter')
const postLikeRouter = require('./postLikesRouter')
const postsRouter = require('./postsRouter')
const profileViewRouter = require('./profileViewsRouter')
const projectsRouter = require('./projectRouter')
const schoolsRouter = require('./schoolsRouter')
const skillsRouter = require('./skillsRouter')
const userRouter = require('./usersRouter')

Router.use('/commentLike', commentLikesRouter)
Router.use('/comment', commentsRouter)
Router.use('/company', companiesRouter)
Router.use('/connection', connectionsRouter)
Router.use('/education', educationRouter)
Router.use('/experience', experienceRouter)
Router.use('/group', groupsRouter)
Router.use('/messages', messagesRouter)
Router.use('/postLike', postLikeRouter)
Router.use('/post', postsRouter)
Router.use('/profileView', profileViewRouter)
Router.use('/project', projectsRouter)
Router.use('/school', schoolsRouter)
Router.use('/skill', skillsRouter)
Router.use('/user', userRouter)

Router.get('/githubauthroute', passport.authenticate(
    'github', {
        scope: ['profile', 'email']
    }
))
Router.get('/callback', passport.authenticate(
    'github', {
        successRedirect: '/user',
        failureRedirect: '/user'
    }
))

Router.get('/logout', function (req, res) {
    req.logout(function() {
        res.redirect('/user')
    })
})

module.exports = Router