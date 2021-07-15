let computerPoints = 0;
let playerPoints = 0;

function computerPlay() {
    switch (Math.floor((Math.random() * 3) + 1)) {
        case 1:
            return "rock"
        case 2:
            return "paper"
        case 3:
            return "scissors"
    }
}


function playRound(playerSelection, computerSelection) {

    if ((playerSelection === computerSelection)) {
        divDisplay.innerHTML = "It's a tie";
    }
    if ((playerSelection === "rock" && computerSelection === "paper")||
    (playerSelection === "paper" && computerSelection === "scissors")
    || (playerSelection === "scissors" && computerSelection === "rock") ) {
        
        divDisplay.innerHTML = "Computer wins";
        computerPoints+=1;
        
    }
    if ((playerSelection === "rock" && computerSelection === "scissors")||
    (playerSelection === "paper" && computerSelection === "rock")||
    playerSelection === "scissors" && computerSelection === "paper") {

        divDisplay.innerHTML = "Player wins";
        playerPoints+=1;
        
    }
    if(playerPoints>=5){
        divDisplay.innerHTML = "Player Wins Game Restarted";
        computerPoints=0;
        playerPoints=0;
    }
    if(computerPoints>=5){
        divDisplay.innerHTML = "computer Wins Game Restarted";
        playerPoints=0;
        computerPoints=0;
    }
    else{
        divDisplay.innerHTML += `Current Score. Computer = ${computerPoints} Player = ${playerPoints}`;
    }
     



}
/*function game(){


   
    let result = 0;
    let winner = " ";
    while(computerPoints<5 || playerPoints<5){
    result = playRound(playerSelection(),computerPlay());
    switch(result){
        case 1:
            playerPoints++;
        case -1:
            computerPoints++;
    }
   } 
    if (computerPoints === 5) winner = "Computer";
    if (playerPoints === 5) winner = "Player";
    console.log("The winner is " + winner);
}*/
const btnPaper = document.querySelector("#paper");
const btnRock = document.querySelector("#rock");
const btnScissors = document.querySelector("#scissors");
const divDisplay = document.querySelector("#display");


btnPaper.addEventListener('click', () => { playRound('paper', computerPlay()) });
btnRock.addEventListener('click', () => { playRound('rock', computerPlay()) });
btnScissors.addEventListener('click', () => { playRound('scissors', computerPlay()) });

