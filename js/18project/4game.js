//  BY HITESH SIR .

let randomNumber = parseInt(Math.random() * 100 + 1);

const form = document.querySelector('form');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.remGuess')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')
const msg = document.querySelector('.msg')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 0

let playGame = true;

form.addEventListener('submit',function(e){
        e.preventDefault()
        msg.textContent = '';  //clear the msg of plz enter valid number

        if (playGame) {
    
        const guess = parseInt(userInput.value)
        validateGuess(guess)
        }
    })


function validateGuess(guess){
    if (isNaN(guess)) {
        msg.textContent = 'plz enter valid number'
    }
    else if (guess > 100) {
         msg.textContent = 'plz enter less than 100'
    }
    else if (guess < 1) {
        msg.textContent = 'plz enter value more than 1'
    }
    else{
        prevGuess.push(guess)
        
        if (numGuess > 10) {
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
    userInput.value = "";
    guessSlot.textContent+= `${prevGuess}`
    numGuess++;
    remaining.innerHTML = `${10 - numGuess}`

}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2 style="color:red;">${message}</h2>`
}

function endGame() {
    userInput.value = ""
    userInput.setAttribute('disabled' , "")
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
    startOver.appendChild(p)
    playGame = false
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ""
        remaining.innerHTML = `${10 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true

    })
}
