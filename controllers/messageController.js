const { Message } = require('../models')

const getMessage = async (req, res) => {
    const { id } = req.params
    const messages = await Message.find({userId: id})
    res.json(messages)
}

module.exports = {
    getMessage
}