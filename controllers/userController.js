const { User } = require('../models')

const findUsers = async (req, res) => {
    const users = await User.find()
    res.json(users)
}

const findUserById = async (req, res) => {
    const { id } = req.params
    const user = await User.findById(id)
    res.json(user)
}

const editUser = async (req, res) => {
    const edit = await User.findByIdAndUpdate(req.query.userId, {[req.query.whatToUpdate]: req.query.update})
    res.json(edit)
}

module.exports = {
    findUsers,
    findUserById,
    editUser
}