let getComputerChoice = () => {
  let rockPaperScissors = ['Rock', 'Paper', 'Scissors'];
  return rockPaperScissors[Math.floor(Math.random() * 3)];
};

let singleRound = () => {
  let computerSelection = getComputerChoice();
  console.log(computerSelection);
};
singleRound();
