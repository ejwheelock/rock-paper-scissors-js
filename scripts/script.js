let anyButton = document.querySelectorAll('.play');
let playerWins = 0;
let compWins = 0;

function AddEventListeners(list, e, fn) {
    for (let i=0; i<list.length; i++) {
      list[i].addEventListener(e, fn, false);
    }
}

function computerPlay() {
    const choices = ['rock','paper','scissors'];
    let num = Math.floor(Math.random()*Math.floor(3));
//    console.log(choices[num]);
    return choices[num];
}

function declareWin() {
    let winner = document.querySelector('p.winner');
    if (playerWins === 5) {    
        winner.textContent = "Congrats! You win!";
    }
    else {
        winner.textContent = "You lose! Try again.";
    }
}

function displayResults(person, comp, str) {
//    console.log(`You: ${person}\nComputer: ${comp}\n\n${str}`);
    if (str.includes('win')) playerWins += 1;
    else if (str.includes('lose')) compWins += 1;
    let scoreText = `Current score -- You: ${playerWins}    Computer: ${compWins}`;
    let score = document.querySelector('p.score');
    score.textContent = scoreText;
    let playText = `You: ${person}    Computer: ${comp}`; //    ${str}`;
    let play = document.querySelector('p.plays');
    play.textContent = playText;
    play.appendChild(document.createElement("br"));
    play.appendChild(document.createTextNode(str));

    if (playerWins === 5 || compWins === 5) {
        declareWin();
        playerWins = 0;
        compWins = 0;
    }
}

function createElements(el) {
    let score = document.createElement('p');
    score.classList.add('score');
    let plays = document.createElement('p');
    plays.classList.add('plays');
    let winner = document.createElement('p');
    winner.classList.add('winner');
    let playNode = document.createTextNode("Current plays -- ");
    let scoreNode = document.createTextNode("Current score -- ");
    let winNode = document.createTextNode("");
    plays.appendChild(playNode);
    score.appendChild(scoreNode);
    winner.appendChild(winNode);
    el.appendChild(plays);
    el.appendChild(score);
    el.appendChild(winner);
}

function resetGame() {
    let winner = document.querySelector('p.winner');
    winner.textContent = "";
}

function playRound(e) {
    let compPlay = computerPlay();
    let personPlay = e.target.id;
    let resultsDiv = document.querySelector('div.results');
    if (resultsDiv.firstElementChild === null) createElements(resultsDiv);
    else if (document.querySelector('p.winner').textContent !== "") {
        resetGame();
    }
    let winStr = 'It\'s a tie!';
    switch (personPlay) {
        case 'rock':
            if (compPlay === 'paper') winStr = 'You lose! Paper beats Rock!';
            else if (compPlay === 'scissors') winStr = 'You win! Rock beats Scissors!';
            break;
        case 'paper':
            if (compPlay === 'rock') winStr = 'You win! Paper beats Rock!';
            else if (compPlay == 'scissors') winStr = 'You lose! Scissors beats Paper!';
            break;
        case 'scissors':
            if (compPlay === 'rock') winStr = 'You lose! Rock beats Scissors!';
            else if (compPlay === 'paper') winStr = 'You win! Scissors beats Paper!';
            break;
        default:
            winStr = 'Something went wrong. Try again.';
    }

    displayResults(personPlay, compPlay, winStr);
}

AddEventListeners(anyButton, 'click', playRound);


