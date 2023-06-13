const { ReturnDocument } = require('mongodb')
const { ProfileView } = require('../models')

const getViews = async (req, res) => {
    const { id } = req.params
    const views = await ProfileView.find( {userId: id} )
    res.json(views)

}

module.exports = {
    getViews
}