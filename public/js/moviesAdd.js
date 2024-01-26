Window.addEventListenet(load, function () {
   let tituloH1 = Document.querySelector('h1');
   let capSection = Document.querySelector('section');
   let capArticle = Document.querySelector('article');

   tituloH1.innerText = 'AGREGAR PELÍCULAS';
   tituloH1.classList.add('titulo');

   capArticle.classList.add('fondoTransparente');

   capSection.classList.add('fondoCRUD');


});