/* Returns a random element from the array, wich will be the cpu selection */

function computerPlay() {
    let hand = ['rock', 'scissors', 'papper'];
    return hand[Math.floor(Math.random() * hand.length)];
}

/* 
    Determines if the cpu won the round
    Takes two arguments:
     -cpu: cpu selection
     -player: player selection
*/

function cpuWin(cpu, player) {
    return (cpu == 'rock' && player == 'scissors' ||
        cpu == 'scissors' && player == 'papper' ||
        cpu == 'papper' && player == 'rock'
    );
}

/* Plays one round of the game and print the result */

function playRound(computerSelection, playerSelection) {
    let cpu = computerSelection;
    let player = playerSelection.toLowerCase();
    if (cpu === player) {
        console.log('Tie!');
        return 1;
    }
    else if (cpuWin(cpu, player)) {
        console.log(`You Lose! ${cpu[0].toUpperCase()}${cpu.slice(1)} beats ${player[0].toUpperCase()}${player.slice(1)}`);

        return 2;
    }
    else {
        console.log(`You Win! ${player[0].toUpperCase()}${player.slice(1)} beats ${cpu[0].toUpperCase()}${cpu.slice(1)}`);
        return 3;
    }
}


/*  Check if the player input is a valid option */

function selectionIsOk(playerSelection) {
    return (playerSelection == 'rock' || playerSelection == 'scissors' || playerSelection == 'papper')
}

/* Play the gamem 5 rounds in total, and display the final result */

function game() {
    let playerScore = 0;
    let cpuScore = 0;
    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();

        let playerSelection = prompt('Rock, Scissors or Papper? Choose your weapon!').toLowerCase();
        while (!selectionIsOk(playerSelection)) {
            playerSelection = prompt(`There is no ${playerSelection} here! Rock, Scissors or Papper? Choose your weapon!`).toLocaleLowerCase();
        }

        let result = playRound(computerSelection, playerSelection);
        switch (result) {
            case 2:
                cpuScore++;
                break;
            case 3:
                playerScore++;
            default:
                break;
        }
    }
    console.log(`The final result is Player: ${playerScore} - Computer ${cpuScore}`);
}
