
/* buttons */
const search = document.querySelector('.search')
const home = document.querySelector('.home')
const network = document.querySelector('.network')
const messages = document.querySelector('.messages')
const notifications = document.querySelector('.notifications')
const profile = document.querySelector('.profile')
const connections = document.querySelector('.connections')
const views = document.querySelector('.views')
const company = document.querySelector('.company')
const groups = document.querySelector('.groups')
const newPost = document.querySelector('.createPostInput')
const photo = document.querySelector('.photo')
const video = document.querySelector('.video')
const article = document.querySelector('.article')
const like = document.querySelector('.like')
const comment = document.querySelector('.comment')
const share = document.querySelector('.share')
const send = document.querySelector('.send')
const messageBody = document.querySelector('.messageBody')

let user = {};


/* Functions */
buildPage = async () => {
    // if (user.length === undefined) {
    //     buildLogInModal()
    //     const modal = document.getElementById('LoginModal')
    //     modal.style.display = "block"
    // }
    buildLeftSideBar()
    buildNewsFeed()
}

buildLeftSideBar = async () => {
    const harduser = `6489cf8c53aaf6f85a935d49`

    const leftSideBar = document.querySelector('.leftSideBar')
    const myUser = await axios.get(`https://gittech-production.up.railway.app/api/user/${harduser}`)
    user = myUser
    window.localStorage.setItem('currentUser', JSON.stringify(user.data._id))
    window.localStorage.setItem('viewedUser', JSON.stringify(user.data._id))
    GitTech.currentUser = user
    const connections = await axios.get(`https://gittech-production.up.railway.app/api/connection/${myUser.data._id}`)
    const views = await axios.get(`https://gittech-production.up.railway.app/api/profileView/${myUser.data._id}`)

    leftSideBar.innerHTML = `
    <div class="profileInfo backgroundImg">
        <img class="profilePic" src="${myUser.data.photo}">
    </div>
    <div class="moreInfo">
    <p>${myUser.data.firstName} ${myUser.data.lastName}</p>
        <a href="../client/network.html"><h3>Connections: ${connections.data.length}</h3></a>
        <a href='#' class='profileView'><h3>Views: ${views.data.length}</h3></a>
    </div>`

    const profile = document.querySelector('.profilePic')
    profile.onclick = () => {
        location.href="./profile.html"
    }

    const profileViewers = document.querySelector('.profileView')
    profileViewers.onclick = () => {
    buildProfileViewsModal()
    const modal = document.getElementById('profileViewModal')
    modal.style.display = 'block'
    }
}

buildNewsFeed = async () => {
    const newsFeed = document.querySelector('.newsFeed')
    const feed = await axios.get(`https://gittech-production.up.railway.app/api/post/`)
    newsFeed.innerHTML = ``
    let currentPost = []
    let currentComment = []
    let postComment = []
    let commentComment = []
    let currentPostUser = []
    
    for (let i = 0; i < feed.data.length; i++) {
        let postUser = await axios.get(`https://gittech-production.up.railway.app/api/user/${feed.data[i].userId}`)
        let postLikes = await axios.get(`https://gittech-production.up.railway.app/api/postLike/${feed.data[i]._id}`)

        const currentDate = new Date()
        const likes = postLikes.data.length

        const div = document.createElement('div')
        div.classList.add('myNewsFeed')


        if (user.data._id === postUser.data._id) {
            div.innerHTML = `
            <div class="topLine">
                <img src=${postUser.data.photo} class="createIcon">
                <p class="descriptors">
                    ${postUser.data.firstName} ${postUser.data.lastName}</br>
                    Authors github link</br>
                    ${feed.data[i].date}
                </p>
                <hbutton class="noborder farRight vertElipse">&#8942;</button>
            </div>
            <div class="line"></div>
            <div class="content">
                <p>${feed.data[i].text}</p>
            </div>
            <div class="line postStats">
            <p class='xtrsmall likes'></p>
            <p class='xtrasmall comments'></p>
            <p class='xtrasmall shares'></p>
            </div>
            <div class="postFooter">
                <button class="noborder likeBtn"><i class="fa-regular fa-thumbs-up"></i> Like</button>
                <button class="noborder commentBtn"><i class="fa-solid fa-comments"></i> Comment</button>
                <button class="noborder shareBtn"><i class="fa-solid fa-share-from-square"></i> Share</button>
            </div>
            <div class="div${i}"></div>
            <div class="comments${i}"></div>`
            newsFeed.appendChild(div)
        } else {
            div.innerHTML = `
            <div class="topLine">
                <img src=${postUser.data.photo} class="createIcon">
                <p class="descriptors">
                    ${postUser.data.firstName} ${postUser.data.lastName}</br>
                    Authors github link</br>
                    ${feed.data[i].date}
                </p>
            </div>
            <div class="line"></div>
            <div class="content">
                <p>${feed.data[i].text}</p>
            </div>
            <div class="postStats">
                <p class='xtrsmall likes'></p>
                <p class='xtrasmall comments'></p>
                <p class='xtrasmall shares'></p>
            </div>
            <div class="line"></div>
            <div class="postFooter">
                <button class="noborder likeBtn"><i class="fa-regular fa-thumbs-up"></i> Like</button>
                <button class="noborder commentBtn"><i class="fa-solid fa-comments"></i> Comment</button>
                <button class="noborder shareBtn"><i class="fa-solid fa-share-from-square"></i> Share</button>
            </div>
            <div class="div${i}"></div>
            <div class="comments${i}></div>`
            newsFeed.appendChild(div)
        }
        currentPost.push(`${feed.data[i]._id}`)
        currentPostUser.push(postUser.data._id)
        const profile = document.querySelectorAll('.createIcon')
        for (let j = 0; j < profile.length; j++) {
            profile[j].onclick = async () => {
                for (let k = 0; k < currentPostUser.length; k++) {
                    window.localStorage.setItem('viewedUser', JSON.stringify(currentPostUser[j-1]))
                    window.localStorage.setItem('currentUser', JSON.stringify(user.data._id))
                    location.href="./profile.html"
                    await axios.put(`https://gittech-production.up.railway.app/api/profileView?userId=${user.data._id}&viewed=${currentPostUser[j-1]}&date=${currentDate}`)
                }
            }
        }

        const like = document.querySelectorAll('.likeBtn')
        for (let j = 0; j < like.length; j++){
            like[j].onclick = () => {
                addLike = async () => {
                    const thisLike = await axios.put(`https://gittech-production.up.railway.app/api/postLike?postId=${currentPost[j]}&userId=${user.data._id}&date=${currentDate}`) 
                }
                addLike()
                buildNewsFeed()
            }
        }

        const comment = document.querySelectorAll('.commentBtn')
        currentComment.push(`div${i}`)
        postComment = []
        postComment.push(`comments${i}`)

        for (let j = 0; j < comment.length; j++){
            comment[j].onclick = async () => {
                const newDiv = document.createElement('div')
                newDiv.classList.add(`div${j}`)
                const newInput = document.createElement('input')
                newInput.classList.add(`input${j}`)
                newDiv.appendChild(newInput)
                const comment = document.querySelector(`.${currentComment[j]}`)
                comment.innerHTML = ""
                comment.appendChild(newDiv)
                const input = document.querySelector(`.input${j}`)

                let postComments = await axios.get(`https://gittech-production.up.railway.app/api/comment/${currentPost[j]}`)
                for (let k = 0; k < postComments.data.length; k++) {
                    let commenterUser = await axios.get(`https://gittech-production.up.railway.app/api/user/${postComments.data[k].userId}`)
                    console.log(commenterUser)
                    console.log(postComments)
                    const thisComment = postComments.data[k].comment
                    const commentDiv = document.createElement('div')
                    commentDiv.innerHTML = `
                    <div class="comment">          
                    <div class="topLine">
                    <img src=${commenterUser.data.photo} class="createIcon">
                    <p class="descriptors">
                        ${commenterUser.data.firstName} ${commenterUser.data.lastName}</br>
                        ${postComments.data[k].date}
                    </p>
                    <hbutton class="noborder farRight vertElipse">&#8942;</button>
                </div>
                <div class="line"></div>
                <div class="content">
                    <p>${thisComment}</p>
                </div>`
                    comment.appendChild(commentDiv)
                }

                console.log(user.data._id)
                input.onkeydown = async () => {
                    if (event.keyCode === 13) {
                        comment.innerHTML = ""
                        const newComment = await axios.post(`https://gittech-production.up.railway.app/api/comment?userId=${user.data._id}&date=${currentDate}&postId=${currentPost[j]}&comment=${input.value}`)
                    }
                }
            }
        }

        const share = document.querySelectorAll('.shareBtn')
        for (let j = 0; j < share.length; j++){
            share[j].onclick = () => {
                console.log(`share button clicked ${j}`)
                const share = document.querySelector(`.${currentComment[j]}`)
                share.innerHTML = ""
                const btn1 = document.createElement('button')
                btn1.classList.add('toFeed')
                btn1.textContent = "Share to NewsFeed"
                const btn2 = document.createElement('button')
                btn2.classList.add('toMessage')
                btn2.textContent = "Share with Messanger"
                share.appendChild(btn1)
                share.appendChild(btn2)
                console.log(feed.data[j].text)

                btn1.onclick = async () => {
                    console.log(`Share to newsfeed on ${j}`)
                    buildNewsFeed()
                    const sharePost = await axios.post(`https://gittech-production.up.railway.app/api/post/?userId=${user.data._id}&date=${currentDate}&text=${feed.data[j].text}`)
                    
                }
                btn2.onclick = () => {
                    console.log(`Share to messanger`)
                }

            }
        }

        }

        const vertElipse = document.querySelectorAll('.vertElipse')
        for (let j = 0; j < vertElipse.length; j++) {
            vertElipse[j].onclick = () => {
                console.log(`vertElipse pressed ${j}`)
                //edit and delete will go here
            }
        }

}

buildLogInModal = async () => {
    const loginModal = document.getElementById('LoginModal')
    loginModal.innerHTML = `
    <div class="modal-content">
        <h2>GitTech</h2>
        <p>Connect with people in the tech industry</p>
        <h3>Sign In:</h3>
        <button>GitHub Auto</button>
        <div class="line"></div>
        <h3>Create Account:</h3>
        <button>GitHub Auth</button>
    </div>`

}

buildMessagesModal = async () => {
    // const message = await axios.get(`https://gittech-production.up.railway.app/api/message/${user.data._id}`)

    // we are here
    // for (let j = 0; j < message.data.length; j++)
    // {

    // }


    const messageModal = document.getElementById('genModal')
    messageModal.innerHTML = `
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close">&times;</button>
            <h4>Messages</h4>
        </div>
        <div class="modal-body">
            <div class="message">
                <div>
                    <p class="title">Sender Name:  Title:</p>
            </div>
            <div>
                <p>limit to first line of message</p>
            </div>
            </div>
        </div>
        <div class="modal-body">
            <div class="message">
                <div>
                    <p class="title">Sender Name:  Title:</p>
            </div>
            <div>
                <p>limit to first line of message</p>
            </div>
            </div>
        </div>
        </div>`

    const messageClick = document.querySelectorAll('.message')
    for (let i = 0; i < messageClick.length; i++) {
        messageClick[i].onclick = () => {
            buildMessage()
            const modal = document.getElementById('messageBodys')
            const orgModal = document.getElementById('genModal')
            modal.style.display  = 'block'
            orgModal.style.display = 'none'
        }
    }



    const closeSpan = document.querySelector('.close')
    closeSpan.onclick = () => {
        const modal = document.getElementById('genModal')
        modal.style.display = 'none'
    }
    window.onclick = function(e) {
        if (e.target == messageModal) {
            messageModal.style.display = 'none'
        }
    }
}

buildMessage = async () => {
    console.log(`messagebody hit`)
    const message = document.getElementById('messageBodys')
    console.log(message)
    message.innerHTML = `
    <div class="modal-content">
    <button type="button" class="closeMessage">&times;</button>
    <div class="modal-body">
        <p>Some cool stuff here</p>
        <div class="line"></div>   
        <input placeholder = "reply">        
    </div>
    </div>`

    const closeMessage = document.querySelector('.closeMessage')
    closeMessage.onclick = () => {
        const modal = document.getElementById('messageBodys')
        const orgModal = document.getElementById('genModal')
        modal.style.display  = 'none'
        orgModal.style.display = 'block'
    }

    window.onclick = function(e) {
        if (e.target == message) {
            message.style.display = 'none'
        }
    }
}

buildCreateNewPostModal = async () => {
    const modalContent = document.getElementById('CreatePost')
    modalContent.innerHTML = `
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="closePost">&times;</button>
        </div>
        <div class="modal-body">
                <input class="input">
                <div class="inputs">
                    <button class="noborder"><i class="fa-solid fa-camera"></i> Photo</button>
                    <button class="noborder"><i class="fa-solid fa-film"></i> Video</button>
                    <button class="noborder"><i class="fa-solid fa-newspaper"></i> Article</button>
                </div>
        </div>
        </div>`

        const input = document.querySelector('.input')
        input.onkeydown = async () => {
            if (event.keyCode === 13) {
                const date = new Date()
                const newPost = input.value
                modalContent.style.display = 'none'
                const createNewPost = await axios.post(`https://gittech-production.up.railway.app/api/post/?userId=${user.data._id}&date=${date}&text=${newPost}`)
            }
            buildNewsFeed()
        }

    const closePost = document.querySelector('.closePost')
    closePost.onclick = () => {
        const modal = document.getElementById('CreatePost')
        modal.style.display = 'none'
    }
    window.onclick = function(e) {
        if (e.target == modalContent) {
            modalContent.style.display = 'none'
        }
    }
}

buildProfileViewsModal = async () => {
    const profileViews = document.getElementById('profileViewModal')
    const myviews = await axios.get(`https://gittech-production.up.railway.app/api/profileview/${user.data._id}`)

    profileViews.innerHTML = `
    <div class="modal-content">
    <div class="modal-header">
        <h3>Profile Views:</h3>
        <button type="button" class="closeProfile">&times;</button>
    </div>
    <div class="modal-body">
    <div class="card">
    <div><h3> Recent Views:</h3></div>
    <div class="line"></div>
    <div class="personCard viewers">
    </div>
    </div>
    </div>
    </div>`
    const viewers = document.querySelector('.viewers')
    for (let i = 0; i < myviews.data.length; i++) {
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="personHeader">
        <img class="background" src="assets/bigstock-Technology-Background-Modern-388206850-web-768x461.jpg">
        <img class="icon" src="${myviews.data[i].photo}">
        </div>
        <div class="personBody">
        <p>${myviews.data[i].firstName} ${myviews.data[i].lastName} </br>
        GitHub </br>
        </div>
        </div>
        `
        viewers.appendChild(div)
    }




    const closeProfile = document.querySelector('.closeProfile')
    closeProfile.onclick = () => {
        profileViews.style.display = 'none'
    }

    window.onclick = function(e) {
        if (e.target == profileViews) {
            profileViews.style.display = 'none'
        }
    }
}

headerNotifications = async () => {

}

newsFeedNotifications = async () => {

}



/* eventListenters */
newPost.onclick = () => {
    buildCreateNewPostModal()
    const modal = document.getElementById('CreatePost')
    modal.style.display = 'block'
    
}

messages.onclick = () => {
    buildMessagesModal()
    console.log('messages clicked')
    const modal = document.getElementById('genModal')
    modal.style.display = 'block'
}

const testlogin = document.querySelector('.testloging')
testlogin.onclick = async () => {
    //await axios.get('https://gittech-production.up.railway.app/api/auth/github')
    await axios.get('http://localhost:3002/api/auth/github')
}

buildPage()