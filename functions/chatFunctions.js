// GLOBAL VARIABLES
// Note: In JavaScript,  if you assign a value to an undeclared variable, 
// it will be automatically declared as a global variable.
// However, it is generally not a good practice.
// It's better to always declare your variables explicitly
let selectedChat = null
let currentChat = null
let newMessage = {}
let messagesArray = []
let chatInfo = {}

contactCards.forEach(card => {
    card.addEventListener("click", handleChat)
})

function handleChat() {
    const card = this
    const chatId = card.getAttribute("id")
    const inDisplay = document.getElementById(chatId)

    if (inDisplay !== selectedChat) {
        contactCards.forEach(card => {
            card.classList.remove("inChat")
            card.classList.remove("active")
        })

        this.classList.add("active", "inChat")

        selectedChat = inDisplay

        handleNoChat()
        getChatInfo.bind(null, card)()
        openChat.bind(null, card)();

        return selectedChat
    }
}

// GET THE CLICKED CHAT INFO TO DISPLAY ON THE HEADER
// (PROFILE PICTURE, NAME AND NUMBER)
function getChatInfo(selectedChat) {
    const contactInfo = document.querySelector(".contact--inChat");

    const information = Chats.find((chat) =>
        chat.id == selectedChat.getAttribute("id")
    )

    const contact = information.participants.filter(participant => participant.id != currentUser.id)[0]

    contactInfo.querySelector(".inChat__picture").setAttribute("src", `${contact.profilePicture}`)
    contactInfo.querySelector(".contact--info__name").textContent = contact.name
    contactInfo.querySelector(".contact--info__number").textContent = contact.number

    return selectedChat
}

// CLOSE THE RIGHT SIDE INTRO AREA (DESKTOP MODE ONLY) WHEN A CHAT IS SELECTED
function handleNoChat(element) {
    element = window.event
    const noChatScreen = document.getElementById("noChatScreen")

    setTimeout(() => {
        if (noChatScreen.classList.contains("open")) {
            noChatScreen.classList.remove("open")
            noChatScreen.classList.add("closed")
            isChatOpen = true
        }
    }, 175)
}


function openChat(selectedChat) {
    if (window.innerWidth < 768) {
        toggleChatMobile()
    }

    currentChat = selectedChat.getAttribute("id")

    const savedChatInfo = JSON.parse(localStorage.getItem(`Chat${currentChat}`))
    if (savedChatInfo) {
        messagesArray = savedChatInfo.messages
    } else {
        messagesArray = Chats.
            find(chat => chat.id == currentChat).messages
    }

    //SAVING THE CURRENT CHAT INFORMATION IN A VARIABLE TO PASS TO LOCAL STORAGE
    chatInfo = {
        chatId: currentChat,
        messages: messagesArray
    }
    // SAVING IN LOCAL STORAGE
    localStorage.setItem(`Chat${currentChat}`, JSON.stringify(chatInfo));

    loadMessages(messagesArray)
    return currentChat, messagesArray

}

// LOAD THE MESSAGES ONTO THE CHAT DISPLAY
function loadMessages(messagesArray) {
    let chatContainer, chatContent

    const messagesContainer = document.getElementById("chatDisplay")
    messagesContainer.innerHTML = "" // MANUALLY CLEARING THE DIV BEFORE ADDING THE NEW DATA

    messagesArray.map(msg => {
        chatContainer = document.createElement("div")
        chatContainer.classList.add("chatMessage__container")
        messagesContainer.append(chatContainer)

        chatContent = document.createElement("p")
        chatContent.classList.add("chatMessage__content")
        chatContent.textContent = msg.content
        chatContainer.append(chatContent)

        if (msg.sender !== currentUser.id) {
            chatContainer.classList.add("received")
        } else {
            chatContainer.classList.add("sent")
        }
    })
}


// READ WHAT THE USER IS WRITING TO SEND AS A NEW MESSAGE 
function getNewMessage(event) {
    const chatInput = event.target;

    if (chatInput.value.length !== 0) {
        chatInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                if (chatInput.value.length !== 0) {
                    let inputValue = chatInput.value
                    newMessage = new Message(getUniqueId(), inputValue, displayDateTime(Date.now()), currentUser.id)
                    sendMessage(newMessage)
                    chatInput.value = "" // CLEAR THE TEXTAREA CONTENT
                } else {
                    event.preventDefault() // PREVENT DEFAULT ACTION IF CHATINPUT IS EMPTY
                }
            }
        })
        // THIS REDUNDANCY IT TO PREVENT THE USER FROM SENDING EMPTY 
        // MESSAGES AT THE PAGE'S FIRST LOAD
    } else if (event.key === "Enter") {
        event.preventDefault()
    }

    return newMessage
}

function sendMessage(newMessage) {
    //SAVING THE CURRENT CHAT INFORMATION IN A VARIABLE TO PASS TO LOCAL STORAGE
    chatInfo = {
        chatId: currentChat,
        messages: messagesArray.concat([newMessage]),
        lastMessage: newMessage.content
    }

    let currentChatCard = selectedChat.getAttribute("id")
    let preview = document.getElementById(currentChatCard).querySelector(".preview__message")
    preview.innerHTML = chatInfo.lastMessage
    console.log(preview)

    // Save the chat information in local storage
    let data = chatInfo
    localStorage.setItem(`Chat${currentChat}`, JSON.stringify(data))

    // Update the messagesArray with the new message
    messagesArray.push(newMessage)

    loadMessages(messagesArray)
    return messagesArray
}

function changeUser(event) {
    currentUser = Users.find(user => user.id == event.target.value)
    initPage()
}

function toggleChatMobile() {
    const chatScreen = document.querySelector(".privateChats--screen")
    chatScreen.classList.toggle("closedMobile")
    chatScreen.classList.toggle("openMobile")
}