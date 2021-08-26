"use strict";
let userChoice = "";
let computerChoice = "";
let winner = "";
window.addEventListener("DOMContentLoaded", start);

function start(){
    console.log("start");
    getPlayerChoice();
}

// Detect the user's choice
function getPlayerChoice(){
    console.log("getPlayerChoice");

    // Make buttons clickable
    const rockBtn = document.querySelector("button.rock");
    rockBtn.addEventListener("click", handleClick);

    const paperBtn = document.querySelector("button.paper");
    paperBtn.addEventListener("click", handleClick);

    const scissorsBtn = document.querySelector("button.scissors");
    scissorsBtn.addEventListener("click", handleClick);

}

// Save user's choice on click
const handleClick = (e) => {
    userChoice = e.target.id; // save id of choice
    makeRandomComputerChoice();
}

// Generate a random choice for the computer
function makeRandomComputerChoice(){
    console.log("makeRandomComputerChoice");

    var elements = ['rock', 'paper', 'scissors'];    
    const random = Math.floor(Math.random() * elements.length); // random number
    computerChoice = elements[random]; // save choice

    showAnimations();
}

function showAnimations(){
    console.log("showAnimations");

    document.getElementById('player1').style.animation = "shake 1.8s ease-in 1 forwards";  // shake animation

    // Show choices
    setTimeout(function() {
    document.getElementById('player1').style.background = 'url(' + 'hand_' + userChoice + '.png' + ')';
    document.getElementById('player2').style.background = 'url(' + 'hand_' + computerChoice + '.png' + ')';
    determinWinner();
    }, 2000);

}

// Determine the winner of the round
function determinWinner(){
    console.log("determineWinner");
    
    if (userChoice != computerChoice) {
        if (userChoice === "rock") {
            if (computerChoice === "paper") {
                winner = "computer"
            }else {
                winner = "user";
            }
        }else if (userChoice === "paper") {
            if (computerChoice === "scissors") {
                winner = "computer"
            }else {
                winner = "user";
            }
        }else {
            if (computerChoice === "rock") {
                winner = "computer"
            }else {
                winner = "user";
            }
        }
    }else {
        winner = "draw";
    }

    // Show results
    if (winner === "computer") {
        showLose();
    }else if (winner === "user") {
        showWin();
    }else {
        showDraw();
    }

    // Reset players
    setTimeout(function() {
        document.getElementById('player1').style.background = 'url(' + 'hand_rock.png' + ')';
        document.getElementById('player2').style.background = 'url(' + 'hand_rock.png' + ')';
    }, 2000);

}

// Show User wins message
function showWin() {
    console.log("showWin");
    document.getElementById("win").style.display = 'block';
    setTimeout(function() {
      document.getElementById("win").style.display = 'none';
    }, 2000);
}

// Show user loses message
function showLose() {
    console.log("showLose");
    document.getElementById("lose").style.display = 'block';
    setTimeout(function() {
      document.getElementById("lose").style.display = 'none';
    }, 2000);
}

// Show draw message
function showDraw() {
    console.log("showDraw");
    document.getElementById("draw").style.display = 'block';
    setTimeout(function() {
      document.getElementById("draw").style.display = 'none';
    }, 2000);
}
