let main = document.querySelector('main');
let lista = ['A', 'B', 'C'];

function teste() {
    for(elemento in lista) {
        let div = document.createElement('div');
        div.innerHTML = lista[elemento];

        main.appendChild(div);
    }
}