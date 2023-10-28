const pokemonList = document.querySelector('#pokemonList')
const loadMoreButton = document.querySelector('#LoadMoreButton');

maxsRecords = 151
const limit = 10;
let offset = 0;

function loadPokemonItems(offset,limit){

    pokeApi.getPokemons(offset,limit).then((pokemons =[]) => {
        const newHTML = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#00${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
        
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
        
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li> `
        ).join('')
        pokemonList.innerHTML  += newHTML;
    })
}

loadPokemonItems(offset, limit);

loadMoreButton.addEventListener('click', () => {
    offset += limit
    
    const qtdRecordNextPage = offset + limit

    if (qtdRecordNextPage >= maxsRecords){
        const newLimit = maxsRecords - offset
        loadPokemonItems(offset,newLimit);

        loadMoreButton.parentElement.removeChild(loadMoreButton);
    }else{
        loadPokemonItems(offset,limit)   
    }
})
