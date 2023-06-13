const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = ({
    date: { type: Date, required: true},
    text: { type: String, required: true},
    video: { type: String, required: false},
    photo: { type: String, required: false},
    article: { type: String, required: false},
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true}
})

module.exports = postSchema