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

// Event listener for key clicks

// this eventlistener works in this code but does not specify the letter of the key
// document.addEventListener('click', (e) => {
//     // console.log('clicked')  <-- this console.log is just a test that worked  
// })


// this code does not do anything in console
// const keyHandle = document.querySelectorAll(".key-row button");

// for (let i = 0; i < keyHandle.length; i++) {
//     keyHandle[i].onclick = ({target}) => {
//         const keyLetter = target.getAttribute("data-key");

//         console.log(keyLetter)
//     }
// }

function keyHandle(key) {
    var keyLetter = key.getAttribute("data-key");
    console.log(key.innerHTML);
  }

let gameOver = false;