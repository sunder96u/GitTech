
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

let user = '';
const currentUser = ""
const profileView = ""

/* Functions */
buildPage = async () => {
    // if (user.length === undefined) {
    //     buildLogInModal()
    //     const modal = document.getElementById('LoginModal')
    //     modal.style.display = "block"
    // }
    buildProfile()
    buildVisionStatement()
    buildUsers()
    buildCompanyPosts()
}

// buildLeftSideBar = async () => {
//     const harduser = `64876aee1a364ca921525b03`

//     const leftSideBar = document.querySelector('.leftSideBar')
//     const myUser = await axios.get(`http://localhost:3001/api/user/${harduser}`)
//     user = myUser
//     const connections = await axios.get(`http://localhost:3001/api/connection/${myUser.data._id}`)
//     const views = await axios.get(`http://localhost:3001/api/profileView/${myUser.data._id}`)
//     const company = await axios.get(`http://localhost:3001/api/company/${myUser.data._id}`)
//     const myCompany = company.data.name
//     const groups = await axios.get(`http://localhost:3001/api/group/${myUser.data._id}`)

//     leftSideBar.innerHTML = `
//     <div class="profileInfo backgroundImg">
//         <img class="profilePic" src="${myUser.data.photo}">
//     </div>
//     <div class="moreInfo">
//     <p>${myUser.data.firstName} ${myUser.data.lastName}</p>
//         <a href="../client/network.html"><h3>Connections: ${connections.data.length}</h3></a>
//         <a href='#' class='profileView'><h3>Views: ${views.data.length}</h3></a>
//         <a href="../client/company.html"><h3>Company: <br> ${myCompany}</h3></a>
//         <a href="../client/group.html"><h3>Groups:</h3> <p>${groups}</p></a>
//     </div>`

//     const profileViewers = document.querySelector('.profileView')
//     profileViewers.onclick = () => {
//     buildProfileViewsModal()
//     console.log('profile views clicked')
//     const modal = document.getElementById('profileViewModal')
//     modal.style.display = 'block'
// }
// }
buildProfile = async () => {
    const profile = document.querySelector('.profile')

    profile.innerHTML = `
    <div class="backgroundImg">
        <img src="assets/profile picture.jpeg">
    </div>
    <div>
        <p>Name</p>
        <p><a href=#>website url</a></p>
    </div>
    `

}

buildVisionStatement = async () => {
    const visionStatement = document.querySelector('.visionStatement')

    visionStatement.innerHTML = `
    <div>
    <h3>Vision statement here</h3>
    </div>
    `
}

buildUsers = async () => {
    const users = document.querySelector('.users')

    users.innerHTML = `
    <div class="card">
    <div><h3> My connections:</h3></div>
    <div class="line"></div>
    <div class="personCard">
        <div class="personHeader">
        <img class="background" src="assets/bigstock-Technology-Background-Modern-388206850-web-768x461.jpg">
        <img class="icon" src="assets/profile picture.jpeg">
        </div>
        <div class="personBody">
        <p>Person's Name </br>
        GitHub </br>
        Company</p>
        </div>
        <div class="buttons">
        <button>Accept</button>
        <button>Delete</button>
        </div>
    </div>
    </div>
    `
}

buildCompanyPosts = async () => {
    const posts = document.querySelector('.posts')

    posts.innerHTML = `
    <div>
    <div class="topLine">
    <img src="" class="createIcon">
    <p class="descriptors">
        firstName lastName</br>
        Authors github link</br>
        date
    </p>
    <hbutton class="noborder farRight vertElipse">&#8942;</button>
    </div>
    <div class="line"></div>
    <div class="content">
        <p>text</p>
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
    <div class="div"></div>
    <div class="comments"></div>
    </div>
    `
}


buildMessagesModal = async () => {
    // const message = await axios.get(`http://localhost:3001/api/message/${user.data._id}`)

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


headerNotifications = async () => {

}

newsFeedNotifications = async () => {

}



/* eventListenters */

messages.onclick = () => {
    buildMessagesModal()
    console.log('messages clicked')
    const modal = document.getElementById('genModal')
    modal.style.display = 'block'
}


buildPage()