        let randomNumber = parseInt(Math.random() * 100) + 1;

        const form = document.querySelector('form')
        const inputNumber = document.querySelector('#inputNumber')
        const startOver = document.querySelector('#startOver')
        const guessSlot = document.querySelector('.guessSlot')
        const remaining = document.querySelector('.remaining')
        const lowOrHigh = document.querySelector('.lowOrHigh')
        // const p = document.createElement('p')

        let prevGuess = [];
        let numGuess = 0;
        let playGame = true;


        form.addEventListener('submit',function(e){
            e.preventDefault()

            if (!playGame) return;
            const guess = parseInt(inputNumber.value)
            // console.log(guess);
            
            validateGuess(guess)
        })

        function validateGuess(guess) {
            if (isNaN(guess)) {
                displayMessage('plZ enter valid number')
                return;
            }
            if (guess > 100 || guess < 1) {
                displayMessage('plz enter number btw 1 and 100.')
                inputNumber.value = ""
                return;
            }

            prevGuess.push(guess);
            numGuess ++ ;
            cleanupGuess()

            if (guess == randomNumber ) {
                displayMessage('congrats you won the Game')
                endGame()
                return;
            }

            else if (numGuess == 10) {
                displayMessage('Game over')
                endGame()
                return;
            }

            
            else if (guess > randomNumber){
                displayMessage('too high')
            }
                else{
                    displayMessage('too low')
            }
        }

        function cleanupGuess(){
            inputNumber.value = "";
            guessSlot.textContent = prevGuess.join()
            remaining.textContent = `${10 - numGuess}`
        }

        function displayMessage(message){
            lowOrHigh.innerHTML = `<h2>${message}</h2>`

        }

        function endGame(){
            playGame = false
            // inputNumber.setAttribute('disabled',"")
            inputNumber.disabled = true;

            // p.innerHTML = `<h2 id = 'startOver'>Start New Game</h2>`
           
            const buttons = document.createElement('button')

            buttons.id = "start"
            buttons.textContent = 'Play Again'
            buttons.addEventListener('click', startGame)

            startOver.appendChild(buttons)
            // startOver.appendChild(p)

        }

        function startGame(){
            playGame = true
            randomNumber = parseInt(Math.random() * 100) + 1;
            prevGuess = [];
            numGuess = 0;

            guessSlot.textContent = "";
            remaining.textContent = 10;
            lowOrHigh.textContent = "";
            // startOver.removeChild(buttons)      // Instead this. Use below one.
            const remButtons = document.querySelector('#start')
            // remButtons.remove()
            if (remButtons) {
                remButtons.remove()
            }

            // inputNumber.removeAttribute('disabled',"")  // Instead this. Use below one.
            inputNumber.disabled = false;

            
            

        }
