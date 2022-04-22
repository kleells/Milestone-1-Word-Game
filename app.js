var wordGuess = 6;
var wordLength = 5;

var currentRow = 0;
var currentTile = 0;

var gameOver = false;

var solution

// random word API
// in terminal enter "npm run start:backend"
function getWord() {
    fetch('http://localhost:4000/word')
        .then(response => response.json())
        .then(json => {
            console.log(json)
            solution = json.toUpperCase()
        })
        .catch(err => console.log(err))
}
getWord()

// load tiles board
window.onload = function(){
    gameTiles();
}

// for loop to create board and assign class name to each square
function gameTiles() {

    for (let r = 0; r < wordGuess; r++) {
        for (let c = 0; c < wordLength; c++) {
            let letterTile = document.createElement("div");
            letterTile.id = r.toString() + "-" + c.toString();
            letterTile.classList.add("letterTile");
            letterTile.innerText = "";
            document.getElementById("gameBoard").appendChild(letterTile);
        }
    }
}

// add function to color tiles that have been used

// Event listener for mouse clicks(this shows up in the console)
function keyHandle(key) {
    var keyLetter = key.getAttribute("data-key");
    console.log(key.innerHTML);
}

// Event listener for key strokes ATTEMPT 1 (all keys and delete work but enter does not)
document.addEventListener("keyup", function(KeyBoardEvent) {
    inputLetter(KeyBoardEvent);
    
})

function keyStroke() {
    KeyBoardEvent = {"code" : this.id};
    inputLetter(e)
}

// // Adding selected letters to gameBoard
function inputLetter (KeyBoardEvent) {
    if (gameOver) return;
    
    if ("KeyA" <= KeyBoardEvent.code && KeyBoardEvent.code <= "KeyZ") {
        if (currentTile < wordLength) {
            let playedTile = document.getElementById(currentRow.toString() + '-' + currentTile.toString());
            if (playedTile.innerText == "") {
                playedTile.innerText = KeyBoardEvent.code[3];
                currentTile += 1;
            }
        }
    } else if (KeyBoardEvent.code == "Backspace") {
        if (0 < currentTile && currentTile <= wordLength) {
            currentTile -=1;
        }
        let playedTile = document.getElementById(currentRow.toString() + '-' + currentTile.toString());
        playedTile.innerText = "";

    } else if (KeyBoardEvent.code == "Enter") {
        checkGuess();
        currentRow += 1;
        currentTile = 0;
    }

    if (!gameOver && currentRow == wordGuess) {
        gameOver = true;
        document.getElementById("revealWord").innerText = solution;
    }
}

// add functions that give hints to how many times letter is used
function checkGuess() {
    let correctSpot = 0;

    for (let c = 0; c < wordLength; c++) {        
     let playedTile = document.getElementById(currentRow.toString() + '-' + c.toString());
    //  console.log(playedTile)
        let letter = playedTile.innerText;

        if (solution[c] == letter) {
            playedTile.classList.add("correctSpot")
            correctSpot += 1;

        } else if (solution.includes(letter)) {
            playedTile.classList.add("inWord")

        } else {
           playedTile.classList.add("notUsed");
        }

        if (correctSpot == wordLength) {
            gameOver = true;
        }
    }
}
