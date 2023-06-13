const { Group } = require('../models')

const getGroups = async (req, res) => {
    const { id } = req.params
    const groups = await Group.find({ userId: id})
    res.json(groups)

}

module.exports = {
    getGroups
}