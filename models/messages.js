const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = ({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true},
    recieverId: { type: Schema.Types.ObjectId, ref: "User", required: true},
    sendTime: { type: Date, required: true},
    opened: { type: Boolean, required: true},
    openTime: { type: Date, required: false},
    title: { type: String, required: true},
    body: { type: String, required: true}
})

module.exports = messageSchema