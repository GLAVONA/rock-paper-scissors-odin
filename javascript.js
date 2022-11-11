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

    let player = playerSelection.toLowerCase();
    let comp = computerSelection.toLowerCase();

    if (player==="rock"){
        if (comp==="rock") {
            return "It's a draw!";
        }
        if (comp==="paper") {
            return "You lose! Paper covers rock!";
        }
        if (comp==="scissors"){
            return "You win! Rock breaks scissors!";
        }
    }

    if (player==="paper"){
        if (comp==="rock") {
            return "You win! Paper covers rock!";
        }
        if (comp==="paper") {
            return "It's a draw!";
        }
        if (comp==="scissors"){
            return "You lose! Scissors cut paper!";
        }
    }

    if (player==="scissors"){
        if (comp==="rock") {
            return "You lose! Rock breaks scissors!";
        }
        if (comp==="paper") {
            return "You win! Scissors cut paper!";
        }
        if (comp==="scissors"){
            return "It's a draw!";
        }
    }
}

function game(){
    let playerScore = 0;
    let compScore = 0;

    for (let i = 0; i < 5; i++) {
        let result = playRound(prompt("Please make your choice:"),getComputerChoice())
        console.log(result);

        if (result.includes("win")){
            playerScore++;
        }
        else if (result.includes("lose")){
            compScore++;
        }
    }

    if (playerScore>compScore){
        console.log("Game over! You won!");
    }
    else if (playerScore<compScore){
        console.log("Game over! You lost!");
    }
    else {
        console.log("The game finished in a draw!")
    }
}

