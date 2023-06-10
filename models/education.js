const mongoose = require('mongoose')
const Schema = mongoose.Schema

const educationSchema = ({
    monthStart: { type: Number, required: true},
    yearStart: { type: Number, required: true},
    monthEnd: { type: Number, required: false},
    yearEnd: { type: Number, required: false},
    school: { type: Schema.Types.ObjectId, ref: "School", required: true},
    degreeType: { type: String, required: true},
    major: { type: String, required: true},
    minor: { type: String, required: false},
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true}
})

module.exports = educationSchema