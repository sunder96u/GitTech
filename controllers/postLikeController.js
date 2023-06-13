const { PostLike } = require('../models')

const PostLikes = async (req, res) => {

    console.log(req.params)
    const { id } = req.params
    const likes = await PostLike.find({ postId: id })
    res.json(likes)
}

const likes = async (req, res) =>  {
    const likes = await PostLike.find()
    res.json(likes)
}

const AddPostLike = async (req, res) => {
        const liked = await PostLike.create({
            postId: req.query.postId,
            userId: req.query.userId,
            date: req.query.date
        })
        liked.save()

}

module.exports = {
    PostLikes,
    likes,
    AddPostLike,
}