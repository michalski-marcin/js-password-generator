let password = ""

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
const lenghtEl = document.getElementById("lenght")


// MAIN FUNCTION

function generate() {
    password = ""
    characters = letters
    getCharactersArray()
    getPassword()
    passwordEl.textContent = password
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

function getPassword() {
    for (i = 0; i < lenghtEl.value; i++) {
        let randomCharacter = characters[Math.floor(characters.length * Math.random())];
        password += randomCharacter
      }
    }
