const mongoose = require('mongoose')
const Schema = mongoose.Schema

const companySchema = ({
    name: { type: String, required: true},
    website: { type: String, required: true},
    city: { type: String, required: true},
    state: { type: String, required: true},
    address1: { type: String, required: true},
    address2: { type: String, required: false},
    logo: { type: String, required: true},
    members: { type: Schema.Types.ObjectId, ref: "User", required: true}
})

module.exports = companySchema