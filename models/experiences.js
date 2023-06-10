const mongoose = require('mongoose')
const Schema = mongoose.Schema

const experienceSchema = ({
    startMonth: { type: Number, required: true},
    startYear: { type: Number, required: true},
    endMonth: { type: Number, required: false},
    endYear: { type: Number, required: false},
    company: { type: String, required: false},
    techCompany: { type: Schema.Types.ObjectId, ref: "Company"},
    position: { type: String, required: true},
    duties: { type: String, required: false},
    userId: { type: Schema.Types.ObjectId, ref: "User"}
})

module.epxorts = experienceSchema