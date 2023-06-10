const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postLikeSchema = ({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true},
    postId: { type: Schema. Types.ObjectId, ref: "Post", required: true},
    date: { type: Date, required: true}
})

module.exports = postLikeSchema