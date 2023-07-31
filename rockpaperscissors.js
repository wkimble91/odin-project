const buttons = document.querySelectorAll('.btn');
const currResult = document.querySelector('.result');
const currWinner = document.querySelector('.winner');
const currScore = document.querySelector('.score');
let playerScore = 0;
let computerScore = 0;
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerSelection = button.id;
    game(playerSelection);
  });
});

let getComputerChoice = () => {
  let rockPaperScissors = ['Rock', 'Paper', 'Scissors'];
  return rockPaperScissors[Math.floor(Math.random() * 3)];
};

let playRound = (player, computer) => {
  if (player == computer) {
    currResult.textContent =
      'Player: ' + player + ', Computer: ' + computer + '.';
    currWinner.textContent = 'TIE!';
  } else if (
    (player == 'Rock' && computer == 'Paper') ||
    (player == 'Scissors' && computer == 'Rock') ||
    (player == 'Paper' && computer == 'Scissors')
  ) {
    currResult.textContent =
      'Player: ' + player + ', Computer: ' + computer + '.';
    currWinner.textContent = 'Computer Scores!';
    return 'computerScored';
  } else if (
    (computer == 'Rock' && player == 'Paper') ||
    (computer == 'Scissors' && player == 'Rock') ||
    (computer == 'Paper' && player == 'Scissors')
  ) {
    currResult.textContent =
      'Player: ' + player + ', Computer: ' + computer + '.';
    currWinner.textContent = 'You Score!';
    return 'playerScored';
  }
};

let game = (playerSelection) => {
  let round;
  const computerSelection = getComputerChoice();
  round = playRound(playerSelection, computerSelection);
  if (round == 'computerScored') {
    computerScore++;
  } else if (round == 'playerScored') {
    playerScore++;
  }

  if (playerScore >= 5) {
    currWinner.textContent = 'You Win The Game! ';
    currResult.textContent = '';
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore >= 5) {
    currWinner.textContent = 'You Lose! ';
    currResult.textContent = '';
    playerScore = 0;
    computerScore = 0;
  }

  currScore.textContent =
    'Player: ' + playerScore + ' and Computer: ' + computerScore;
};
