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
const closeSpan = document.querySelector('.close')
const messageBody = document.querySelector('.messageBody')


/* Functions */
buildPage = async () => {

}

buildLeftSideBar = async () => {

}

buildNewsFeed = async () => {

}

buildLogInModal = async () => {

}

buildMessagesModal = async () => {

}

buildCreateNewPostModal = async () => {

}

headerNotifications = async () => {

}

newsFeedNotifications = async () => {

}

/* eventListenters */
newPost.onclick = () => {
    const modal = document.getElementById('genModal')
    modal.style.display = 'block'
    console.log('new post btn clicked')
}

closeSpan.onclick = () => {
    const modal = document.getElementById('genModal')
    modal.style.display = 'none'
}

const messageClick = document.querySelector('.message')
messageClick.onclick = () => {
    console.log('clicked')
    const modal = document.getElementById('messageBodys')
    const orgModal = document.getElementById('genModal')
    modal.style.display  = 'block'
    orgModal.style.display = 'none'
}

/* test clicks */

const closeMessage = document.querySelector('.closeMessage')
closeMessage.onclick = () => {
    console.log('close this modal')
    const modal = document.getElementById('messageBodys')
    modal.style.display = 'none'
    const orgModal = document.getElementById('genModal')
    orgModal.style.display = 'block'
}


const closePost = document.querySelector('.closePost')
closePost.onclick = () => {
    const modal = document.getElementById('CreatePost')
    modal.style.display = 'none'
}

messages.onclick = () => {
    console.log('messages clicked')
}

