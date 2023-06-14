const passport = require('passport')

const GithubStrategy = require('passport-github2').OAuth2Strategy

// passport.use(new GitHubStrategy (
//     {
//     clientID: process.env.Githubstuff,
//     clientSecret: process.env.githubsecret,
//     callbackURL: process.env.githubcallback
//     },

//     async function(accessToken, refreshToken, profile, cb) {

//     }
// ))

passport.serializeUser(function(user, cb) {
    cb(null, user._id)
})

passport.deserializeUser(async function(userId, cb) {
    cb(null, await User.findById(userId))
})