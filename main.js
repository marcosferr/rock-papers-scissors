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
    setComputerMove(computerSelection)
    setPlayerMove(playerSelection)
    if ((playerSelection === computerSelection)) {
        resultDisplay.innerHTML = "It's a tie";

    }
    if ((playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors")
        || (playerSelection === "scissors" && computerSelection === "rock")) {

        resultDisplay.innerHTML = "Computer wins";
        computerPoints += 1;

    }
    if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        playerSelection === "scissors" && computerSelection === "paper") {

        resultDisplay.innerHTML = "Player wins";
        playerPoints += 1;

    }

    updateDisplay();
}

function updateDisplay() {

    if (playerPoints >= 5) {
        mainDisplay.innerHTML = "Player Wins Game Restarted";
        computerPoints = 0;
        playerPoints = 0;
        computerDisplay.innerHTML = 0;
        playerDisplay.innerHTML = 0;
    }
    if (computerPoints >= 5) {
        mainDisplay.innerHTML = "computer Wins Game Restarted";
        playerPoints = 0;
        computerPoints = 0;
        computerDisplay.innerHTML = 0;
        playerDisplay.innerHTML = 0;
    }

    else {
        computerDisplay.innerHTML = computerPoints;
        playerDisplay.innerHTML = playerPoints;
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
const mainDisplay = document.querySelector("#main-display");
const resultDisplay = document.querySelector("#result-display");
const computerDisplay = document.querySelector("#computer-display");
const playerDisplay = document.querySelector("#player-display");
const selectionPlayer = document.querySelector('#player-selection')
const selectionComputer = document.querySelector('#computer-selection')

// Create rockImg element
const rockImg = document.createElement('img');
rockImg.src = 'img/rock.png';
rockImg.alt = 'Rock';

const paperImg = document.createElement('img');
paperImg.src = 'img/paper.png';
paperImg.alt = 'Paper';

const scissorsImg = document.createElement('img');
scissorsImg.src = 'img/scissors.png';
scissorsImg.alt = 'Scissors';

function setPlayerMove(move) {
    selectionPlayer.innerHTML = ''
    let img = document.createElement('img');
    img.src = `img/${move}.png`
    selectionPlayer.appendChild(img)
}
function setComputerMove(move) {
    selectionComputer.innerHTML = ''
    let img = document.createElement('img');
    img.src = `img/${move}.png`
    selectionComputer.appendChild(img)
}



btnPaper.addEventListener('click', () => { playRound('paper', computerPlay()); });
btnRock.addEventListener('click', () => { playRound('rock', computerPlay()) });
btnScissors.addEventListener('click', () => { playRound('scissors', computerPlay()) });

