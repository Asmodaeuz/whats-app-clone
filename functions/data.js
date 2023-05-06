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

const ChatList = [2310767007, 3820756568, 4003635723, 1042391752, 743582593, 4115625287]

// DEFINES EACH OF THE CONVERSATIONS WITH EACH CONTACTS AS A CHAT
const Chats = [
    {
        id: 2310767007,
        messages: [
            new Message(getUniqueId(), "Hey there, old chap! How's life treating you?", displayDateTime(getRandomDate()), LauraHartley.id),
            new Message(getUniqueId(), "I'm doing pretty good, just had this amazing steak and ale pie for lunch. You gotta try it sometime!", displayDateTime(getRandomDate()), AlessandroCorrea.id),
            new Message(getUniqueId(), "Ahh, that sounds so good! I'm actually feeling knackered, though. Think I might need a cuppa to keep me going.", displayDateTime(getRandomDate()), LauraHartley.id),
            new Message(getUniqueId(), "Definitely. And if you change your mind, I've got some pie left.", displayDateTime(getRandomDate()), AlessandroCorrea.id),
            new Message(getUniqueId(), "Haha, thanks mate. But I think I'll have to pass this time. Got some meetings later and need a quick power nap.", displayDateTime(getRandomDate()), LauraHartley.id),
            new Message(getUniqueId(), "No worries, my dear. Catch you later, yeah?", displayDateTime(getRandomDate()), AlessandroCorrea.id),
            new Message(getUniqueId(), "Lovely!", displayDateTime(getRandomDate()), LauraHartley.id)
        ],
        participants: [AlessandroCorrea, LauraHartley],
        lastMessage: ""
    },
    {
        id: 3820756568,
        messages: [
            new Message(getUniqueId(), "안녕 선우! 어떻게 지내니?", displayDateTime(getRandomDate()), AlessandroCorrea.id),
            new Message(getUniqueId(), "안녕 알레산드로! 나쁘지 않아요. 나는 조금 바빴지만 더 긴장을 풀려고 노력하고 있습니다.", displayDateTime(getRandomDate()), SunwooHan.id),
            new Message(getUniqueId(), "정말로? 이번 주말에 좀 더 자유 시간이 있는 것 같아요. 영화 같은 걸 볼까 생각 중이에요.", displayDateTime(getRandomDate()), AlessandroCorrea.id),
            new Message(getUniqueId(), "좋은 생각이야! 최근에 '이번 생은 처음이라'라는 드라마를 봤는데 정말 재미있었어요. 같이 보시면 좋을 것 같은데 어떠세요?", displayDateTime(getRandomDate()), SunwooHan.id),
        ],
        participants: [AlessandroCorrea, SunwooHan],
        lastMessage: ""
    },
    {
        id: 4003635723,
        messages: [
            new Message(getUniqueId(), "Hey mon pote ! Ça te dit de venir prendre un verre en terrasse avec moi ce soir ? On profite du beau temps ensemble et on se raconte nos dernières aventures. Si t'es partant, on se retrouve à 19h à la brasserie près de la place de la République.", displayDateTime(getRandomDate()), VincentFabron.id)
        ],
        participants: [AlessandroCorrea, VincentFabron],
        lastMessage: ""
    },
    {
        id: 1042391752,
        messages: [
            new Message(getUniqueId(), "よー！ヴィンセントはもうあなたに話した?", displayDateTime(getRandomDate()), AlessandroCorrea.id)
        ],
        participants: [AlessandroCorrea, RyoKiritani],
        lastMessage: ""
    },
    {
        id: 743582593,
        messages: [
            new Message(getUniqueId(), "Steht der mädelsabend immer noch?", displayDateTime(getRandomDate()), KlaraBohringer.id),
            new Message(getUniqueId(), "응, 그럴 거 같아. 린도 같이 초대할게!", displayDateTime(getRandomDate()), SunwooHan.id)
        ],
        participants: [SunwooHan, KlaraBohringer],
        lastMessage: ""
    },
    {
        id: 4115625287,
        messages: [
            new Message(getUniqueId(), "이번 주말에 여자들끼리 모이는 거 어때? Killjoy는 이미 찬성했어 :p", displayDateTime(getRandomDate()), SunwooHan.id),
            new Message(getUniqueId(), "我想我还有空，不过不要太夸张哦！", displayDateTime(getRandomDate()), LingYingWei.id)
        ],
        participants: [SunwooHan, LingYingWei],
        lastMessage: ""
    }
]