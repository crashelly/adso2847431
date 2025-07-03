class User {

    constructor() {
        this.pokemonLimiter = 10;
    }


    searchAllStatsForPokemon = (pokeID) =>{
        Page.API.getPokemon(pokeID)
            .then((data) => {
                console.log(data);
                Page.renderStatsOfPokemon(data);
            });
    }
/**
 * busca un pokemon 
 */
    searchPokemon = (pokemonName) => {
        Page.API.getPokemon(pokemonName)
            .then((data) => {
                // si trajo datos los trajo en un objeto

                // renderiza los pokemones
                Page.renderOnePokemonCard(data);


            }).catch(() => {
                
                // si no trajo datos
                // Page.renderNotFoundPokemon();
                console.error("no encontre al pokemon");
                Page.pokemonNotFound();

            })
    }
    /**
     * sirve para sacar las generaciones automaticamente
     */
    renderGenerations = () => {
        Page.API.getGenerations()
            .then((generations) => {

                let generationsSelect = document.getElementById('generationsSelect');
                let generationCounter = 1;
                generations.results.forEach(generation => {
                    console.log(generation);
                    generationsSelect.innerHTML += `<option value="${generationCounter}">${generation.name}</option>`;
                    generationCounter++;
                });
            });
    }
    /**
     * muestra las generaciones de pokemon
     * @param {*} generation 
     */
    renderPokemonCardsByGeneration(generation) {

        // limpiamos el contenedor de todos los pokemons
        document.getElementById('pokemonsCardContainer').innerHTML = '';

        // oculto esa imagenes del inicio
        Page.hideWelcomeImages();
        Page.API.getGeneration(generation)
            .then((generation) => {
                let counter = 1;
                // por cada pokemonque encuentra busca al pokemon de esa especie
                generation.pokemon_species.forEach((pokemon) => {
                    console.log("subiendo contador" + counter);
                    if (counter < this.pokemonLimiter) {
                        // busca al pokemon
                        Page.API.getPokemon(pokemon.name)
                            .then((pokemon) => {
                                // inyecto generation de ese pokemon
                                pokemon.generation = generation.name;
                                console.log(pokemon);

                                // subo el contador 

                                Page.renderPokemonCars(pokemon);
                            });
                        counter++;
                    } else {
                        console.error('limite alcanzado');
                    }

                });
            });




    }

    showPokemonForm = (formUrl) => {
        Page.API.getDataFromApi(formUrl)
            .then((form) => {
                document.getElementById('formName_modal').textContent = form.pokemon.name;
                document.getElementById('frontDescription_modal').textContent = form.name;
                document.getElementById('behindDescription_modal').textContent = form.name;
                // imagenes
                document.getElementById('frontFormImage').src = form.sprites.front_default;
                document.getElementById('backFormImage').src = form.sprites.back_default;

                // muestra el modal despuesd de cuadrar todo
                pokemonFormModal.showModal();
            });
    }
    // test() {
    //     // aca renderiza genracion
    //     Page.API.getGeneration('1')
    //         .then((generation) => {
    //             // por cada pokemonque encuentra busca al pokemon de esa especie
    //             generation.pokemon_species.forEach((pokemon) => {
    //                 // busca al pokemon
    //                 Page.API.getPokemon(pokemon.name)
    //                     .then((pokemon) => {
    //                         // inyecto generation de ese pokemon
    //                         pokemon.generation = generation.name;
    //                         console.log(pokemon);


    //                         Page.renderPokemonCars(pokemon);
    //                     });
    //             });
    //         });
    // }
}