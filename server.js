const express = require('express')
const db = require('./db')
const PORT = process.env.PORT || 3001
const AppRouter = require('./routes/AppRouter')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json('I am Groot!')
})
app.use('/api', AppRouter)
app.listen(PORT, () => {
    console.log(`Express server on port: ${PORT}`)
})