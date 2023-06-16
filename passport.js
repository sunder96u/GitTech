const passport = require('passport')

const GithubStrategy = require('passport-github2').OAuth2Strategy

passport.serializeUser(function(user, cb) {
    cb(null, user._id)
})

passport.deserializeUser(async function(userId, cb) {
    cb(null, await User.findById(userId))
})

passport.use(new GithubStrategy (
    {
    clientID: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,
    callbackURL: process.env.CALLBACKURL
    },

    async function(accessToken, refreshToken, profile, cb) {

    }
))

