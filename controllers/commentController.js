const { Comment } = require('../models')

const getComments = async (req, res) => {
    const { id } = req.params
    const comments = await Comment.find({ postId: id}).sort({date:-1})
    res.json(comments)
}

const createComment = async (req, res) => {
    const newComment = await Comment.create({
        userId: req.query.userId,
        date: req.query.date,
        comment: req.query.comment,
        postId: req.query.postId
    })
}


module.exports = {
    getComments,
    createComment
}