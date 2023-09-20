const pokemonCards = document.querySelectorAll('.pokemons');
const modal = document.getElementById('pokemonModal');
const modalContent = modal.querySelector('.modal-content');

function getPokemonMoreDetails(pokemonId) {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
  return fetch(url)
    .then((response) => response.json())
    .then((pokeApi.convertPokeApiDetailToPokemon));
}


pokemonCards.forEach(async (card) => {
    card.addEventListener('click', async (event) => {
        try {
            const pokemonId = event.target.closest('.pokemon').getAttribute('id');
            const pokemonDetails = await getPokemonMoreDetails(pokemonId);

            modalContent.innerHTML = `
                <h2>${pokemonDetails.name}</h2>
                <img src="${pokemonDetails.photo}" alt="${pokemonDetails.name}" />
                <p>Type: ${pokemonDetails.type}</p>
            `;

            modal.style.display = 'block';
        } catch (error) {
            console.log(error);
        }
    });
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
