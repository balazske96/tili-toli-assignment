let wrapperDiv = document.querySelector('#wrapper');

let resetButton = document.getElementById('reset');

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8];


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}


shuffleArray(array);

let origiArray = Array.from(array);

for (let n = 0; n < 3; n++) {
    wrapperDiv.insertAdjacentHTML('beforeend', `<div class="row" id="row-${n}"></div>`);
    let m = 0;
    for (let i = 0; i <= array.length; i++) {
        let tempRow = document.querySelector(`#row-${n}`);
        tempRow.insertAdjacentHTML('beforeend', `<div data-col="${m}" data-row="${n}" class="piece-container" ><div class="piece" id="piece-${array[i]}"></div></div>`);
        m++;
        if (m === 3) {
            m = 0;
            break;
        }


    }
    array.splice(0, 3);
}

function changePosition(target) {
    let emptyDiv = document.getElementById('piece-8').parentNode;
    let tempID = target.firstChild.getAttribute("id");
    emptyDiv.innerHTML = `<div class='piece' id="${tempID}"></div>`;
    target.innerHTML = `<div class="piece" id=piece-8></div>`
}


function movePiece() {
    let pieceCol = parseInt(this.dataset.col);
    let pieceRow = parseInt(this.dataset.row);
    let emptyCellRow = parseInt(document.getElementById("piece-8").parentNode.dataset.row);
    let emptyCellCol = parseInt(document.getElementById("piece-8").parentNode.dataset.col);
    if (emptyCellCol === pieceCol && (emptyCellRow === pieceRow - 1 || emptyCellRow === pieceRow + 1)) {
        changePosition(this);
        checkWin();
    } else if (emptyCellRow === pieceRow && (emptyCellCol === pieceCol - 1 || emptyCellCol === pieceCol + 1)) {
        changePosition(this);
        checkWin();
    } else {
    }
}


function resetGame(){
    let nodes = document.getElementsByClassName('piece');
    for (let h = 0; h < origiArray.length; h++){
        nodes[h].setAttribute('id', `piece-${origiArray[h]}`);
    }

}



function checkWin(){

    let nodes = document.getElementsByClassName('piece');
    let currentArray = [];
    let winnerArray = ["piece-0", "piece-1", "piece-2", "piece-3", "piece-4", "piece-5", "piece-6", "piece-7", "piece-8"];
    for (let node of nodes){
        currentArray.push(node.id);
    }
    if (JSON.stringify(currentArray) === JSON.stringify(winnerArray)){

        setTimeout(function(){let newGame = confirm('You Win! Would you like to play again?')}, 10);
        if (newGame === true){
          location.replace('/')
        }




    }




}



let pieces = document.getElementsByClassName('piece-container');


for (let piece of pieces) {

    piece.addEventListener('click', movePiece)

}

resetButton.addEventListener('click', resetGame);


