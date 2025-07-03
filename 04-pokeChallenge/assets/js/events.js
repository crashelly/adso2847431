let generationSelectObj = document.getElementById('generationsSelect');
let searchPokemonForm = document.getElementById('searchPokemonForm');
generationSelectObj.addEventListener('change',()=>{
    let valorSelect = generationSelectObj.options[generationSelectObj.selectedIndex].value;
    console.log(valorSelect);

    user.renderPokemonCardsByGeneration(valorSelect);
})
searchPokemonForm.addEventListener('submit',(e)=>{
    // aca se previene que se ejnvie el formulñario
    e.preventDefault();
    let pokemonName = document.getElementById('searchPokemonInput').value;
    user.searchPokemon(pokemonName);

    // user.renderPokemonCardsByGeneration(valorSelect);
})