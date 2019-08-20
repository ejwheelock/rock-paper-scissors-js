function computerPlay() {
  const choices = ['rock','paper','scissors'];
  let num = Math.floor(Math.random()*Math.floor(3));
  console.log(num);
  return choices[num];
}

function playRound(playerSelection, computerSelection) {
  let winStr = 'Tie! Try again.';
  switch (playerSelection.toLowerCase()) {
    case 'rock':
      if (computerSelection === 'paper') winStr = 'You Lose! Paper beats Rock!';
      else if (computerSelection === 'scissors') winStr = 'You Win! Rock beats Scissors!';
      break;
    case 'paper':
      if (computerSelection === 'rock') winStr = 'You Win! Paper beats Rock!';
      else if (computerSelection == 'scissors') winStr = 'You Lose! Scissors beats Paper!';
      break;
    case 'scissors':
        if (computerSelection === 'rock') winStr = 'You Lose! Rock beats Scissors!';
        else if (computerSelection === 'paper') winStr = 'You Win! Scissors beats Paper!';
      break;
    default:
      winStr = 'Something went wrong. Try again.';
  }
  return winStr;
}

function game() {
  let gameCounter = 0;
  let playWins = 0;
  let compWins = 0;

  while (gameCounter < 5) {
    let compSelect = computerPlay();
    let playerSelect = prompt('Do you play rock, paper, or scissors?');
    let gameStr = playRound(playerSelect, compSelect);
    console.log(gameStr);
    if (gameStr.includes('Win')) playWins += 1;
    else if (gameStr.includes('Lose')) compWins += 1;

    gameCounter += 1;
    console.log(`Player: ${playWins}\nComputer: ${compWins}`);
  }

  if (playWins > compWins) console.log("You win! Congratulations!");
  else if (compWins > playWins) console.log("Sorry, you lose! Try again.");
  else console.log("It's a tie! Everyone wins!");

}