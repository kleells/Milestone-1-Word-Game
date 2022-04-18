let wordGuess = 6;
let wordLength = 5;

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

window.onload = function(){
    gameTiles();
}

let currentRow = 0;
let currentTile = 0;
let gameOver = false;


// Event listener for mouse clicks
function keyHandle(key) {
    var keyLetter = key.getAttribute("data-key");
    console.log(key.innerHTML);
  }

// Event listener for key strokes ATTEMPT 1 (all keys and delete work but enter does not)
document.addEventListener("keyup", (e) => {
    inputLetter(e);
    
})

function keyStroke() {
    e = {"code" : this.id};
    inputLetter(e)
}

// // Adding selected letters to gameBoard
function inputLetter (e) {
    if (gameOver) return;
    if ("KeyA" <= e.code && e.code <= "KeyZ") {
        if (currentTile < wordLength) {
            let currTile = document.getElementById(currentRow.toString() + '-' + currentTile.toString());
            if (currTile.innerText == "") {
                currTile.innerText = e.code[3];
                currentTile += 1;
            }
        }
    } else if (e.code == "Backspace") {
        if (0 < currentTile && currentTile <= wordLength) {
            currentTile -=1;
        }
        let currTile = document.getElementById(currentRow.toString() + '-' + currentTile.toString());
        currTile.innerText = "";
    } else if (e.code == "Enter") {
        checkGuess();
        currentRow += 1;
        currentTile =0;
    }

    if (!gameOver && currentRow == wordGuess) {
        gameOver = true;
        document.getElementById("revealWord").innerText = word;
    }
}

// gives a ReferenceError: word is not defined message when enter is used at end of row
// function checkGuess() {
//     let correct = 0;
//     document.getElementById("revealWord").innerText = word;

//     for (let c = 0; c < wordLength; c++) {
//         let currTile = document.getElementById(currentRow.toString() + '-' + currentTile.toString());
//         let letter = currTile.innerText;

//         if (word[c] == letter) {
//             letterTile.classList.add("correctSpot")
//             correctSpot += 1;
//         } else if (word.includes(letter)) {
//             letterTile.classlist.add("present")
//         } else {
//             letterTile.classlist.add ("absent");
//         }

//         if(correctSpot == width) {
//             gameOver = true;
//         }
//     }
// }

// gives same error as above code
function checkGuess() {
    let correct = 0;
    document.getElementById("revealWord").innerText = word;

    for (let c = 0; c < wordLength; c++) {
        let currTile = document.getElementById(currentRow.toString() + '-' + c.toString());
        let letter = currTile.innerText;

        if (word[c] == letter) {
            currTile.classList.add("correctSpot")
            correctSpot += 1;
        } else if (word.includes(letter)) {
            currTile.classlist.add("present")
        } else {
            currTile.classlist.add ("absent");
        }

        if(correctSpot == width) {
            gameOver = true;
        }
    }
}

// document.addEventListener("keyup", (e) => {

//     if (wordGuess === 0) {
//         return
//     }


// })
 



