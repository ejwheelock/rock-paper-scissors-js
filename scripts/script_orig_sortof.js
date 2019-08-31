function computerPlay() {
  const choices = ['rock','paper','scissors'];
  let num = Math.floor(Math.random()*Math.floor(3));
  console.log(choices[num]);
  return choices[num];
}

function playRound(playerSelection, computerSelection) {
  let winStr = 'It\'s a tie!';
  switch (playerSelection.toLowerCase()) {
    case 'rock':
      if (computerSelection === 'paper') winStr = 'You lose! Paper beats Rock!';
      else if (computerSelection === 'scissors') winStr = 'You win! Rock beats Scissors!';
      break;
    case 'paper':
      if (computerSelection === 'rock') winStr = 'You win! Paper beats Rock!';
      else if (computerSelection == 'scissors') winStr = 'You lose! Scissors beats Paper!';
      break;
    case 'scissors':
        if (computerSelection === 'rock') winStr = 'You lose! Rock beats Scissors!';
        else if (computerSelection === 'paper') winStr = 'You win! Scissors beats Paper!';
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
  let playButton = document.querySelectorAll('.play');
//  let paperButton = document.querySelector('#paper');
//  let scissorsButton = document.querySelector('#scissors');

  function AddEventListeners(list, e, fn) {
    for (let i=0; i<list.length; i++) {
      list[i].addEventListener(e, fn, false);
    }
  }

  AddEventListeners(playButton, 'click', playRound);

  let compSelect = computerPlay();
  let playerSelect = "true";
  while (!picks.includes(playerSelect) && playerSelect !== null) {
    playerSelect = (prompt('Pick one: rock, paper, or scissors?')).toLowerCase();
    if (!picks.includes(playerSelect) && playerSelect !== null) alert("Try again.");
  }

  //alert(`You: ${playerSelect}\nComputer: ${compSelect}`);
  let gameStr = playRound(playerSelect, compSelect);;
  
  console.log(`You: ${playerSelect}\nComputer: ${compSelect}\n\n${gameStr}`);
  alert(`You: ${playerSelect}\nComputer: ${compSelect}\n\n${gameStr}`);
  if (gameStr.includes('win')) playWins += 1;
  else if (gameStr.includes('lose')) compWins += 1;

  gameCounter += 1;
  console.log(`Round: ${gameCounter}\n\nPlayer: ${playWins}\nComputer: ${compWins}`);
  alert(`Round: ${gameCounter}\n\nPlayer: ${playWins}\nComputer: ${compWins}`);


  let winStr = "";
  if (playWins > compWins) winStr = "You win! Congratulations!";
  else if (compWins > playWins) winStr = "Sorry, you lose! Try again.";
  else winStr = "It's a tie! Everyone wins!";

  console.log(winStr);
  alert(winStr);

}


//game();