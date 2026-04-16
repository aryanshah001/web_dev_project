let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessNum');
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.remaining')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultparas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true;

if (playGame) {
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if (isNaN(guess)) {
        alert('plz enter valid number')
    }
    else if (guess > 100) {
        alert('plz enter value less than 100')
    }
    else if (guess < 1) {
        alert('plz enter value more than 1')
    }
    else{
        prevGuess.push(guess)
        if (numGuess >= 11) {
            displayGuess(guess)
            displayMessage(`Game Over . Random number was ${randomNumber}`)
            endGame()
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if (guess === randomNumber) {
        displayMessage('you guessed it right')
        endGame()
    }
    else if (guess < randomNumber) {
        displayMessage('your number is low')
    }
    else if (guess > randomNumber) {
        displayMessage('your number is high')
    }
}

function displayGuess(guess){
    userInput.value = ""
    guessSlot.textContent += `${guess},`
    numGuess++;
    remaining.textContent = `${10 - numGuess}`

}

function displayMessage(message){
    //
}

function endGame() {
    //
}

function newGame() {
    //
}
