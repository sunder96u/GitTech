const { Skill } = require('../models')

const mySkills = async (req, res) => {
    const { id } = req.params
    const skills = await Skill.find({userId: id})
    res.json(skills)
}

const addSkill = async (req, res) => {
    const newSkill = await Skill.create({
        skillname: req.query.skillname,
        userId: req.query.userId
    })
    res.json(newSkill)
}

const editSkill = async (req, res) => {
    const edit = await Skill.findByIdAndUpdate(req.query.userId, {[req.query.whatToUpdate]: req.query.update})
    res.json(edit)
}

const deleteSkill = async (req, res) => {
    const { id } = req.params
    const deleteSkill = await Skill.findByIdAndDelete(id)
    res.json(deleteSkill)
}

module.exports = {
    mySkills,
    addSkill,
    editSkill,
    deleteSkill
}