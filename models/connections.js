const mongoose = require('mongoose')
const Schema = mongoose.Schema

const connectionSchema = ({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true},
    connectionId: { type: Schema.Types.ObjectId, ref: "User", required: true},
    accepted: { type: Boolean, required: true}
})

module.exports = connectionSchema