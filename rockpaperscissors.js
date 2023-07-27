let getComputerChoice = () => {
  let rockPaperScissors = ['Rock', 'Paper', 'Scissors'];
  return rockPaperScissors[Math.floor(Math.random() * 3)];
};

let playRound = (player, computer) => {
  if (player == computer) {
    console.log('Player: ' + player + ', Computer: ' + computer + '. TIE!');
  } else if (
    (player == 'Rock' && computer == 'Paper') ||
    (player == 'Scissors' && computer == 'Rock') ||
    (player == 'Paper' && computer == 'Scissors')
  ) {
    console.log(
      'Player: ' + player + ' Computer: ' + computer + '. Computer Wins!'
    );
    return 'computerScored';
  } else if (
    (computer == 'Rock' && player == 'Paper') ||
    (computer == 'Scissors' && player == 'Rock') ||
    (computer == 'Paper' && player == 'Scissors')
  ) {
    console.log('Player: ' + player + ' Computer: ' + computer + '. You Win!');
    return 'playerScored';
  }
};

let game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let round;
  for (i = 0; i < 5; i++) {
    const playerInitSelection = prompt('Choose Rock, Paper or Scissors: ');
    const playerSelection =
      playerInitSelection.charAt(0).toUpperCase() +
      playerInitSelection.toLowerCase().slice(1);
    const computerSelection = getComputerChoice();
    round = playRound(playerSelection, computerSelection);
    if (round == 'computerScored') {
      computerScore++;
    } else if (round == 'playerScored') {
      playerScore++;
    }
  }
  console.log(
    'Final Score! Player: ' + playerScore + ' and Computer: ' + computerScore
  );
};
game();
