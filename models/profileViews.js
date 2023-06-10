const mongoose = require('mongoose')
const Schema = mongoose.Schema

const profileViewSchema = ({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true},
    viewedUser: { type: Schema.Types.ObjectId, ref: "User", required: true},
    date: { type: Date, required: true}
})

module.exports = profileViewSchema