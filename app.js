
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissors'
    }
}

function round() {
    const computerChoice = getComputerChoice();
    const playerSelection = "rock"
    if (computerChoice == 'paper' && playerSelection == 'rock') {
        console.log("You lose! paper beats rock!")
    }
    else if (computerChoice == "rock" && playerSelection == "rock" ) {
        console.log("Tie!")
    }
    else if (computerChoice == "scissors" && playerSelection == "rock") {
        console.log("you win! rock beats scissors!")
    }
}
round();