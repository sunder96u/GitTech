const { Connection, User } = require('../models')

const getConnections = async (req, res) => {
    const { id } = req.params
    const connections = await Connection.find({userId: id, accepted: true})
    res.json(connections)
}

const pendingConnections = async (req, res) => {
    const { id } = req.params
    const connection = await Connection.find({userId: id, accepted: false})
    if(!connection) throw Error('no pending connection')
    res.json(connection)
}

const allUsers = async (req, res) => {
    const users = await User.find()
    res.json(users)
}

const newConnection = async (req, res) => {
    try {
        const oldConnection = await Connection.findOne({userId: req.query.userId, connectionId: req.query.connection })
        const revConnection = await Connection.findOne({userId: req.query.connection, connectionId: req.query.userId })
        console.log(oldConnection)
        if(!oldConnection && ! revConnection && req.query.userId != req.query.connection) {
            const newconnection = await Connection.create({
                userId: req.query.userId,
                connectionId: req.query.connection,
                accepted: true
            })
        }

    } catch (e) {

    }

}

const myConnections = async (req, res) => {
    const { id } = req.params
    const connections = await Connection.find({userId: id, accepted: true})
    let myConnection = []
    for (let i = 0; i < connections.length; i++) {
        myConnection.push(await User.findById(connections[i].connectionId))
    }
    res.json(myConnection)
}

const myInvites = async (req, res) => {
    const { id } = req.params
    const invites = await Connection.find({userId: id, accepted: false})
    res.json(invites)
}

module.exports = {
    getConnections,
    pendingConnections,
    allUsers,
    newConnection,
    myConnections,
    myInvites
}