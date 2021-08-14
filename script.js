import { startConfetti, stopConfetti, removeConfetti } from './confetti.js';

const playerScoreEl = document.getElementById('player-score');
const playerChoiceEl = document.getElementById('player-choice');
const computerScoreEl = document.getElementById('computer-score');
const computerChoiceEl = document.getElementById('computer-choice');
const resultText = document.getElementById('result-text');

const playerRock = document.getElementById('player-rock');
const playerPaper = document.getElementById('player-paper');
const playerScissors = document.getElementById('player-scissors');
const playerLizard = document.getElementById('player-lizard');
const playerSpock = document.getElementById('player-spock');

const computerRock = document.getElementById('computer-rock');
const computerPaper = document.getElementById('computer-paper');
const computerScissors = document.getElementById('computer-scissors');
const computerLizard = document.getElementById('computer-lizard');
const computerSpock = document.getElementById('computer-spock');

const allGameIcons = document.querySelectorAll('.far');

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

const choicesValue = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
let playerScoreNumber = 0;
let computerScoreNumber = 0;


// Reset all 'selected' icons
function resetSelected() {
  stopConfetti();
  removeConfetti();
  allGameIcons.forEach(icon => {
    icon.classList.remove('selected');
  })
}

// Reset score & playerChoice and computerChoice
function resetAll() {
  resetSelected();
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  playerScoreEl.textContent = playerScoreNumber;
  computerScoreEl.textContent = computerScoreNumber;
  resultText.textContent = 'Let\'s Play!';
  computerChoiceEl.textContent = '';
  playerChoiceEl.textContent = '';
}

// Passing player selection value and styling icons
function select(playerChoice, isPlayer) {
  // Call function to process turn
  resetSelected();
  // Add 'selected' styling & playerChoice
  stylingPlayerChoice(playerChoice, isPlayer);
  // Random computer choice
  const computerChoice = choicesValue[Math.floor(Math.random()*5)];
  stylingPlayerChoice(computerChoice, false);
  // Check result, increase scores, update resulstText
  if (playerChoice === computerChoice) {
    resultText.textContent = "It's a tie.";
  } else {
    const choice = choices[playerChoice];
    if (choice.defeats.indexOf(computerChoice) > -1) {
      startConfetti();
      resultText.textContent = 'You Won!';
      playerScoreNumber++;
      playerScoreEl.textContent = playerScoreNumber;
    } else {
      resultText.textContent = 'You Lost!';
      computerScoreNumber++;
      computerScoreEl.textContent = computerScoreNumber;
    }
  }
}

function stylingPlayerChoice(playerChoice, isPlayer) {
  switch(playerChoice) {
    case 'rock':
      if (isPlayer) {
        playerRock.classList.add('selected');
        playerChoiceEl.textContent = ' --- Rock';
      } else {
        computerRock.classList.add('selected');
        computerChoiceEl.textContent = ' --- Rock';
      }
      break;
    case 'paper':
      if (isPlayer) {
        playerPaper.classList.add('selected');
        playerChoiceEl.textContent = ' --- Paper';
      } else {
        computerPaper.classList.add('selected');
        computerChoiceEl.textContent = ' --- Paper';
      }
      break;
    case 'scissors':
      if (isPlayer) {
        playerScissors.classList.add('selected');
        playerChoiceEl.textContent = ' --- Scissors';
      } else {
        computerScissors.classList.add('selected');
        computerChoiceEl.textContent = ' --- Scissors';
      }
      break;
    case 'lizard':
      if (isPlayer) {
        playerLizard.classList.add('selected');
        playerChoiceEl.textContent = ' --- Lizard';
      } else {
        computerLizard.classList.add('selected');
        computerChoiceEl.textContent = ' --- Lizard';
      }
      break;
    case 'spock':
      if (isPlayer) {
        playerSpock.classList.add('selected');
        playerChoiceEl.textContent = ' --- Spock';
      } else {
        computerSpock.classList.add('selected');
        computerChoiceEl.textContent = ' --- Spock';
      }
      break;
  }
}

window.select = select;
window.resetAll = resetAll;