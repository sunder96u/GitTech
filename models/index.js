const mongoose = require('mongoose')
const commentLikeSchema = require('./commentLikes')
const commentSchema = require('./comments')
const companySchema = require('./companies')
const connectionSchema = require('./connections')
const educationSchema = require('./education')
const experienceSchema = require('./experiences')
const groupSchema = require('./groups')
const messageSchema = require('./messages')
const postLikeSchema = require('./postLikes')
const postSchema = require('./posts')
const profileViewSchema = require('./profileViews')
const projectSchema = require('./projects')
const schoolSchema = require('./schools')
const skillSchema = require('./skills')
const userSchema = require('./users')

const CommentLike = mongoose.model('CommentLike', commentLikeSchema)
const Comment = mongoose.model('Comment', commentSchema)
const Company = mongoose.model('Compnay', companySchema)
const Connection = mongoose.model('Connection', connectionSchema)
const Education = mongoose.model('Education', educationSchema)
const Experience = mongoose.model('Experience', experienceSchema)
const Group = mongoose.model('Group', groupSchema)
const Message = mongoose.model('Message', messageSchema)
const PostLike = mongoose.model('PostLike', postLikeSchema)
const Post = mongoose.model('Post', postSchema)
const ProfileView = mongoose.model('ProfileView', profileViewSchema)
const Project = mongoose.model('Project', projectSchema)
const School = mongoose.model('School', schoolSchema)
const Skill = mongoose.model('Skill', skillSchema)
const User = mongoose.model('User', userSchema)

module.exports = {
    CommentLike,
    Comment,
    Company,
    Connection,
    Education,
    Experience,
    Group,
    Message,
    PostLike,
    Post,
    ProfileView,
    Project,
    School,
    Skill,
    User
}