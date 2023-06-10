const mongoose = require('mongoose')
const Schema = mongoose.Schema

const skillSchema = ({
    skillname: { type: String, required: true},
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true}
})

module.exports = skillSchema