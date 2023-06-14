const mongoose = require('mongoose')
//const uri = "mongodb+srv://Underdog96u:JYDDevhGRF9qmwl3@gittech.hinqbut.mongodb.net/?retryWrites=true&w=majority"
const mongoURI = process.env.DATABASE_URL


mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
        console.log(`Successfully connected to MongoDB`)
    })
    .catch((e) => {
        console.error('Connection error', e.message)
    })

mongoose.set('debug', true)

const db = mongoose.connection
module.exports = db
