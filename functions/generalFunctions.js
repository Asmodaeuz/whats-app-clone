function toggleActive(element) {
    element = window.event
    element.target.classList.add("active")
    setTimeout(() => {
        return element.target.classList.contains("active") ?
            true && element.target.classList.remove("active") :
            false
    }, 175)
}

function toggleDisplay(event) {
    const chatInput = event.target
    let inputValue = chatInput.value

    if (inputValue.length === 0) {
        setTimeout(() => {
            document.querySelector(".icons__mic").classList.remove("hide")
            document.querySelector(".icons__mic").classList.add("show")
            document.querySelector(".icons__send").classList.add("hide")
            document.querySelector(".icons__send").classList.remove("show")
        }, 300)

    } else {
        setTimeout(() => {
            document.querySelector(".icons__send").classList.remove("hide")
            document.querySelector(".icons__send").classList.add("show")
            document.querySelector(".icons__mic").classList.add("hide")
            document.querySelector(".icons__mic").classList.remove("show")
            document.querySelector(".icons__mic").style.transform = "rotate(45deg)"
        }, 300)

    }
}

function toggleSelect() {
    const userSelect = document.getElementById("userSelect")

    userSelect.classList.toggle("active")
}


function getUniqueId() {
    const array = new Uint32Array(1)
    window.crypto.getRandomValues(array)
    const uniqueID = array[0].toString()
    return uniqueID
}