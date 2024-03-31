function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3) + 1;
    let computerChoice =
        randNum === 1 ? 'rock' :
            randNum === 2 ? 'paper' : 'scissor';
    return computerChoice;
}

let playerScore = 0;
let computerScore = 0;
let roundNum = 1;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        roundNum++;
        return 'you lose';
    } else if (playerSelection === 'rock' && computerSelection === 'scissor') {
        playerScore++;
        roundNum++;
        return 'you win';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        roundNum++;
        return 'you win';
    } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
        computerScore++;
        roundNum++;
        return 'you lose';
    } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        computerScore++;
        roundNum++;
        return 'you lose';
    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        playerScore++;
        roundNum++;
        return 'you win';
    } else {
        roundNum++;
        return 'you tie';
    }
}

let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorBtn = document.querySelector("#scissor");

let menu = document.querySelector("#menu");
let results = document.querySelector("#results");

menu.addEventListener("click", (event) => {
    let target = event.target;
    
    switch(target.id) {
        case "rock":
            results.textContent = `Round Number ${roundNum}: ` + playRound("rock", getComputerChoice());
            findWinner();
            break;
        case "paper":
            results.textContent = `Round Number ${roundNum}: ` + playRound("paper", getComputerChoice());
            findWinner();
            break;
        case "scissor":
            results.textContent = `Round Number ${roundNum}: ` + playRound("scissor", getComputerChoice());
            findWinner();
            break;
    }
});

function findWinner() {
    if (playerScore === 5) {
        results.textContent = "You Won the Game!!!";
        playerScore = 0;
        computerScore = 0;
        roundNum = 0;
    } else if (computerScore === 5) {
        results.textContent = "You Lost the Game!!!";
        playerScore = 0;
        computerScore = 0;
        roundNum = 0;
    }
}
