function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3) + 1;
    let computerChoice = 
        randNum === 1 ? 'rock' : 
        randNum === 2 ? 'paper' : 'scissor' ;
    return computerChoice;
} 

// function playerSelection(str) {
//     return str.toLowerCase();
// }

//use case statement much better multiple answers
//easy to make spelling error set better variables 
//entering null makes you tie
function playRound(playerSelection, computerSelection) {
    //let playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'you lose';
    } else if (playerSelection === 'rock' && computerSelection === 'scissor') {
        return 'you win';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'you win';
    } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
        return 'you lose';
    } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        return 'you lose';
    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        return 'you win';
    } else {
        return 'you tie';
    }
  }

  let winScore = 0;
  let loseScore = 0;
  for (let i=0; i<5; i++) {
      const promptPlayerSelection = prompt('Choose rock or paper or scissor').toLowerCase();
      const computerSelection = getComputerChoice();
      let result = playRound(promptPlayerSelection, computerSelection);
      if (result === 'you win') {
        console.log('you win this round');
        winScore++;
      } else if (result === 'you lose') {
        console.log('you lose this round');
        loseScore++;
      } else {
        console.log('you tie this round');
      }
  }
  if (winScore > loseScore) {
      console.log('You Won the game');
    } else if (loseScore > winScore) {
        console.log('You Lost the game');
    } else {
      console.log('Good Game you Tied');
  }

  