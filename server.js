const express = require('express')
const db = require('./db')
// const PORT = process.env.PORT || 3001
const AppRouter = require('./routes/AppRouter')
const cors = require('cors')
const logger = require('morgan')
const session = require('express-session')
const passport = require('passport')
require('./passport')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())
//app.use(cookieParser())
//app.use(express.static(path.join(_dirname, 'public')))

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())

app.get('/', (req, res) => {
    res.json('I am Groot!')
})
app.set('port', process.env.PORT || 8000)
app.use('/api', AppRouter)

console.log(process.env.PORT)


app.listen(app.get('port'), () => {
    console.log(`port: ${app.get('port')} `)
})