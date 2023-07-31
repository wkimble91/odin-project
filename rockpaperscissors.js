const buttons = document.querySelectorAll('.btn');
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
    currWinner.textContent =
      'Player: ' + player + ', Computer: ' + computer + '. TIE!';
  } else if (
    (player == 'Rock' && computer == 'Paper') ||
    (player == 'Scissors' && computer == 'Rock') ||
    (player == 'Paper' && computer == 'Scissors')
  ) {
    currWinner.textContent =
      'Player: ' + player + ', Computer: ' + computer + '. Computer Wins!';
    return 'computerScored';
  } else if (
    (computer == 'Rock' && player == 'Paper') ||
    (computer == 'Scissors' && player == 'Rock') ||
    (computer == 'Paper' && player == 'Scissors')
  ) {
    currWinner.textContent =
      'Player: ' + player + ', Computer: ' + computer + '. You Win!';
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
    currWinner.textContent =
      'You Win! Player: ' + playerScore + ', Computer: ' + computerScore + '.';
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore >= 5) {
    currWinner.textContent =
      'You Lose! Player: ' + playerScore + ', Computer: ' + computerScore + '.';
    playerScore = 0;
    computerScore = 0;
  }

  currScore.textContent =
    'Player: ' + playerScore + ' and Computer: ' + computerScore;
};
