const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schoolSchema = ({
    name: { type: String, required: true},
    city: { type: String, required: true},
    state: { type: String, required: true},
    zipcode: { type: Number, required: true},
    address1: { type: String, required: true},
    address2: { type: String, required: false},
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true},
})

module.exports = schoolSchema