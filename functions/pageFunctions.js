let contactCards

function initPage() {
    let chatsPanel = document.getElementById("generalChatsArea")
    let profileCard, profileDiv, profilePicture,
        contactInfo, contactName, lastMessage,
        inDisplay

    // LOADING THE USER'S PROFILE PICTURE
    const userPfp = document.getElementById("userPfp")
    userPfp.src = currentUser.profilePicture

    // RETURNING ONLY THE CHATS THAT THE CURRENT USER HAS
    const chats = Chats.filter(chat => {
        if (chat.participants.some(participant => participant.id == currentUser.id)) {
            return true
        }
        return false
    })

    chatsPanel.innerHTML = ""

    chats.map(chat => {
        const contact = chat.participants.filter(participant => participant.id != currentUser.id)[0]
        profileCard = document.createElement("div")
        profileCard.classList.add("contact--card")
        profileCard.setAttribute("id", chat.id)
        chatsPanel.append(profileCard)

        profileDiv = document.createElement("div")
        profileDiv.classList.add("contact--card__picture")
        profileCard.append(profileDiv)

        profilePicture = document.createElement("img")
        profilePicture.classList.add("profilePicture")
        profilePicture.src = contact.profilePicture
        profilePicture.alt = `${contact.name}'s profile picture`
        profileDiv.append(profilePicture)

        contactInfo = document.createElement("div")
        contactInfo.classList.add("contact--card__info")
        profileCard.append(contactInfo)

        contactName = document.createElement("h3")
        contactName.classList.add("card--info__name")
        contactName.innerHTML = contact.name
        contactInfo.append(contactName)

        // GETTING ONLY THE LAST MESSAGE TO SHOW AS PREVIEW
        for (let i = 0; i < chat.messages.length; i++) {
            lastMessage = chat.messages[i].content
        }

        let previewMessage = document.createElement("p")
        previewMessage.classList.add("preview__message")
        previewMessage.innerHTML = lastMessage
        contactInfo.append(previewMessage)

        // USING DATASETS TO MAKE IT EASIER TO ACCESS PROPERTIES THAT
        // MATCH WITH THE JS FILE CONTAINING THE OBJECTS WITH INFO. THIS
        // INFO WILL LATER BE DISPLAYED ON THE CHAT DISPLAY TO SHOW 
        // PROFILE PICTURE, NAME AND NUMBER DINAMICALLY WHEN A CHAT IS CLICKED
        profileCard.dataset.name = contact.name
        profileCard.dataset.number = contact.number
        profileCard.dataset.src = contact.profilePicture
        profileCard.dataset.id = chat.id
    })

    inDisplay = document.querySelector(".contact--card.active")

    let userSelect = document.getElementById("userSelect")
    userSelect.innerHTML = ""

    Users.forEach(user => {
        let userOption = document.createElement("option")
        userOption.innerText = user.name
        userOption.value = user.id

        if (user.id == currentUser.id) {
            userOption.selected = true
        }

        userOption.dataset.img = user.profilePicture

        userOption.addEventListener("click", toggleSelect())

        userSelect.append(userOption)
    })

    userSelect.value = currentUser.id

    // REMOVING ALL .ACTIVE CLASSES TO PREVENT BUGS WITH LOCAL STORAGE OR CACHE ON LOADING
    function removeAllActives() {
        let actives = document.querySelectorAll(".active")
        actives.forEach(active => {
            active.classList.remove("active")
        })
    }

    removeAllActives()

    // SELECTING A CONTACT CARD WHEN ONE IS CLICKED
    contactCards = document.querySelectorAll(".contact--card")

    if (handleChat) {
        contactCards.forEach(card => {
            card.addEventListener("click", handleChat)
        })
    }
}

document.onload(initPage())