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

// Event listener for 

let gameOver = false;