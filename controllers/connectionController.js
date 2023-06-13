const { Connection } = require('../models')

const getConnections = async (req, res) => {
    console.log(`get connections hit`)
    const { id } = req.params
    const connections = await Connection.find({userId: id}, {accepted: true})
    res.json(connections)
}

module.exports = {
    getConnections
}