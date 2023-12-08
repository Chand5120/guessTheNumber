"use strict";

let highScore = 0;
let scoreValue = 20;


function generateSecretNumber() {
    return Math.ceil(Math.random() * 20) + 1;
}
let secretNumber = generateSecretNumber();
console.log(secretNumber);

// to display message
function displayMessage(message1) {
    document.querySelector(".message").textContent = message1;
}

function displayScore(scoreValue) {
    document.querySelector(".score").textContent = scoreValue;
}

function guessbox(guess) {
    document.querySelector(".guess").value = guess;
}

function setHighScore(highscore, scoreValue) {
    if(highScore < scoreValue) {
        highScore = scoreValue;
        document.querySelector(".highscore").textContent = highScore;
    }
}


document.querySelector(".check").addEventListener("click", function() {
    let guessNumber = Number(document.querySelector(".guess").value);

    if(!guessNumber) {
        displayMessage("Enter a number");
        scoreValue--;
        displayScore(scoreValue);
    }
    else if(guessNumber !== secretNumber) {
        if(scoreValue > 1) {
            displayMessage((guessNumber > secretNumber) ? "Too high" : "Too low");
        scoreValue--;
        displayScore(scoreValue);
        }
        else {
            displayMessage("Your lost the game!");
            guessbox(0);
        }
    }
    else {
        displayMessage("Correct Number");
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector(".number").style.width = "30rem";
        document.querySelector("body").style.backgroundColor = "#60b347";

        setHighScore(highScore, scoreValue);
    }
})

document.querySelector(".again").addEventListener("click", function() {
    generateSecretNumber();
    scoreValue = 20;
    displayScore(scoreValue);
    displayMessage("Enter a number");
    guessbox("");
    document.querySelector(".number").textContent = "?";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector("body").style.backgroundColor = "#222";
});
