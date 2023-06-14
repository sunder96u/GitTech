const db = require('../db')
const { CommentLike, Comment, Company, Connection, PostLike, ProfileView, Post, User} = require('../models') 

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const users = [
        {
            firstName: "John",
            lastName: "Doe",
            photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Anonymous_emblem.svg/640px-Anonymous_emblem.svg.png",
            city: "San Antonio",
            state: "Texas"
        },
        {
            firstName: "Test",
            lastName: "User",
            photo: "https://icatprogramme.org/site-assets/uploads/2017/06/Anon-profile.png",
            city: "San Antonio",
            state: "Texas",  
        }
    ]
    await User.insertMany(users)

}


const run = async () => {
     await main()
    db.close()
}

run()