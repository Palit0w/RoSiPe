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

function gameOver(playerScore, cpuScore) {
    if (playerScore > cpuScore) {
        alert(`You Win! Press F5 to play again!`)
    }
    else{ 
        alert(`You Lost! Press F5 to play again!`)
    }
}

/* Plays one round of the game and print the result */

function playRound(e) {
    const cpu = computerPlay();
    const player = e.currentTarget.id;
    const msg = document.querySelector('.msg');
    const playerScore = document.getElementById('player-score');
    const cpuScore = document.getElementById('cpu-score');

    if (playerScore.innerText == 5 || cpuScore.innerText == 5) {
        gameOver(playerScore.innerText, cpuScore.innerText);
        return;
    }

    if (cpu === player) {

        msg.textContent = 'Tie!'
    }
    else if (cpuWin(cpu, player)) {
        
        cpuScore.innerText = +cpuScore.innerText +1; 
        msg.textContent = `You Lose! ${cpu[0].toUpperCase()}${cpu.slice(1)} beats ${player[0].toUpperCase()}${player.slice(1)}`;
    }
    else {
        
        playerScore.innerText = +playerScore.innerText + 1;
        msg.textContent = `You Win! ${player[0].toUpperCase()}${player.slice(1)} beats ${cpu[0].toUpperCase()}${cpu.slice(1)}`;
    }
}


/*  Check if the player input is a valid option */


const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => btn.addEventListener('click', playRound));