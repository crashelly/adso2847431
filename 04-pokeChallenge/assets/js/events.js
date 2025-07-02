let generationSelectObj = document.getElementById('generationsSelect');

generationSelectObj.addEventListener('change',()=>{
    let valorSelect = generationSelectObj.options[generationSelectObj.selectedIndex].value;
    console.log(valorSelect);

    user.renderPokemonCardsByGeneration(valorSelect);
})