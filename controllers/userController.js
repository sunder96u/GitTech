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

module.exports = {
    findUsers,
    findUserById
}