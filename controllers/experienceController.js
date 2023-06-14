const { Experience } = require('../models')

const myExperience = async (req, res) => {
    const { id } = req.params
    const exp = await Experience.find({userId: id})
    res.json(exp)
}

const addExperience = async (req, res) => {
    const newExp = await Experience.create({
        startMonth: req.query.startMonth,
        startYear: req.query.startYear,
        endMonth: req.query.EndMonth,
        endYear: req.query.endYear,
        company: req.query.company,
        techCompany: req.query.techCompany,
        position: req.query.position,
        duties: req.query.duties,
        userId: req.query.userId
    })
    res.json(newExp)

}

const editExperience = async (req, res) => {
    const edit = await Experience.findByIdAndUpdate(req.query.userId, {[req.query.whatToUpdate]: req.query.update})
    res.json(edit)
}

const deleteExperience = async (req, res) => {
    const { id } = req.params
    const deleteExp = await Experience.findByIdAndDelete(id)
    res.json(deleteExp)
}

module.exports = {
    myExperience,
    addExperience,
    editExperience,
    deleteExperience
}