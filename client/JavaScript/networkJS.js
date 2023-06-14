
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

let user = JSON.parse(window.localStorage.getItem('currentUser'))

/* Functions */
buildPage = async () => {
    // if (user.length === undefined) {
    //     buildLogInModal()
    //     const modal = document.getElementById('LoginModal')
    //     modal.style.display = "block"
    // }
    buildLeftSideBar()
    buildPendingInvites()  
    buildConnections()
    buildInNetwork()
}

buildLeftSideBar = async () => {
    const leftSideBar = document.querySelector('.leftSideBar')
    const myUser = await axios.get(`http://localhost:3001/api/user/${user}`)
    user = myUser
    const connections = await axios.get(`http://localhost:3001/api/connection/${myUser.data._id}`)
    const views = await axios.get(`http://localhost:3001/api/profileView/${myUser.data._id}`)
    const company = await axios.get(`http://localhost:3001/api/company/${myUser.data._id}`)
    const myCompany = company.data.name
    const groups = await axios.get(`http://localhost:3001/api/group/${myUser.data._id}`)

    leftSideBar.innerHTML = `
    <div class="profileInfo backgroundImg">
        <img class="profilePic" src="${myUser.data.photo}">
    </div>
    <div class="moreInfo">
    <p>${myUser.data.firstName} ${myUser.data.lastName}</p>
        <a href="../client/network.html"><h3>Connections: ${connections.data.length}</h3></a>
        <a href='#' class='profileView'><h3>Views: ${views.data.length}</h3></a>
        <a href="../client/company.html"><h3>Company: <br> ${myCompany}</h3></a>
        <a href="../client/group.html"><h3>Groups:</h3> <p>${groups}</p></a>
    </div>`

    const profileViewers = document.querySelector('.profileView')
    profileViewers.onclick = () => {
    buildProfileViewsModal()
    const modal = document.getElementById('profileViewModal')
    modal.style.display = 'block'
}
}

buildPendingInvites = async () => {
    const pending = document.querySelector('.pendingInvites')
    const pendingconnection = await axios.get(`http://localhost:3001/api/connection/pending/${user}`)
    const pendingCon = await axios.get(`http://localhost:3001/api/connection/myinvites/${user.data._id}`)
    pending.innerHTML = ""

    if (pendingconnection.data.length === 0) {
        pending.innerHTML = `
        <div class="card">
        <h3>No pending invites</h1>
        </div>`
    } else {
        pending.innerHTML = `
        <div class="card">
        <div><h3> My pending invites:</h3></div>
        <div class="line"></div>
            <div class="invites">
            </div>
        </div>`
        const invites = document.querySelector('.invites')
        for (let i = 0; i < pendingconnection.data.length; i++)
        {
            const div = document.createElement('div')
            div.classList.add('personCard')
            div.innerHTML = `
            <div class="personCard">
            <div class="personHeader">
            <img class="background" src="assets/bigstock-Technology-Background-Modern-388206850-web-768x461.jpg">
            <img class="icon" src="${pendingCon.data[i].photo}">
            </div>
            <div class="personBody">
            <p>${pendingCon.data[i].firstName} ${pendingCon.data[i].lastName} </br>
            GitHub </br>
            Company</p>
            </div>
            <div class="buttons">
            <button>Accept</button>
            <button>Delete</button>
            </div>
            `
        }
    }
}

buildConnections = async () => {
    const connections = document.querySelector('.connections')
    const connection = await axios.get(`http://localHost:3001/api/connection/${user}`)
    const myConnections = await axios.get(`http://localHost:3001/api/connection/myconnections/${user.data._id}`)
    connections.innerHTML = ''


    if (connection.data.length === 0) {
        connections.innerHTML = `
        <div class="card">
        <h1>Go make some friends! Find people to connect with</h1>
        </div>`
    } else {
        connections.innerHTML = `
        <div class="card">
        <div><h3> My connections:</h3></div>
        <div class="line"></div>
        <div class="myCons">
        </div>
        </div>`
        const myCons = document.querySelector('.myCons')
        for (let i = 0; i < connection.data.length; i++) {
            const div = document.createElement('div')
            div.classList.add('personCard')
            div.innerHTML = `
            <div class="personHeader">
            <img class="background" src="assets/bigstock-Technology-Background-Modern-388206850-web-768x461.jpg">
            <img class="icon" src="${myConnections.data[i].photo}">
            </div>
            <div class="personBody">
            <p>${myConnections.data[i].firstName} ${myConnections.data[i].lastName} </br>
            GitHub </br>
            Company</p>
            </div>
            `
            myCons.appendChild(div)
        }        
    }

}

buildInNetwork = async () => {
    const inNetwork = document.querySelector('.mayKnow')
    const users = await axios.get(`http://localhost:3001/api/connection`)
    const connections = []

    if(users === 0) {
        inNetwork.innerHTML = `
        <div class="card">
        <h1> You know all your connections connections! Amazing job!</h1>
        </div>`
    } else {
        inNetwork.innerHTML = `
        <div class="card">
        <div><h3>People you might know:</h3></div>
        <div class="line"></div>
        <div class="mightKnow">
        </div>
        </div>
        </div>`
        const mightKnow = document.querySelector('.mightKnow')
        for (let i = 0; i < users.data.length; i++) {
            const div = document.createElement('div')
            div.classList.add('personCard')
            div.innerHTML = `
            <div class="personHeader">
            <img class="background" src="assets/bigstock-Technology-Background-Modern-388206850-web-768x461.jpg">
            <img class="icon" src="${users.data[i].photo}">
            </div>
            <div class="personBody">
            <p>${users.data[i].firstName} ${users.data[i].lastName} </br>
            GitHub </br>
            Company</p>
            </div>
            <button class="connect">connect</button>
            `
            mightKnow.appendChild(div)
            connections.push(users.data[i]._id)
            const connect = document.querySelectorAll('.connect')
            for (let k = 0; k < connect.length; k++) {
                connect[k].onclick = async () => {
                    for (let l = 0; l < connections.length; l++) {
                        const connectTo = await axios.post(`http://localhost:3001/api/connection/add?userId=${user.data._id}&connection=${connections[k]}&accepted=true`)
                    }
                }
            }
        }
    }

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

buildProfileViewsModal = async () => {
    const profileViews = document.getElementById('profileViewModal')
    profileViews.innerHTML = `
    <div class="modal-content">
    <div class="modal-header">
        <h3>Profile Views:</h3>
        <button type="button" class="closeProfile">&times;</button>
    </div>
    <div class="modal-body">
        <div>Make card for each view</div>
    </div>
    </div>`
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

messages.onclick = () => {
    buildMessagesModal()
    console.log('messages clicked')
    const modal = document.getElementById('genModal')
    modal.style.display = 'block'
}


buildPage()