let playerScore = document.querySelector('#playerScore');
let computerScore = document.querySelector('#computerScore');
let outcome = document.querySelector('#outcome');
const playerBtns = document.querySelector('#btnContainer');
let playerOutcome = document.querySelector('#playerOutcome');
let computerOutcome = document.querySelector('#computerOutcome');
playerOutcome.setAttribute('src', 'images/question.png')
computerOutcome.setAttribute('src', 'images/question.png')

// This targets the button container and runs the 
//'round' function with the button selected as player selection
playerBtns.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'INPUT';
  if (!isButton) {
    return;
  }
  playerOutcome.setAttribute('src', `images/${event.target.id}.png`)
  round(event.target.id);
}) 

//Randomly generates a number between 0 and 3 and returns a value for computer selection
ComputerChoice = () => {
    let randomNumber = Math.floor(Math.random()*3)
    switch (randomNumber) {
        case 0:
            computerOutcome.setAttribute('src', 'images/rock.png')
            return 'rock';
        case 1:
            computerOutcome.setAttribute('src', 'images/paper.png')
            return 'paper';
        case 2:
            computerOutcome.setAttribute('src', 'images/scissors.png')
            return 'scissors';
    }
};

playerScore.textContent = `Player: ${0}`
computerScore.textContent = `Computer: ${0}`
outcome.textContent = 'First to score 5 points win!'
playerResults = 0
computerResults = 0

function round(text) {
    let computerChoice = ComputerChoice();
    let selection = text
    if (playerResults < 5 && computerResults < 5){
        if (computerChoice == selection){
            outcome.textContent = 'Tie! Play again!'
        } else if (computerChoice == 'rock' && selection == 'scissors'){
            outcome.textContent = 'you lose! Rock beats scissors';
            computerResults += 1;
        } else if (computerChoice == 'rock' && selection == 'paper') {
            outcome.textContent = 'you win! Paper beats rock!';
            playerResults += 1;
        } else if (computerChoice == 'paper' && selection == 'rock') {
            outcome.textContent = 'you lose! Paper beats rock!';
            computerResults += 1;
        } else if (computerChoice == 'paper' && selection == 'scissors') {
            outcome.textContent = 'you win! Scissors beats paper!';
            playerResults += 1;
        } else if (computerChoice == 'scissors' && selection == 'paper') {
            outcome.textContent = 'you lose! Scissors beats paper!';
            computerResults += 1;
        } else if (computerChoice == 'scissors' && selection == 'rock') {
            outcome.textContent = 'you win! Rock beats scissors!';
            playerResults += 1;
        }
    }
    playerScore.textContent = `Player: ${playerResults}`
    computerScore.textContent = `Computer: ${computerResults}`

    if (playerResults == 5){
        alert(`You win the game! with a score of ${playerResults} to ${computerResults}!`)
        playerResults = 0
        computerResults = 0 
    } else if (computerResults == 5){
        alert(`You lose the game! by score of ${computerResults} to ${playerResults}`)
        playerResults = 0
        computerResults = 0 
    }
};




/* function game(a){ 
    let i = 1;
    while (i <= 5) {
        console.log('round ' + i);
        round(a)
        i++
    }
    if (playerResults > computerResults){
        console.log(`You win the game! with a score of ${playerResults} to ${computerResults}!`)
    } else if (computerResults > playerResults){
        console.log(`You lose the game! by score of ${computerResults} to ${playerResults}`)
    } else {
        console.log('Tie game! Play again.')
    }
    playerResults = 0
    computerResults = 0
}; */