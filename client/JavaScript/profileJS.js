
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

let currentUser = JSON.parse(window.localStorage.getItem('currentUser'))
let viewedUser = JSON.parse(window.localStorage.getItem('viewedUser'))
console.log(`${currentUser} currentUser`)
console.log(`${viewedUser} viewedUser`)


/* Functions */
buildPage = async () => {
    buildProfile()
    buildExperience()
    buildProjects()
    buildSkills()
}

buildProfile = async () => {
    const profile = document.querySelector('.profile')
    const user = await axios.get(`http://localhost:3001/api/user/${viewedUser}`)

    if (viewedUser === currentUser){
        profile.innerHTML = `
        <div class=backgroundImg>
            <img src="${user.data.photo}">
            <button class="noborder photoEdit"><i class="fa-solid fa-wrench"></i></button>
        </div>
        <div class="about">
            <p>${user.data.firstName} ${user.data.lastName} <button class="noborder nameEdit"><i class="fa-solid fa-wrench"></i></button> </br>
            ${user.data.website} <button class="noborder websiteEdit"><i class="fa-solid fa-wrench"></i></button></br>
            github site <button class="noborder githubEdit"><i class="fa-solid fa-wrench"></i></button></p>
        `
        const brandStatement = document.querySelector('.brandStatement')
        brandStatement.innerHTML = `
        <div class="expheader">
            <h3>About me:</h3>
        </div>
        <div class="line"></div>
        <div>
            <p>${user.data.description}
            <button class="noborder descriptionEdit"><i class="fa-solid fa-wrench"></i></button>
        </div>
        `
    } else {
        profile.innerHTML = `
        <div class=backgroundImg>
            <img src="${user.data.photo}">
        </div>
        <div class="about">
            <p>${user.data.firstName} ${user.data.lastName}</br>
            <a href="#">websiteURL</a> </br>
            <a href="#">GitHubURL</a> </br>
        `
        const brandStatement = document.querySelector('.brandStatement')
        brandStatement.innerHTML = `
        <div class="expheader">
            <h3>About me:</h3>
        </div>
        <div class="line"></div>
        <div>
            <p>${user.data.description}
        </div>
        `
    }

    const photoEdit = document.querySelector('.photoEdit')
    photoEdit.onclick = async () => {
        buildModal()
        const modal = document.getElementById('modal')
        modal.style.display='block'
        modal.innerHTML = `
        <div class="modal-content">
        <div class="modal-header">
            <h3>Edit Picture</h3>
            <button type="button" class="close">&times;</button>
        </div>
        <div class="modal-body">
              <h5>New Photo URL:</h5>  
              <input class="input photoInput">
        </div>
        </div>`
        const closeMessage = document.querySelector('.close')
        closeMessage.onclick = () => {
            modal.style.display  = 'none'
        }

        const input = document.querySelector('.photoInput')
        input.onkeydown = async () => {
            if (event.keyCode === 13) {
                modal.style.display = 'none'
                await axios.put(`http://localhost:3001/api/user/edit?userId=${currentUser}&whatToUpdate=photo&update=${input.value}`)
                buildPage()
            }
        }
    }

    const nameEdit = document.querySelector('.nameEdit')
    nameEdit.onclick = async () => {
        console.log(`nameEdit hit`)
        buildModal()
        const modal = document.getElementById('modal')
        modal.style.display='block'
        modal.innerHTML = `
        <div class="modal-content">
        <div class="modal-header">
            <h3>Edit name</h3>
            <button type="button" class="close">&times;</button>
        </div>
        <div class="modal-body">
            <h5>First name:</h5>
            <input class="input firstName">
            <h5>Last name:</h5>
            <input class="input lastName">
        </div>
        </div>`
        const closeMessage = document.querySelector('.close')
        closeMessage.onclick = () => {
            modal.style.display  = 'none'
        }

        const inputFirst = document.querySelector('.firstName')
        inputFirst.onkeydown = async () => {
            if (event.keyCode === 13) {
                modal.style.display = 'none'
                await axios.put(`http://localhost:3001/api/user/edit?userId=${currentUser}&whatToUpdate=firstName&update=${input.value}`)
                buildPage()
            }
        }

        const inputLast = document.querySelector('.lastName')
        inputLast.onkeydown = async () => {
            if (event.keyCode === 13) {
                modal.style.display = 'none'
                await axios.put(`http://localhost:3001/api/user/edit?userId=${currentUser}&whatToUpdate=lastName&update=${input.value}`)
                buildPage()
            }
        }
    }

    const websiteEdit = document.querySelector('.websiteEdit')
    websiteEdit.onclick = async () => {
        console.log(`websiteedit hit`)
        buildModal()
        const modal = document.getElementById('modal')
        modal.style.display='block'
        modal.innerHTML = `
        <div class="modal-content">
        <div class="modal-header">
            <h3>Edit website URL</h3>
            <button type="button" class="close">&times;</button>
        </div>
        <div class="modal-body">
            <h5> Website URL: </h5>
                <input class="input">
        </div>
        </div>`
        const closeMessage = document.querySelector('.close')
        closeMessage.onclick = () => {
            modal.style.display  = 'none'
        }

        const input = document.querySelector('.input')
        input.onkeydown = async () => {
            if (event.keyCode === 13) {
                modal.style.display = 'none'
                await axios.put(`http://localhost:3001/api/user/edit?userId=${currentUser}&whatToUpdate=website&update=${input.value}`)
                buildPage()
            }
        }
    }

    const githubEdit = document.querySelector('.githubEdit')
    githubEdit.onclick = async () => {
        console.log(`githubedit hit`)
        buildModal()
        const modal = document.getElementById('modal')
        modal.style.display='block'
        modal.innerHTML = `
        <div class="modal-content">
        <div class="modal-header">
            <h3>Edit Github URL</h3>
            <button type="button" class="close">&times;</button>
        </div>
        <div class="modal-body">
            <h5>Github URL:</h5>
                <input class="input">
        </div>
        </div>`
        const closeMessage = document.querySelector('.close')
        closeMessage.onclick = () => {
            modal.style.display  = 'none'
        }

        const input = document.querySelector('.input')
        input.onkeydown = async () => {
            if (event.keyCode === 13) {
                buildPage()
                modal.style.display = 'none'
                //await axios.put(`http://localhost:3001/api/user/edit?userId=${currentUser}&whatToUpdate=firstName&update=${input.value}`)
            }
        }
    }

    const aboutMeEdit = document.querySelector('.descriptionEdit')
    aboutMeEdit.onclick = async () => {
        buildModal()
        const modal = document.getElementById('modal')
        modal.style.display='block'
        modal.innerHTML = `
        <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close">&times;</button>
        </div>
        <div class="modal-body">
            <h3>About Me:</h3>
                <input class="input">
        </div>
        </div>`
        const closeMessage = document.querySelector('.close')
        closeMessage.onclick = () => {
            modal.style.display  = 'none'
        }

        const input = document.querySelector('.input')
        input.onkeydown = async () => {
            if (event.keyCode === 13) {
                modal.style.display = 'none'
                await axios.put(`http://localhost:3001/api/user/edit?userId=${currentUser}&whatToUpdate=description&update=${input.value}`)
                buildPage()
            }
        }

    }

}

buildExperience = async () => {
    const experience = document.querySelector('.experience')
    const exp = await axios.get(`http://localhost:3001/api/experience/${viewedUser}`)

    if (viewedUser === currentUser) {
        experience.innerHTML = `
        <div class="expheader">
            <h3>Experience:</h3>
            <button class="noborder expAdd"><i class="fa-solid fa-plus"></i></button>
        </div>
        <div class="line"></div>
        <div>
        <div class="myexp"
        </div>
        `
        const myExp = document.querySelector('.myexp')
        for (let i = 0; i < exp.data.length; i++) {
            const div = document.createElement('div')
            div.innerHTML = `
            <div>
                <p>${exp.data[i].name}</p>
                <button class="noborder expNameEdit"><i class="fa-solid fa-wrench"></i></button>
            </div>
            `
            myExp.appendChild(div)
        }      
    } else {
        experience.innerHTML = `
        <div class="expheader">
            <h3>Experience:</h3>
        </div>
        <div class="line"></div>
        <div>
        <div class="myexp"
        </div>
        `
        const myExp = document.querySelector('.myexp')
        for (let i = 0; i < exp.data.length; i++) {
            const div = document.createElement('div')
            div.innerHTML = `
            <div>
                <p>${exp.data[i].name}</p>
            </div>
            `
            myExp.appendChild(div)
        }
    }
    const expAdd = document.querySelector('.expAdd')
    expAdd.onclick = async () => {
        
    }

}

buildProjects = async () => {
    const project = document.querySelector('.myproject')
    const exp = await axios.get(`http://localhost:3001/api/project/${viewedUser}`)
    console.log(exp)

    if (viewedUser === currentUser) {
        project.innerHTML = `
        <div class="expheader">
            <h3>Projects:</h3>
            <button class="noborder projectAdd"><i class="fa-solid fa-plus"></i></button>
        </div>
        <div class="line"></div>
        <div class="projectLine">
        </div>
        `
        const projectLine = document.querySelector('.projectLine')
        for (let i = 0; i < exp.data.length; i++) {
            console.log(exp.data.length)
            if (exp.data.length === 0) {
                const div = document.createElement('div')
                div.innerHTML = `
                <p> I am currently not working on any projects </p>
                `     
            } else {
                div = document.createElement('div')
                div.innerHTML = `
                <div class="myproject">
                    <p>${exp.date[i].name}</p>
                    <button class="noborder projectNameEdit"><i class="fa-solid fa-wrench"></i></button>
                </div>
                ` 
            }
            projectLine.appendChild(div)
        } 

    } else {
        project.innerHTML = `
        <div class="expheader">
            <h3>Projects:</h3>
        </div>
        <div class="line"></div>
        <div class="projectLine">
        </div>
        `
        const projectLine = document.querySelector('.projectLine')
        for (let i = 0; i < exp.data.length; i++) {
            if (exp.data.length != 0) {
                const div = document.createElement('div')
                div.innerHTML = `
                <div class="myproject">
                    <p>${exp.date[i].name}</p>
                </div>
                `       
            } else {
                div = document.createElement('div')
                div.innerHTML = `
                <p> I am currently not working on any projects </p>
                `
            }
            projectLine.appendChild(div)
        }
    }

    const projectAdd = document.querySelector('.projectAdd')
    projectAdd.onclick = async () => {
        console.log(`projectadd hit`)
    }
}

buildSkills = async () => {
    const skill = document.querySelector('.skill')
    const skills = await axios.get(`http://localhost:3001/api/skill/${viewedUser}`)

    if (viewedUser === currentUser) {
        skill.innerHTML = `
        <div class="expheader">
            <h3>Skills:</h3>
            <button class="noborder skillsAdd"><i class="fa-solid fa-plus"></i></button>
        </div>
        <div class="line"></div>
        <div class='mySkills'>
        </div>
        `
        const mySkills = document.querySelector('.mySkills')
        for (let i = 0; i < skills.data.length; i++) {
            const div = document.createElement('div')
            div.innerHTML = `
            <div>
                <p>${skills.data[i].skillname}</p>
                <button class="noborder skillsEdit"><i class="fa-solid fa-wrench"></i></button>
            </div>
            `
            mySkills.appendChild(div)
        }

    } else {
        skill.innerHTML = `
        <div class="expheader">
            <h3>Skills:</h3>
        </div>
        <div class="line"></div>
        <div class='mySkills'>
        </div>
        `
        const mySkills = document.querySelector('.mySkills')
        for (let i = 0; i < skills.data.length; i++) {
            const div = document.createElement('div')
            div.innerHTML = `
            <div>
                <p>${skills.data[i].skillname}</p>
            </div>
            `
            mySkills.appendChild(div)
        }
    }
    const skillAdd = document.querySelector('.skillsAdd')
    skillAdd.onclick = async () => {
        console.log(`skilladd hit`)
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

buildModal = async () => {
    console.log(`modal build built`)
    const modal = document.getElementById('modal')
    // window.onclick = function(e) {
    //     if (e.target == message) {
    //         modal.style.display = 'none'
    //     }
    // }
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






