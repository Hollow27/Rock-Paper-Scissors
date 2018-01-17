let computerScore = 0;
let humanScore = 0;

const h4 = document.querySelector('h4');
const h2 = document.querySelector('h2');

function reset() {
  const content = document.querySelector('p');
  humanScore = 0; // scores reset to 0
  computerScore = 0; // scores reset to 0
  h4.textContent = 'Player: ${humanScore} Computer: ${computerScore}';
  content.textContent = "";
  h2.textContent = "";
}

function buttonReset() {
  document.querySelector('#reset').addEventListener('click', reset);
}

function computerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound() {
  const content = document.querySelector('p');

  if (computerScore == 5){
    return;
  }
  else if (humanScore == 5){
    return;
  }
  else if (human === computer) {
    content.textContent = 'tie';
    h4.textContent = 'Player: ${humanScore} Computer: ${computerScore}';
  }
}

function game() {

}

function startGame() {

}
