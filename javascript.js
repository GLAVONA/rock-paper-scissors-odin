const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

const resultDiv = document.querySelector(".result");

let playerScore = 0;
let compScore = 0;
let roundCount = 0;
let newGame = false;


rockButton.addEventListener("click", function (){
    playRound("rock",getComputerChoice())
});
paperButton.addEventListener("click",function (){
    playRound("paper",getComputerChoice())
});
scissorsButton.addEventListener("click", function (){
    playRound("scissors",getComputerChoice())
});

let playerScoreP = document.querySelector(".score .player-score");
let computerScoreP = document.querySelector(".score .computer-score");

function updateScore(updatePlayer, updateComp){
    playerScoreP.innerText = `Player: ${updatePlayer}`;
    computerScoreP.innerText = `Computer: ${updateComp}`;
}

function resetScore(){
    playerScore = 0;
    compScore = 0;
}

function getComputerChoice(){
    let rand = Math.floor(Math.random()*(3-1+1)+1);

    switch (rand){
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection){
    if (newGame){
        resultDiv.replaceChildren();
    }
    newGame=false;

    let player = String(playerSelection).toLowerCase();
    let comp = String(computerSelection).toLowerCase();
    const resultP = document.createElement('p');
    resultDiv.appendChild(resultP);

    if (player==="rock"){
        if (comp==="rock") {            
             resultP.innerText = "It's a draw!";
        }
        if (comp==="paper") {
             resultP.innerText= "You lose! Paper covers rock!";
        }
        if (comp==="scissors"){
             resultP.innerText="You win! Rock breaks scissors!";
        }
    }

    else if (player==="paper"){
        if (comp==="rock") {
             resultP.innerText="You win! Paper covers rock!";
             "You win! Paper covers rock!";
        }
        if (comp==="paper") {
             resultP.innerText="It's a draw!";
        }
        if (comp==="scissors"){
             resultP.innerText="You lose! Scissors cut paper!";
        }
    }

    else if (player==="scissors"){
        if (comp==="rock") {
             resultP.innerText="You lose! Rock breaks scissors!";
        }
        if (comp==="paper") {
             resultP.innerText="You win! Scissors cut paper!";
        }
        if (comp==="scissors"){
             resultP.innerText="It's a draw!";
            
        }
    }
    else{
        alert("Please choose between Rock/Paper/Scissors");
    }
    if (resultDiv.lastChild.innerText.includes("win")){
        playerScore++;
    }
    else if (resultDiv.lastChild.innerText.includes("lose")){
        compScore++;
    }
    updateScore(playerScore,compScore);
    roundCount++;
    if (roundCount==5){
        const endResult = document.createElement('p');
        resultDiv.appendChild(endResult);
        if (playerScore>compScore){
            endResult.innerText="Game over! You won!";
        }
        else if (playerScore<compScore){
            endResult.innerText="Game over! You lost!";
        }
        else {
            endResult.innerText= "The game finished in a draw!";
        }
        roundCount=0;
        newGame=true;
        resetScore();
    } 

}
