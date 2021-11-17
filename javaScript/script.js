
let container = document.getElementById("container-grid");
let play = document.getElementById('play');


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
function creagriglia(livello) {

    for (let i = 0; i< livello; i++) {
        const divElem = addSquare();
        divElem.classList.add('square-' + livello);
        divElem.innerHTML= i+1;
        container.appendChild(divElem);

        // divElem.addEventListener("click", control(divElem));
    }

}
// function control(divElem) {
//     if (divElem.classList.contains('click-true')) {
//         divElem.classList.add()
//     };    

play.addEventListener("click", function() {
    let select = document.getElementById('livello');
    let livello = select.options[select.selectedIndex].value;
    console.log(livello);
    svuotaGriglia();
    creagriglia(livello);
})