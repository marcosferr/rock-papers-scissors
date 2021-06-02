
function computerPlay(){
    switch(Math.floor((Math.random()*3)+1)){
        case 1:
            return "rock"
        case 2:
            return "paper"
        case 3:
            return "scissors"
    }
}
function playerSelection(){
    const playerSelection = prompt();
    return playerSelection.toLowerCase();
}

function playRound(  playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        console.log("It's a tie");
        return 0;
    }
    if(playerSelection === "rock" && computerSelection === "paper"){
        console.log("Computer wins");
        return -1;
    }
    if(playerSelection === "rock" && computerSelection === "scissors"){
        console.log("Player wins");
        return 1;
    }
    if(playerSelection === "paper" && computerSelection === "scissors"){
        console.log("Computer wins");
        return -1;
    }
    if(playerSelection === "paper" && computerSelection === "rock"){
        console.log("Player wins");
        return 1;
    }
    if(playerSelection === "scissors" && computerSelection === "rock"){
        console.log("Computer wins");
        return -1;
    }
    if(playerSelection === "scissors" && computerSelection === "paper"){
        console.log("Player wins");
        return 1;
    }

    

}
function game(){


    let computerPoints = 0;
    let playerPoints = 0;
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
}