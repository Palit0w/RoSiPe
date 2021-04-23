function computerPlay() {
    let hand = ['rock', 'scissors', 'papper'];
    return hand[Math.floor(Math.random() * hand.length)];
}

/* 
    If computerPlay and player play are the same --> Tie!
    If not, check if cpu wins, if not player wins
*/

function cpuWin(cpu, player) {
    return (cpu == 'rock' && player == 'scissors' ||
        cpu == 'scissors' && player == 'papper' ||
        cpu == 'papper' && player == 'rock'
    );
}

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

function selectionIsOk(playerSelection) {
    return (playerSelection == 'rock' || playerSelection == 'scissors' || playerSelection == 'papper')
}

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
