'use strict';






//query selector
const player1 = document.getElementById('name--0')
const player2 = document.getElementById('name--1')
const player0Elem = document.querySelector('.player--0')
const player1Elem = document.querySelector('.player--1')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const score1Elem = document.getElementById('score--0')
const score2Elem = document.getElementById('score--1')
const diceElem = document.querySelector('.dice')
const currentScoreP1 = document.getElementById('current--0')
const currentScoreP2 = document.getElementById('current--1')

// // const jugador1 = prompt(`Player 1 name`)
// // const jugador2 = prompt(`Player 2 name`)
// player1.textContent = jugador1
// player2.textContent = jugador2
console.log(diceElem.src)

// starting values
score1Elem.textContent = 0
score2Elem.textContent = 0
diceElem.classList.add('hidden')

let scores = [0,0]
let currentScore = 0
let activePlayer = 0

let playing = true



//functions
const rollDice = () => {

    if ( playing) {

        //roll de dice
        const dice =Math.round(Math.random() * (6-1) + 1)
        diceElem.classList.remove('hidden')
    
        //display dice numbers
        diceElem.src = `dice-${dice}.png`
    
        //check if it is 1
    
        if (dice !== 1){
    
            currentScore += dice
            document.getElementById(`current--${activePlayer}`).textContent = currentScore
    
        } else {
            switchPlayer()
    
        }

    }

}

const switchPlayer = () => {
    
    document.getElementById(`current--${activePlayer}`).textContent = 0
    currentScore = 0
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0Elem.classList.toggle('player--active')
    player1Elem.classList.toggle('player--active')
}


const reset = () => {

        score1Elem.textContent = 0
        score2Elem.textContent = 0
        currentScoreP1.textContent = 0
        currentScoreP2.textContent = 0
        document.querySelector(`.player--0`).classList.remove('player--winner')
        document.querySelector(`.player--1`).classList.remove('player--winner')
        document.querySelector(`.player--0`).classList.add('player--active')
        document.querySelector(`.player--1`).classList.remove('player--active')
        scores = [0,0]
        currentScore = 0
        activePlayer = 0
        playing = true

        diceElem.classList.remove('hidden')


    }



const holdButtonAction = () => {

    if (playing) {

            //1.- Add current score to active player's score
            scores[activePlayer] += currentScore;
            document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        
            //2.- Check if player's score is >= 100
            if (scores[activePlayer] >= 15){
                playing = false
                document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
                document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
                diceElem.classList.add('hidden')
        
            } else {
        
                //switch player
                switchPlayer();
    }

    }

}





//event listeners

btnNew.addEventListener('click', reset )

btnRoll.addEventListener('click', rollDice )

btnHold.addEventListener('click', holdButtonAction )




