const { Project } = require('../models')

const myProjects = async (req, res) => {
    const { id } = req.params
    const projects = await Project.find({ userId: id })
    res.json(projects)
}

const newProject = async (req, res) => {
    const newproject = await Project.create({
        name: req.query.name,
        github: req.query.github,
        website: req.query.website,
        userId: req.query.userId
    })
    res.json(newproject)
}

const editProject = async (req, res) => {
    const edit = await Project.findByIdAndUpdate(req.query.userId, {[req.query.whatToUpdate]: req.query.update})
    res.json(edit)

}

const deleteProject = async (req, res) => {
    const { id } = req.params
    const deleteProject = await Project.findByIdAndDelete(id)
    res.json(deleteProject)
}   

module.exports = {
    myProjects,
    newProject,
    editProject,
    deleteProject
}