const { ReturnDocument } = require('mongodb')
const { ProfileView } = require('../models')

const getViews = async (req, res) => {
    const { id } = req.params
    const views = await ProfileView.find( {userId: id} )
    res.json(views)

}

const addView = async (req, res) => {
// check if profileview already exists
// if exists do nothing
// if not create new view
    const { userId } = req.query.userId
    const profile = await ProfileView.find({ userId: req.query.userId, viewedUser: req.query.viewed})
    console.log(`${profile}`)

    if(profile) {
        const newView = await ProfileView.create({
            userId: req.query.userId,
            viewedUser: req.query.viewed,
            date: req.query.date
        })
        console.log(newView)
    }
    

}

module.exports = {
    getViews,
    addView
}