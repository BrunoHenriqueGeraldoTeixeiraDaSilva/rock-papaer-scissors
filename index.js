

let round = 0;
let humanScore = 0;
let computerScore = 0;
let tie = 0;

while(round != 5){
    playGame();
}



function getComputerChoice(){
    const options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random() * 3)];
    return choice;
}

function getHumanChoice(){
   let userChoice = prompt("Enter choice: ")
   return userChoice;
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if(humanChoice == "paper" && computerChoice == "rock"){
        humanScore++;
        console.log("You won!");
        console.log(`You choose ${humanChoice} and the computer choose ${computerChoice}`);
    } else if (humanChoice == "rock" && computerChoice == "scissors"){
        humanScore++;
        console.log("You won!");
        console.log(`You choose ${humanChoice} and the computer choose ${computerChoice}`);
    } else if (humanChoice == "scissors" && computerChoice == "paper"){
        humanScore++
        console.log("You won!");
        console.log(`You choose ${humanChoice} and the computer choose ${computerChoice}`);
    } else if (humanChoice == computerChoice){
        tie++;
        console.log("It's a tie!");
        console.log(`You choose ${humanChoice} and the computer choose ${computerChoice}`);
    } else {
        computerScore++;
        console.log("You lost!");
        console.log(`You choose ${humanChoice} and the computer choose ${computerChoice}`);
    }
}


function playGame(){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection); 
        round++;
        console.log(`Your score: ${humanScore} computer score: ${computerScore} tie: ${tie}`)
}



if(humanScore > computerScore){
    console.log("Human won!")
} else if (humanScore == computerScore){
    console.log("It's a tie!")
}
else{
    console.log("Computer won!")
}







 

