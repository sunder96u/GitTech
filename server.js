const express = require('express')
const db = require('./db')
// const PORT = process.env.PORT || 3001
const AppRouter = require('./routes/AppRouter')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json('I am Groot!')
})
app.set('port', process.env.PORT || 8000)
app.use('/api', AppRouter)

console.log(process.env.PORT)


app.listen(app.get('port'), () => {
    console.log(`port: ${app.get('port')} `)
})