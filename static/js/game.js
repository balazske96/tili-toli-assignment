let wrapperDiv = document.querySelector('#wrapper');


let array = [0, 1, 2, 3, 4, 5, 6, 7, 8];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(array);

for (let n = 0; n < 3; n++) {
    wrapperDiv.insertAdjacentHTML('beforeend', `<div class="row" id="row-${n}"></div>`);
    let m = 0;
    for (let i = 0; i <= array.length; i++) {
        let tempRow = document.querySelector(`#row-${n}`);
        tempRow.insertAdjacentHTML('beforeend', `<div class="piece" id="piece-${array[i]}"></div>`);
        m++;
        if (m === 3) {
            m = 0;
            break;
        }


    }
    array.splice(0, 3);
}






