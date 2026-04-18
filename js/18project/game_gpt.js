let randomNumber = Math.floor(Math.random() * 100) + 1;

const form = document.querySelector('form');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.remGuess');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const msg = document.querySelector('.msg');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 0;   // start from 0
let playGame = true;

// Initial remaining
remaining.textContent = 10;

form.addEventListener('submit', function(e){
    e.preventDefault();
    msg.textContent = '';

    if (!playGame) return;

    const guess = Number(userInput.value); //must parseInt and takes value inside eventListener.
    validateGuess(guess);
});

function validateGuess(guess){
    if (isNaN(guess)) {
        msg.textContent = 'Please enter a valid number';
        return;
    }
    if (guess < 1 || guess > 100) {
        msg.textContent = 'Enter number between 1 and 100';
        return;
    }

    // ✅ Count first
    numGuess++;

    prevGuess.push(guess);
    displayGuess();

    // ✅ Check win
    if (guess === randomNumber) {
        displayMessage('🎉 You guessed it right!');
        endGame();
        return;
    }

    // ✅ Check limit
    if (numGuess === 10) {
        displayMessage(`❌ Game Over. Number was ${randomNumber}`);
        endGame();
        return;
    }

    // ✅ Hint
    if (guess < randomNumber) {
        displayMessage('📉 Too low');
    } else {
        displayMessage('📈 Too high');
    }
}

function displayGuess(){
    userInput.value = "";

    guessSlot.textContent = `[${prevGuess.join(', ')}]`;

    // Remaining = 10 - used
    remaining.textContent = 10 - numGuess;
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    playGame = false;
    userInput.setAttribute('disabled', '');

    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);

    document.querySelector('#newGame').addEventListener('click', resetGame);
}

function resetGame(){
    randomNumber = Math.floor(Math.random() * 100) + 1;
    prevGuess = [];
    numGuess = 0;
    playGame = true;

    guessSlot.textContent = '';
    remaining.textContent = 10;
    lowOrHi.innerHTML = '';

    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
}