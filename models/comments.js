const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = ({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true},
    date: { type: Date, required: true},
    comment: { type: String, required: true}
})

module.exports = commentsSchema