window.addEventListener('load', function() {
let newMain = document.querySelector('main');
let newh2 = document.querySelector('h2');
let newA = document.querySelector('a');
let newP = document.querySelector('p');
let subtitulo = document.querySelector('.subtitulo');
let parrafos = document.querySelectorAll('p');
let elMain = document.querySelector('main');


let nombreUsuario = prompt('Ingrese su nombre:');
if (nombreUsuario && nombreUsuario.trim() !== '') {
    subtitulo.innerHTML = `Bienvenido, ${nombreUsuario}!`;    
} else {
    subtitulo.innerHTML = 'Bienvenido, Invitado!';
};

subtitulo.style.textTransform = 'uppercase';
newA.style.color = '#E51B3E';

let fondo = confirm('¿Desea colocar un fondo de pantalla?');
if (fondo) {
    document.body.classList.add('fondo');
}

parrafos.forEach(function(parrafo, index){
    if (index % 2 === 0) {
        parrafo.classList.add('destacadoPar');
    } else {
        parrafo.classList.add('destacadoImpar');
    }
});

elMain.style.display = 'block';
});

console.log('newMain');
console.log('newh2');
console.log('newA');
console.log('newP');