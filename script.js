'use strict';
// Elements selection
const score0Points = document.getElementById('score--0');
const score1Points = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
let throwDice = document.querySelector('.btn--roll');
const current0Element = document.getElementById('current--0');
let player0 = document.querySelector('.player--active');
let player1 = document.querySelector('.player--1');
// Game initial conditions;
score0Points.textContent = 0;
score1Points.textContent = 0;
diceElement.classList.add('hidden');

let currentScore0 = 0;
let currentScore1 = 0;
let activePlayer = 0;
let totalScores = [0, 0];

throwDice.addEventListener('click', function () {
  let randomNum = Math.round(Math.random() * 5 + 1);
  console.log(randomNum);
  diceElement.classList.remove('hidden');
  diceElement.src = `dice${randomNum}.png`;
  if (randomNum !== 1) {
    currentScore0 += randomNum;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore0;
  } else {
    currentScore0 = 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    console.log('active player ' + activePlayer);
    if (activePlayer) {
      player1.classList.add('player--active');
      player0.classList.remove('player--active');
    } else {
      player0.classList.add('player--active');
      player1.classList.remove('player--active');
    }
  }
});
