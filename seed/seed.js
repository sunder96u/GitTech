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

    // const connection1 = await new Connection({
    //     userId: user1._id,
    //     connectionId: user2._id,
    //     accepted: true
    // })
    // connection1.save()

    // const profileView = await new ProfileView({
    //     userId: user1._id,
    //     viewedUser: user2._id,
    //     date: '2023'
    // })
    // profileView.save()

}

const post = async () => {
    const users = await User.find()
    const newpost = [
        {
        date: '2023',
        text: "This is the first sample post, lets see how it works",
        userId: users[0]._id
        },
        {
        date: '2023',
        text: "This is the second smaple post, woo woo",
        userId: users[1]._id
        }
    ]
    await Post.insertMany(newpost)
}

// const postLike = async () => {
//     const posts = await Post.find()
//     const users = await User.find()

//     const newPostLike = [
//         {
//             userId: users[0]._id,
//             postId: posts[0]._id,
//             date: "2023"
//         }
//     ]
//     await PostLike.insertMany(newPostLike)
// }

const comment = async () => {
    const users = await User.find()
    const posts = await Post.find()

    const newcomment = [
        {
            userId: users[1]._id,
            date: '2023',
            comment: "this is a test comment",
            postId: posts[0]._id
        }
    ]
    await Comment.insertMany(newcomment)
}

const company = async () => {
    const users = await User.find()

    const newCompany = [
        {
        name: "Fake Company 1",
        website: "www.fakewebsite.com",
        city: "San Antonio",
        state: "Texas",
        address1: "300 Ave. A",
        logo: "https://assets.entrepreneur.com/content/3x2/2000/20150805204041-google-company-building-corporate.jpeg",
        members: users[1]._id
        }
    ]
    await Company.insertMany(newCompany)
}

    // const company1 = await new Company({

    // })
    // company1.save()


const run = async () => {
     // await main()
     // await post()
     // await postLike()
     await comment()
     await company()
    db.close()
}

run()