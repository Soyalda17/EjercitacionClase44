Window.addEventListenet(load, function () {
    let newBody = Document.querySelector('body');
    let newH1 = Document.querySelector('h1');

    let modoOscuro = prompt('¿Desea modo oscuro?');
    if (modoOscuro){
        Document.body.styles.backgroundColor = '#7f7f7f';
        Documentbody.classList.add('fondoMoviesList');
    }
    
    let tituloPrincipal = Document.querySelector('h1');
    tituloPrincipal.innerText = 'LISTADO DE PELICULAS';

    tituloPrincipal.style.color = 'white';
    tituloPrincipal.style.backgroundColor = 'teal';
    tituloPrincipal.style.padding = '20px';
});