let password = ""
let passwordIndex = 0
let lenghtEl = 0


// CHARACTER ARRAYS
const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const specialSigns = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"]
let characters = []

// GET ELEMENTS FROM HTML FILE
const passwordEl = document.getElementById("password-el")
const numbersInput = document.getElementById('numbers')
const specialInput = document.getElementById('special-sign')
const eightInput = document.getElementById('eight-chars')
const twelveInput = document.getElementById('twelve-chars')

const passwordContainer = document.querySelector(".password-container")


// MAIN FUNCTION

function generate() {
    password = ""
    characters = letters
    passwordEl.textContent = ""
    getCharactersArray()
    getLenghtArray()
    getPassword()
    passwordEl.textContent = password
    passwordContainer.classList.add("visible")
}

// FUNCTIONS
function getCharactersArray() {
    if (numbersInput.checked == true) {
        characters = characters.concat(numbers)
    }
    if (specialInput.checked == true) {
        characters = characters.concat(specialSigns)
    }
}

function getLenghtArray() {
    if (eightInput.checked == true) {
        lenghtEl = 8
    } else {
        lenghtEl = 12
    }
}

function getPassword() {
    for (i = 0; i < lenghtEl; i++) {
        let randomCharacter = characters[Math.floor(characters.length * Math.random())];
        password += randomCharacter
    }
}

function copyToClipboard() {
    navigator.clipboard.writeText(password)
    alert("Password copied to clipboard!")
} 
