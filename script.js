function getComputerChoice(){
    const choice = Math.floor(Math.random() * 3) + 1;
    switch(choice){
        case 1: return 'rock';
        case 2: return 'paper';
        case 3: return 'scissors';
    }
}

function getPlayerChoice(){
    let choice = prompt('What is your choice?');
    choice = choice.toLowerCase();
    while(choice !== 'rock' && choice !== 'paper' && choice !== 'scissors'){
        console.log('Invalid choice, please try again')
        let choice = prompt('What is your choice?');
        choice = choice.toLowerCase();
    }
    return choice;
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === computerSelection){
        // console.log('Its a draw! try again');
        // return playRound(getPlayerChoice(), getComputerChoice());
        return "Its a draw! try again";
    }else if(playerSelection === 'rock'){
        if(computerSelection === 'paper'){
            return "You Lose! Paper beats Rock";
        }else{
            return "You Win! Rock beats Scissors";
        }
    }else if(playerSelection === 'paper'){
        if(computerSelection === 'rock'){
            return "You Win! Paper beats Rock";
        }else{
            return "You Lose! Scissors beats Paper";
        }
    }else if(playerSelection === 'scissors'){
        if(computerSelection === 'rock'){
            return "You Lose! Rock beats Scissors";
        }else{
            return "You Win! Scissors beats Paper";
        }
    }
}

function resetGame(){
    userScore = 0;
    computerScore = 0;
    document.querySelector("#result").textContent = "";
}

function updateScore(str){
    if(str.includes("Win")) 
        userScore++;
    else if(str.includes("Lose"))
        computerScore++;

    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;

    if(userScore === 5){
        alert("You win!");
        resetGame();
    }
    if(computerScore === 5){
        alert("You Lose!");
        resetGame();
    }
}

function game(){
    const rockButton = document.querySelector("#Rock");
    const paperButton = document.querySelector("#Paper");
    const scissorsButton = document.querySelector("#Scissors");
    const resultDiv = document.querySelector("#result");

    rockButton.addEventListener("click", () => {
        resultDiv.textContent = playRound("rock",getComputerChoice());
        updateScore(resultDiv.textContent);
    });

    paperButton.addEventListener("click", () => {
        resultDiv.textContent = playRound("paper",getComputerChoice());
        updateScore(resultDiv.textContent);
    });

    scissorsButton.addEventListener("click", () => {
        resultDiv.textContent = playRound("scissors",getComputerChoice());
        updateScore(resultDiv.textContent);
    });

    // for(let i = 0; i < 5; i++){
    //     let roundResult = playRound(getPlayerChoice(), getComputerChoice());
    //     if(roundResult.search('Lose') === -1){
    //         userScore++;
    //     }
    //     else{
    //         computerScore++;
    //     }
    //     console.log(roundResult);
    //     console.log(`User Score: ${userScore}  Computer Score: ${computerScore}`);
    // }
    // if(userScore > computerScore){
    //     console.log('You Won!')
    // }else{
    //     console.log('You Lost! :(')
    // }
}

let userScore = 0;
let computerScore = 0;
const userScoreDisplay = document.querySelector("#userScore");
const computerScoreDisplay = document.querySelector("#computerScore");
userScoreDisplay.textContent = userScore;
computerScoreDisplay.textContent = computerScore;

game();