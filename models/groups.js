const mongoose = require('mongoose')
const Schema = mongoose.Schema

const groupSchema = ({
    name: { type: String, required: true},
    description: { type: String, required: true},
    logo: { type: String, required: true},
    userId: { type: Schema.Types.ObjectId, ref: "User"}
})

module.exports = groupSchema