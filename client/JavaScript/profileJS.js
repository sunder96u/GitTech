
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

let currentUser = window.localStorage.getItem('currentUser')
let viewedUser = window.localStorage.getItem('viewedUser')
console.log(`${currentUser} currentUser`)
console.log(`${viewedUser} viewedUser`)


/* Functions */
buildPage = async () => {
    // if (user.length === undefined) {
    //     buildLogInModal()
    //     const modal = document.getElementById('LoginModal')
    //     modal.style.display = "block"
    // }
    buildProfile()
    buildExperience()
    buildProjects()
    buildSkills()
}

buildProfile = async () => {
    const profile = document.querySelector('.profile')

    if (viewedUser === currentUser){
        profile.innerHTML = `
        <div class=backgroundImg>
            <img src="assets/profile picture.jpeg">
            <button>Change Picture</button>
        </div>
        <div class="about">
            <p>Name <button>wrench</button> </br>
            WebsiteURL <button>wrench</button></br>
            githublink <button>wrench</button></br>
            company <button>wrench</button></p
        `
        const brandStatement = document.querySelector('.brandStatement')
        brandStatement.innerHTML = `
            <h3>Personal Brand Statement Goes here</h3>
            <button>wrench</button>
        `
    } else {
        profile.innerHTML = `
        <div class=backgroundImg>
            <img src="assets/profile picture.jpeg">
        </div>
        <div class="about">
            <p>Name </br>
            <a href="#">websiteURL</a> </br>
            <a href="#">GitHubURL</a> </br>
            <a href="#">Comanpy</a></p>
        `
        const brandStatement = document.querySelector('.brandStatement')
        brandStatement.innerHTML = `
            <h3>Personal Brand Statement Goes here</h3>
        `
    }

}

buildExperience = async () => {
    const experience = document.querySelector('.experience')

    if (viewedUser === currentUser) {
        experience.innerHTML = `
        <div class="expheader">
            <h3>Experience:</h3>
            <button>wrench</button>
        </div>
        <div class="line"></div>
        <div>
        <p> experience list goes here </p>
        </div>
        `
    } else {
        experience.innerHTML = `
        <div class="expheader">
            <h3>Experience:</h3>
        </div>
        <div class="line"></div>
        <div>
        <p> experience list goes here </p>
        </div>
        `
    }


}

buildProjects = async () => {
    const project = document.querySelector('.myproject')

    if (viewedUser === currentUser) {
        project.innerHTML = `
        <div class="expheader">
            <h3>Projects:</h3>
            <button>wrench</button>
        </div>
        <div class="line"></div>
        <div>
        <p> experience list goes here </p>
        </div>
        `
    } else {
        project.innerHTML = `
        <div class="expheader">
            <h3>Projects:</h3>
        </div>
        <div class="line"></div>
        <div>
        <p> experience list goes here </p>
        </div>
        `
    }
}

buildSkills = async () => {
    const skill = document.querySelector('.skill')

    if (viewedUser === currentUser) {
        skill.innerHTML = `
        <div class="expheader">
            <h3>Skills:</h3>
            <button>wrench</button>
        </div>
        <div class="line"></div>
        <div>
        <p> experience list goes here </p>
        </div>
        `
    } else {
        skill.innerHTML = `
        <div class="expheader">
            <h3>Skills:</h3>
        </div>
        <div class="line"></div>
        <div>
        <p> experience list goes here </p>
        </div>
        `
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