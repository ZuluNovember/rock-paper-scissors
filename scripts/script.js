let computerMoves = ["rock","paper","scissors"];

function computerPlay(){
    
    return computerMoves[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection){

    let lowerCasePlayerSelection = playerSelection.toLowerCase();
    let lowerCaseComputerSelection = computerSelection.toLowerCase();
    
    switch (lowerCasePlayerSelection){

        case "rock":
            if (lowerCaseComputerSelection === "rock"){
                return "tie";
            }else if(lowerCaseComputerSelection === "paper"){
                return "lose";
            }else{
                return "win";
            }
            break;
        
        case "paper":
            if (lowerCaseComputerSelection === "paper"){
                return "tie";
            }else if(lowerCaseComputerSelection === "scissors"){
                return "lose";
            }else{
                return "win";
            }
            break;
        
        case "scissors":
            if (lowerCaseComputerSelection === "scissors"){
                return "tie";
            }else if(lowerCaseComputerSelection === "rock"){
                return "lose";
            }else{
                return "win";
            }
            break;          
    }
}


function game(){

    let playerScore = 0;
    let computerScore = 0;
    
    for(let i = 0; i<5; i++){
        const playerSelection = prompt("Rock,paper,scissors...") ;
        const computerSelection = computerPlay();

        let result = playRound(playerSelection, computerSelection);

        if(result ==="win"){
            playerScore++;
            console.log(`Computer's choice is ${computerSelection}. Congratz! Player:${playerScore} Computer:${computerScore}`)

        }else if(result === "lose"){
            computerScore++;
            console.log(`Computer's choice is ${computerSelection}. Computer won this round. Player:${playerScore} Computer:${computerScore}`)

        }else if(result == undefined){
            console.log("Wrong input try again!")
            
        }else{
            console.log(`Computer's choice is ${computerSelection}. It's a tie! Try again.`)
        }
    }

    console.log(`Result is Player:${playerScore} Computer:${computerScore} Winner is ${playerScore > computerScore? "Player": computerScore > playerScore ? "Computer":"No winner. It's a tie!"}`)
}