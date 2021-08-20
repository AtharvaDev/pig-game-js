'use strict';
const score0Ele = document.querySelector('#score--0');
const score1Ele = document.querySelector('#score--1');
const currScore0Ele = document.querySelector('#current--0');
const currScore1Ele = document.querySelector('#current--1');
const dice = document.querySelector('.dice');
let randomNo = Math.floor(Math.random() * 6+1)

// Starting condition
score0Ele.textContent =0;
score1Ele.textContent =0;
dice.classList.add('hidden')
// current player logic 
let score = [0,0];
let currentScore=0;
let activePlayer=0;

function randomNoGen() {
  randomNo = Math.floor(Math.random() * 6+1);
}

let currScore =0;
function rollDice() {
  randomNoGen();
  let img = `dice-${randomNo}.png`;
  console.log(img)
  document.querySelector('.dice').src= img;
  dice.classList.remove('hidden');
  if (randomNo !== 1){
    currScore += randomNo;
    document.querySelector(`#current--${activePlayer}`).textContent=currScore;
  }else{
    activePlayer = activePlayer == 0? 1:0;
  }

}
