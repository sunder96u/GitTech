const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = ({
    name: { type: String, required: true},
    github: { type: String, required: true},
    website: { type: String, required: false},
    userId: { type: Schema.Types.ObjectId, ref: "User"}
})

module.exports = projectSchema