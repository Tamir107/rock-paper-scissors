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
        console.log('Its a draw! try again');
        return playRound(getPlayerChoice(), getComputerChoice());
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

function game(){
    let userScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
        let roundResult = playRound(getPlayerChoice(), getComputerChoice());
        if(roundResult.search('Lose') === -1){
            userScore++;

        }
        else{
            computerScore++;
        }
        console.log(roundResult);
        console.log(`User Score: ${userScore}  Computer Score: ${computerScore}`);
    }
    if(userScore > computerScore){
        console.log('You Won!')
    }else{
        console.log('You Lost! :(')
    }
}

game();