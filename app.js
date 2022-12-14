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
};



let Rock = document.getElementById("rock-btn");
Rock.addEventListener('click', function round() {
    const computerChoice = getComputerChoice();
    let selection = "rock";
    let outcome = document.getElementById("outcome")
    let compOut = document.getElementById("computer-icon")

    console.log("Player's choice is " + selection)
    console.log("Computer's choice is " + computerChoice)
    if (computerChoice == selection) {
        outcome.innerHTML = "Tie!"
        compOut.src = '/images/rock.png';
    }
    else if (computerChoice == 'paper' && selection == 'rock') {
        outcome.innerHTML = "You lose! paper beats rock!";
        compOut.src = '/images/paper.png';
    }
    else if (computerChoice == "scissors" && selection == "rock") {
        outcome.innerHTML = "You win! rock beats scissors!";
        compOut.src = '/images/scissors.png';
    }
    else {
        outcome.innerHTML("Error! Please try again!")
    }
});



let Paper = document.getElementById("paper-btn");
Paper.addEventListener('click', function round() {
    const computerChoice = getComputerChoice();
    let selection = "paper";
    let outcome = document.getElementById("outcome")
    let compOut = document.getElementById("computer-icon")

    console.log("Player's choice is " + selection)
    console.log("Computer's choice is " + computerChoice)
    if (computerChoice == selection) {
        outcome.innerHTML = "Tie!"
        compOut.src = '/images/paper.png';
    }
    else if (computerChoice == "rock" && selection == "paper") {
        outcome.innerHTML = "You win! Paper beats rock!";
        compOut.src = '/images/rock.png';
    }
    else if (computerChoice == "scissors" && selection == "paper") {
        outcome.innerHTML = "You lose! Scissors beats paper!";
        compOut.src = '/images/scissors.png';
    }
    else {
        outcome.innerHTML("Error! Please try again.")
    }
});



let Scissors = document.getElementById("scissors-btn");
Scissors.addEventListener('click', function round() {
    const computerChoice = getComputerChoice();
    let selection = "scissors";
    let outcome = document.getElementById("outcome")
    let compOut = document.getElementById("computer-icon")

    console.log("Player's choice is " + selection)
    console.log("Computer's choice is " + computerChoice)
    if (computerChoice == selection) {
        outcome.innerHTML = "Tie!"
        compOut.src = '/images/scissors.png';
    }
    else if (computerChoice == 'rock' && selection == 'scissors') {
        outcome.innerHTML = "You lose! Rock beats scissors!" 
        compOut.src = '/images/rock.png';
    }
    else if (computerChoice == 'paper' && selection == 'scissors') {
        outcome.innerHTML = "You win! Scissors beats paper!"
        compOut.src = '/images/paper.png';
    }
    else {
        outcome.innerHTML("Error! Please try again.")
    }
});

function game() {
    let i = 1
    for (i = 1; i < 6; i++) {
        console.log(i)
        playerSelection = 'rock'
        round();
    }
}



function round() {
    const computerChoice = getComputerChoice();
    let selection = playerSelection.toLowerCase();

    console.log("Player's choice is " + selection)
    console.log("Computer's choice is " + computerChoice)
    if (computerChoice == selection) {
        console.log("Tie!")
    }
    else if (computerChoice == 'rock' && selection == 'scissors') {
        console.log("You lose! Rock beats scissors!") 
    }
    else if (computerChoice == "rock" && selection == "paper") {
        console.log("you win! Paper beats rock!")
    }
    else if (computerChoice == 'paper' && selection == 'rock') {
        console.log("You lose! paper beats rock!") 
    }
    else if (computerChoice == 'paper' && selection == 'scissors') {
        console.log("You win! Scissors beats paper!") 
    }
    else if (computerChoice == "scissors" && selection == "rock") {
        console.log("you win! rock beats scissors!")
    }
    else if (computerChoice == "scissors" && selection == "paper") {
        console.log("you lose! Scissors beats paper!")
    }
    else {
        console.log("null")
    }
}