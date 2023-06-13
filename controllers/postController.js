const { Post } = require('../models')

const findPosts = async (req, res) => {
    const posts = await Post.find().sort({date: -1})
    res.json(posts)
}

const createPost = async (req, res) => {
    const post = await Post.create({
        date: req.query.date,
        text: req.query.text,
        userId: req.query.userId
    })
    post.save()
}

module.exports = {
    findPosts,
    createPost

}