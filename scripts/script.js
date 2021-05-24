const startButton = document.querySelector("#start-game");
startButton.addEventListener('click', game);

let playerScore = 0;
let computerScore= 0;

function game(){

    initiateGame();               
}

function initiateGame(){

    document.querySelector(".gamelog").textContent = "Choose one";
    score.style = 'letter-spacing:20px;';
    score.textContent = `${playerScore} - ${computerScore}`;
    startButton.textContent = "Restart Game";

    const buttons = document.querySelectorAll('.game-button');
    buttons.forEach(x => x.addEventListener('click', e => playRound(e)))

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

    }
        

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