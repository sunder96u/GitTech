const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = Schema ({
    firstName: { type: String, required: true},
    lastName: { type: String, required: false},
    photo: { type: String, required: false},
    background: { type: String, required: false},
    website: { type: String, required: false},
    city: { type: String, required: true},
    state: { type: String, required: true},
    position: { type: String, required: false},
    description: { type: String, required: false}
    })

    module.exports = userSchema