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

// Event listener for key strokes
document.addEventListener("keyup", (e) => {
    if (gameOver) return;

    alert(e.code);
})
// Adding selected letters to gameBoard
 



