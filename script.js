'use strict';
// Elements selection
let score0Points = document.getElementById('score--0');
let score1Points = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
let throwDice = document.querySelector('.btn--roll');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');
let player0 = document.querySelector('.player--active');
let player1 = document.querySelector('.player--1');
let player00 = document.querySelector('.player--0');
// Game initial conditions;
score0Points.textContent = 0;
score1Points.textContent = 0;
diceElement.classList.add('hidden');
let switchActivePlayer = function () {
  currentScore0 = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore0;

  activePlayer = activePlayer === 0 ? 1 : 0;
  if (activePlayer) {
    player1.classList.add('player--active');
    player0.classList.remove('player--active');
  } else {
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
  }
};
let currentScore0 = 0;
let activePlayer = 0;
let totalScores = [0, 0];
let gameEnd = true;

throwDice.addEventListener('click', function () {
  if (gameEnd) {
    let randomNum = Math.round(Math.random() * 5 + 1);
    console.log(randomNum);
    diceElement.classList.remove('hidden');
    diceElement.src = `dice${randomNum}.png`;
    if (randomNum !== 1) {
      currentScore0 += randomNum;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore0;
    } else {
      switchActivePlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (gameEnd) {
    totalScores[activePlayer] += currentScore0;
    document.querySelector(`#score--${activePlayer}`).textContent =
      totalScores[activePlayer];
    if (totalScores[activePlayer] >= 30) {
      gameEnd = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchActivePlayer();
    }
  }
});
btnNew.addEventListener('click', function () {
  currentScore0 = 0;
  activePlayer = 0;
  totalScores = [0, 0];
  score0Points.textContent = totalScores[0];
  score1Points.textContent = totalScores[1];
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
  player00.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  current0Element.textContent = currentScore0;
  current1Element.textContent = currentScore0;
  gameEnd = true;
});
