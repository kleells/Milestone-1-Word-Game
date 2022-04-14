let wordGuess = 6;
let wordLength = 5;

let currentRow = 0;
let currentTile = 0;

let gameOver = false;

window.onload = function(){
 gameTiles();
}

function gameTiles() {

    for (let r = 0; r < wordGuess; r++) {
        for (let c = 0; c < wordLength; c++) {
            let letterTile = document.createElement("span");
            letterTile.id = r.toString() + "-" + c.toString();
            letterTile.classList.add("letterTile");
            letterTile.innerText = "";
            document.getElementById("gameBoard").appendChild(letterTile);
        }
    }
}