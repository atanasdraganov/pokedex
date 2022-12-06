import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector('ul');
  const list = document.createDocumentFragment();
  const url = 'https://pokeapi.co/api/v2/pokemon/?limit=10';

  fetch(url)
    .then((response) => {
      response.json();
    })
    .then((data) => {

      let pokemons = data;
      pokemons?.map(function(pokemon){
        let li = document.createElement('li');
        let name = document.createElement('h2');

        name.innerText= `${pokemon.name}`;

        li.appendChild(name);
        list.appendChild(li);
      });
    })
    ul.appendChild(list);
});
