const pokemonCards = document.querySelectorAll('.pokemons');
const modal = document.getElementById('pokemonModal');

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

            modal.innerHTML = `
            <div class="pokemon modal-content ${pokemonDetails.type}">
                <span class="number">#${pokemonDetails.number}</span>
                <span class="name">${pokemonDetails.name}</span>
                <div class="detail">
                <img src="${pokemonDetails.photo}" alt="${pokemonDetails.name}" />
                    <span class="types-title">Types:</span>
                    <ol class="types">
                        ${pokemonDetails.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                </div>
            </div>
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
