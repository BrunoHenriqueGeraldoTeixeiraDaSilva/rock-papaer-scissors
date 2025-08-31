//Adding reference to the buttons
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const resultDiv = document.querySelector("#result");



//Adding event liseners to the buttons

rock.addEventListener("click", () =>{
    resultDiv.innerHTML = "" //rock
    playRound("rock", getComputerChoice())
});
//paper
paper.addEventListener("click", () =>{
    resultDiv.innerHTML = ""
    playRound("paper", getComputerChoice())
});
//scissors
scissors.addEventListener("click", () =>{
    resultDiv.innerHTML = ""
    playRound("scissors", getComputerChoice())
});


let round = 0;
let humanScore = 0;
let computerScore = 0;
let tie = 0;



function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if(humanChoice == "paper" && computerChoice == "rock"){
        humanScore++;
        resultDiv.innerHTML += 'You <span class="win">WIN!</span><br>';
    } else if (humanChoice == "rock" && computerChoice == "scissors"){
        humanScore++;
        resultDiv.innerHTML += 'You <span class="win">WIN!</span><br>';
    } else if (humanChoice == "scissors" && computerChoice == "paper"){
        humanScore++
        resultDiv.innerHTML += 'You <span class="win">WIN!</span><br>';
    } else if (humanChoice == computerChoice){
        tie++;
        resultDiv.innerHTML += 'It\'s a <span class="tie">TIE!</span><br>';
    } else {
        computerScore++;
        resultDiv.innerHTML += 'You <span class="loss">LOST!</span><br>';
    }

    resultDiv.innerHTML += `You choose ${humanChoice} and the computer choose ${computerChoice}<br>`;
    resultDiv.innerHTML += `Your score <span class="win">${humanScore}</span> and the computer score <span class="loss">${computerScore}</span><br>`;

    if(humanScore == 5 || computerScore == 5){
        let winner = humanScore == 5 ? "Human won!🧍🏼" : "Computer Won!🤖" 
        resultDiv.innerHTML = `${winner}<br>`;
        resultDiv.innerHTML += `<div>Would you like to play again?</div>`;
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        //creating play again button
        const playAgainBtn = document.createElement("button");
        playAgainBtn.classList.add("play-again");  
        //creating the image
        const img = document.createElement("img");
        img.src = "images/play-again.png";
        playAgainBtn.appendChild(img);
        resultDiv.appendChild(playAgainBtn);
        //logic for the button
        playAgainBtn.addEventListener("click", () =>{
            round = 0;
            humanScore = 0;
            computerScore = 0;
            tie = 0;
            rock.disabled = false;
            paper.disabled = false;
            scissors.disabled = false;
            resultDiv.innerHTML = "";

        })
    }
}

//Getting the computers choice
function getComputerChoice(){
    const options = ["rock", "paper", "scissors"];
    let choice = options[Math.floor(Math.random() * 3)];
    return choice;
}










 

