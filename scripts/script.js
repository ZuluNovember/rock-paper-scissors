const startButton = document.querySelector("#start-game");
startButton.addEventListener('click', game);

let playerScore;
let computerScore;


function game(){

    initiateGame();
    
    const buttons = document.querySelectorAll('.game-button');
    buttons.forEach(x => x.addEventListener('click', playRound))

}


function initiateGame(){

    playerScore = 0;
    computerScore = 0;

    document.querySelector(".gamelog").textContent = "Choose one";
    score.style = 'letter-spacing:20px;';
    score.textContent = `${playerScore} - ${computerScore}`;
    startButton.textContent = "Restart Game";

}


function computerPlay(){

    let computerMoves = ["rock","paper","scissors"];  
    return computerMoves[Math.floor(Math.random()*3)];

}


function playRound(x){

    let buttonContainers = document.querySelectorAll('.button');
    buttonContainers.forEach(x => x.classList.remove('playerSelected'));
    
    let computerSelection = computerPlay();
    let computerSelectedElement =document.querySelector(`#${computerSelection}`);
    computerSelectedElement.parentElement.classList.add('computerSelected')

    let playerSelection = x.target.id;
    let selectedElement = document.querySelector(`#${playerSelection}`);
    selectedElement.parentElement.classList.add('playerSelected');

    imageChanger(playerSelection, computerSelection);

    let result = declareResult(computerSelection, playerSelection);
    
    if(result == 'win'){
        playerScore+=1;
        score.textContent = `${playerScore} - ${computerScore}`;
        document.querySelector(".gamelog").textContent = "You won the round!";
    
    }else if(result == 'lose'){
        computerScore+=1;
        score.textContent = `${playerScore} - ${computerScore}`;
        document.querySelector(".gamelog").textContent = "Computer won the round!";
        
    }else if(result=='tie'){
        document.querySelector(".gamelog").textContent = "It's a tie.";

    }

    announceWinner();
    
    }
        

function declareResult(computerSelection,playerSelection){

    switch (playerSelection){
        
        case "rock":
            if (computerSelection === "rock"){
                return "tie";
            }else if(computerSelection === "paper"){
                return "lose";
            }else{
                return "win";
            }
            break;
            
        case "paper":
            if (computerSelection === "paper"){
                return "tie";
            }else if(computerSelection === "scissors"){
                return "lose";
            }else{
                return "win";
            }
            break;
            
        case "scissors":
            if (computerSelection === "scissors"){
                return "tie";
            }else if(computerSelection === "rock"){
                return "lose";
            }else{
                return "win";
            }
            break;          
    }
}

function imageChanger(playerChoice, computerChoice){

    let playerImage = document.getElementById('player-choice');
    let computerImage = document.getElementById('computer-choice');
    playerImage.src = `images/${playerChoice}.svg`;
    computerImage.src = `images/${computerChoice}.svg`;

}

function announceWinner(){
    
    if(playerScore===5){
        document.querySelectorAll('.game-button').forEach(x => x.removeEventListener('click',playRound));
        document.querySelector(".gamelog").textContent = "Congratulations. You won the game. Click 'Restart Game' button to play again.";
    }

    if(computerScore===5){
        document.querySelectorAll('.game-button').forEach(x => x.removeEventListener('click',playRound));
        document.querySelector(".gamelog").textContent = "Game over. Computer won the game. Click 'Restart Game' button to play again.";

    }
}
