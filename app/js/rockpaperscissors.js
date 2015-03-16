////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    if (playerMove === computerMove) {
        return "tie";
    } else if (playerMove === "rock") {
        if (computerMove === "scissors") {
            return "player";
        } else if (computerMove === "paper") {
            return "computer";
        }
    } else if (playerMove === "scissors") {
        if (computerMove === "rock") {
            return "computer";
        } else if (computerMove === "paper") {
            return "player";
        }
    } else if (playerMove === "paper") {
        if (computerMove === "rock") {
            return "player";
        } else if (computerMove === "scissors") {
            return "computer";
        }
}

}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var playerMove;
    var computerMove;
    var roundWinner;
    while (playerWins <5 && computerWins <5) {
        playerMove = getPlayerMove();
        computerMove = getComputerMove(null);
        roundWinner = getWinner(playerMove, computerMove);
        if (roundWinner === "player") {
                playerWins +=1;
        } else if (roundWinner === "computer") {
                computerWins +=1;
        }
            console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
            console.log("The score is currently " + playerWins + " to " + computerWins + "\n");

        
    }

    return [playerWins, computerWins];
}

