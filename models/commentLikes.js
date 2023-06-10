const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentLikeSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true},
    commentId: { type: Schema.Types.ObjectId, ref: "Comment", required: true}
})

module.exports = commentLikesSchema