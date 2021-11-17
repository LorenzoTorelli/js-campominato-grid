
let container = document.getElementById("container-grid");
let play = document.getElementById('play');
let bombe = [];

// svuota la griglia
function svuotaGriglia() {
    container.innerHTML = "";
}

// aggiunge quadradi al div 
function addSquare() {
    let elem = document.createElement('div');
    elem.className = 'square';
    return elem;
}


// creazione griglia 
function Gioca(livello, bombe) {
    let game = true;
    for (let i = 0; i< livello; i++) {
        const divElem = addSquare();
        divElem.classList.add('square-' + livello);
        divElem.innerHTML= i+1;
        container.appendChild(divElem);
        changeColor(divElem, bombe, game);
        console.log(game);
        if (game == false) {
            break;
        }
    }
}

// crea array con caselle con bombe
function creaBombe(livello) {
    let bombe = [];
    for (let i = 0; i<Math.sqrt(livello); i++) {
        let a = Math.floor(Math.random() * (livello - 1) + 1);
        bombe.push(a);
    }
    return bombe;
}

// cambia colore al click 
function changeColor(divElem, bombe, game) {
    divElem.addEventListener("click", function () {
        if (bombe.includes(parseInt(divElem.textContent))) {
            divElem.classList.add("click-false");
            game = false;
            
        }
        else{
            divElem.classList.add("click-true");
        }
    });
}



play.addEventListener("click", function() {
    let select = document.getElementById('livello');
    let livello = select.options[select.selectedIndex].value;
    let bombe = creaBombe(livello) 
    console.log(bombe);
    svuotaGriglia();
    Gioca(livello, bombe);
})