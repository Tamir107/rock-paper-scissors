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
        playRound(getPlayerChoice(), getComputerChoice());
    }else if(playerSelection === 'rock'){
        if(computerSelection === 'paper'){
            console.log("You Lose! Paper beats Rock");
        }else{
            console.log("You Win! Rock beats Scissors");
        }
    }else if(playerSelection === 'paper'){
        if(computerSelection === 'rock'){
            console.log("You Win! Paper beats Rock");
        }else{
            console.log("You Lose! Scissors beats Paper");
        }
    }else if(playerSelection === 'scissors'){
        if(computerSelection === 'rock'){
            console.log("You Lose! Rock beats Scissors");
        }else{
            console.log("You Win! Scissors beats Paper");
        }
    }
}

playRound(getPlayerChoice(),getComputerChoice());
