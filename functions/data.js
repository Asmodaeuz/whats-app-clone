class Contact {
    constructor(id, name, number, profilePicture) {
        this.id = id,
            this.name = name,
            this.number = number,
            this.profilePicture = profilePicture
    }
}

class Message {
    constructor(id, content, date, sender) {
        this.id = id,
            this.content = content,
            this.date = date,
            this.sender = sender
    }
}

// GENERATE A RANDOM DATE FOR THE MESSAGES
function getRandomDate() {
    const maxDate = Date.now();
    const timestamp = Math.floor(Math.random() * maxDate);
    return new Date(timestamp);
}

// TRANSFORMS THE INPUT DATE TO A SPECIFIC FORMAT
function displayDateTime(dateInput) {
    let dateToDisplay = new Date(dateInput)
    const dateOptions = { day: "numeric", month: "numeric", year: "numeric" }
    const dateString = dateToDisplay.toLocaleDateString("en-US", dateOptions)

    const timeOptions = { hour: 'numeric', minute: 'numeric', hour12: true, second: undefined }
    const timeString = dateToDisplay.toLocaleTimeString("en-US", timeOptions)

    dateToDisplay = `${timeString}, ${dateString}`

    return dateToDisplay
}


// const { CurrentUser = AlessandroCorrea } = {
//     user: changeUser(currentChat)
//     number:
// }

// INITIALIZING A "ME" OBJECT SO THE APP CAN IDENTITY WHAT MESSAGE IT HAS
// TO SHOW ON EACH SIDE
// const Me = new Contact(CurrentUser.user, "Me", CurrentUser.number)

// HARD COGIND SOME CONTACTS TO BUILD CHATS
const AlessandroCorrea = new Contact(1310356604, "Alessandro Correa", 552174801439, "https://avatars.githubusercontent.com/u/68287924?v=4")
const LauraHartley = new Contact(3835846865, "Laura Hartley", 447457170356, "https://fastly.picsum.photos/id/399/2048/1365.jpg?hmac=Tm7jwbWj0i70u952g5yC0da-gxScdY2mQ6gjKrP8Haw")
const SunwooHan = new Contact(687239299, "Sunwoo Han", 82105909930, "https://fastly.picsum.photos/id/65/4912/3264.jpg?hmac=uq0IxYtPIqRKinGruj45KcPPzxDjQvErcxyS1tn7bG0")
const VincentFabron = new Contact(940533030, "Vincent Fabron", 33700711533, "https://fastly.picsum.photos/id/91/3504/2336.jpg?hmac=tK6z7RReLgUlCuf4flDKeg57o6CUAbgklgLsGL0UowU")
const RyoKiritani = new Contact(751826829, "Ryo Kiritani", 817089684916, "https://fastly.picsum.photos/id/203/4032/3024.jpg?hmac=yeLnHOEAWUYBtMnanR0-0Q7gSvYbyxPG3PLJYvm170Q")
const KlaraBohringer = new Contact(627855383, "Klara Bohringer", 4916344160699, "https://fastly.picsum.photos/id/633/1818/1228.jpg?hmac=dyjPGybYgWgnTXC3lPjV-rap_PQUlnC0O6vCkhP_-HE")
const LingYingWei = new Contact(1917995029, "Ling Ying Wei", 8617405835061, "https://fastly.picsum.photos/id/646/2509/1673.jpg?hmac=HXykqhktw0TF08mbS0F3J4bxJJvJRQXG74xA4zPYW7Y")

const Users = [
    AlessandroCorrea, LauraHartley, SunwooHan, VincentFabron, RyoKiritani, KlaraBohringer, LingYingWei
]

//Select com users como opção cada opção como option o nome tendo value de Id
//onChange select tendo o changeUser de callback

let currentUser = AlessandroCorrea

// DEFINES EACH OF THE CONVERSATIONS WITH EACH CONTACTS AS A CHAT
const Chats = [
    {
        id: 2310767007,
        messages: [
            new Message(getUniqueId(), "Onde fica a New Age GG?", displayDateTime(getRandomDate()), LauraHartley.id),
            new Message(getUniqueId(), "Lá na Rua do Canal 178 (Recreio Bandeirantes)", displayDateTime(getRandomDate()), AlessandroCorrea.id),
            new Message(getUniqueId(), "Será que posso dar uma passada lá?", displayDateTime(getRandomDate()), LauraHartley.id),
            new Message(getUniqueId(), "Não sei mas seria legal conhecer!", displayDateTime(getRandomDate()), AlessandroCorrea.id)
        ],
        participants: [AlessandroCorrea, LauraHartley],
        lastMessage: ""
    },
    {
        id: 3820756568,
        messages: [
            new Message(getUniqueId(), "Já ouviu falar na New Age?", displayDateTime(getRandomDate()), SunwooHan.id),
            new Message(getUniqueId(), "Claro que sim!", displayDateTime(getRandomDate()), AlessandroCorrea.id),
        ],
        participants: [AlessandroCorrea, SunwooHan],
        lastMessage: ""
    },
    {
        id: 4003635723,
        messages: [
            new Message(getUniqueId(), "A New Age tá pra abrir um campeonato novo de Fortnite. Topa?", displayDateTime(getRandomDate()), VincentFabron.id)
        ],
        participants: [AlessandroCorrea, VincentFabron],
        lastMessage: ""
    },
    {
        id: 1042391752,
        messages: [
            new Message(getUniqueId(), "E aí! Vincent já falou contigo?", displayDateTime(getRandomDate()), AlessandroCorrea.id)
        ],
        participants: [AlessandroCorrea, RyoKiritani],
        lastMessage: ""
    },
    {
        id: 743582593,
        messages: [
            new Message(getUniqueId(), "Noite das meninas ainda de pé?", displayDateTime(getRandomDate()), KlaraBohringer.id),
            new Message(getUniqueId(), "Acho que sim. Vou chamar a Ling também!", displayDateTime(getRandomDate()), SunwooHan.id)
        ],
        participants: [SunwooHan, KlaraBohringer],
        lastMessage: ""
    },
    {
        id: 4115625287,
        messages: [
            new Message(getUniqueId(), "Noite das meninas este fim de semana? A Killjoy já topou :p", displayDateTime(getRandomDate()), SunwooHan.id),
            new Message(getUniqueId(), "Eu acho que tenho espaço na agenda. Mas sem exageros!", displayDateTime(getRandomDate()), LingYingWei.id)
        ],
        participants: [SunwooHan, LingYingWei],
        lastMessage: ""
    }
]