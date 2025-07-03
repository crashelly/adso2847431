class Page {
    // escopnde las imagenes que sale al principio
    static hideWelcomeImages() {
        document.querySelectorAll('.welcomeImage').forEach(welcomeImage => {
            welcomeImage.style.display = 'none';
        });
    }

    /**
     * muestra informaicon de que un pokemon no fue encontrado
     * @param {*} mesagge 
     */
    static pokemonNotFound(mesagge = null) {

        pokemonNotFoundModal.showModal();
    }

    /**
     * condensa la informaciond e las estadisticas del pokemon
     * 
     * @param {*} data todos los datos del pokemon
     */
    static renderStatsOfPokemon(pokemon) {

        // Nombre del pokemon
        document.getElementById('stats_pokemonName').textContent = pokemon.name;
        // imagen del pokemon
        document.getElementById('stats_pokemonImage').src = pokemon.sprites.other.showdown.front_default;;

        // hp
        document.getElementById('stats_hp').textContent = pokemon.stats[0].base_stat;
        // ataque
        document.getElementById('stats_attack').textContent = pokemon.stats[1].base_stat;
        // defensa
        document.getElementById('stats_defense').textContent = pokemon.stats[2].base_stat;
        // velocidad
        document.getElementById('stats_specialAttack').textContent = pokemon.stats[3].base_stat;
        // altura
        document.getElementById('stats_specialDefense').textContent = pokemon.stats[4].base_stat;
        // peso
        document.getElementById('stats_speed').textContent = pokemon.stats[5].base_stat;

        statsForPokemon.showModal();
    }
    /**
     * funcion principal que permite buscar por temas o contenido
     */

    static API = {
        getDataFromApi: (url) => {
            return new Promise((resolve, reject) => {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        resolve(data);
                    })
                    .catch(error => {
                        reject(error);
                    })
            });
        },
        /**
         * obtener info del pokemon
         * @param {*} es el paramemtro que puede ser un numero el el nombre del pokemoin
         * @returns data
         */
        getPokemon: (param) => {
            return new Promise((resolve, reject) => {
                fetch(`https://pokeapi.co/api/v2/pokemon/${param}`)
                    .then((response) => response.json())
                    .then((data) => {
                        resolve(data);
                    })
                    .catch((error) => {
                        reject(error);
                    })
            });
        },
        getGeneration: (generation) => {
            return new Promise((resolve, reject) => {
                fetch(`https://pokeapi.co/api/v2/generation/${generation}/`)
                    .then((response) => response.json())
                    .then((data) => {
                        resolve(data);
                    })
                    .catch((error) => {
                        reject(error);
                    })
            });
        },

        getGenerations: () => {
            return new Promise((resolve, reject) => {
                fetch(`https://pokeapi.co/api/v2/generation/`)
                    .then((response) => response.json())
                    .then((data) => {
                        resolve(data);
                    })
                    .catch((error) => {
                        reject(error);
                    });
            });
        }

    }


    /**
     * obtiene los datos de la APId e pokemon
     */
    getDataFromAPIinLoop() {
        // https://pokeapi.co/api/v2/ability/{id or name}/
        for (let i = 0; i < 20; i++) {

            fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}?limit=20`)
                .then(response => response.json())
                .then(data => {
                    // this.renderPokemonCars(data.results);
                    console.log(data);
                })
                .catch(error => console.error('Errortrayendo los datos', error));
        }

    }

    // getDataFromAPI() {
    //     fetch(`https://pokeapi.co/api/v2/pokemon/clefairy`)
    //         .then(response => response.json())
    //         .then(data => {
    //             // this.renderPokemonCars(data.results);
    //             console.log(data);

    //         })
    //         .catch(error => console.error('Errortrayendo los datos', error));
    //         this.renderPokemonCars(data);
    // }

    /**
     * renderiza la informacion de los pokemons dentro del panel de renderizado (contenedor de las cartas)
     * @param {*} data informacion sobre los pokemosnes
     */
    // static renderPokemonCars(data) {
    //     let container = document.getElementById('pokemonsCardContainer');
    //     // container.innerHTML = ''; 
    //     let pokemon = data;
    //     container.innerHTML += `
    //     <div class="flex flex-col justify-center items-center w-dvw h-dvh bg-gray-900">
    //         <!-- Card DailyDev -->

    //         <div class="w-[340px] rounded-[42px] bg-white border-8 relative">
    //             <!-- Contenedor Imagen Colocar Imagen -->
    //             <div class="flex flex-col">
    //                 <div class="rounded-[32px] px-5 py-6"
    //                     style="background-image: url('https://merehead.com/blog/wp-content/uploads/boliviainteligente-37WxvlfW3to-unsplash.jpg'); background-size: cover; background-position: center;">
    //                     <img class="relative w-36 h-36 mb-8 bg-black z-20 rounded-[42px]  border-8 border-white -rotate-12" id="pokemonImage" src="${pokemon.sprites.front_default}" />
    //                 </div>
    //                 <!-- Contenedor Time -->
    //                 <div
    //                     class="bg-gray-800 py-2 shadow-2xl rounded-2xl absolute top-44 left-1/2 transform -translate-x-1/2 w-[calc(100%_-_16px)] z-10">
    //                     <div class="text-white text-lg font-bold flex justify-between px-6">
    //                         <div class="flex flex-col gap-0">
    //                             10
    //                             <div class="text-xs text-gray-400 flex gap-1">
    //                                 <div class="bg-[#7147ed] rounded-full aspect-square w-4 h-4">
    //                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="-7.5 -3.5 24 24">
    //                                         <path fill="#1f2937"
    //                                             d="M5.708 4.968h1.789a1.5 1.5 0 0 1 1.378 2.09l-3.96 9.243a1.049 1.049 0 0 1-2.012-.413v-6.92L1.45 8.923A1.5 1.5 0 0 1 0 7.423V1.5A1.5 1.5 0 0 1 1.5 0h2.708a1.5 1.5 0 0 1 1.5 1.5z" />
    //                                     </svg>
    //                                 </div>
    //                                 <p>
    //                                     Reputacion
    //                                 </p>
    //                             </div>
    //                         </div>
    //                         <div class="flex flex-col gap-0">
    //                             33
    //                             <div class="text-xs text-gray-400 flex gap-1">
    //                                 <div class="bg-[#fc538d] rounded-full aspect-square w-4 h-4">
    //                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
    //                                         <path fill="#1f2937"
    //                                             d="M17.66 11.2c-.23-.3-.51-.56-.77-.82c-.67-.6-1.43-1.03-2.07-1.66C13.33 7.26 13 4.85 13.95 3c-.95.23-1.78.75-2.49 1.32c-2.59 2.08-3.61 5.75-2.39 8.9c.04.1.08.2.08.33c0 .22-.15.42-.35.5c-.23.1-.47.04-.66-.12a.6.6 0 0 1-.14-.17c-1.13-1.43-1.31-3.48-.55-5.12C5.78 10 4.87 12.3 5 14.47c.06.5.12 1 .29 1.5c.14.6.41 1.2.71 1.73c1.08 1.73 2.95 2.97 4.96 3.22c2.14.27 4.43-.12 6.07-1.6c1.83-1.66 2.47-4.32 1.53-6.6l-.13-.26c-.21-.46-.77-1.26-.77-1.26m-3.16 6.3c-.28.24-.74.5-1.1.6c-1.12.4-2.24-.16-2.9-.82c1.19-.28 1.9-1.16 2.11-2.05c.17-.8-.15-1.46-.28-2.23c-.12-.74-.1-1.37.17-2.06c.19.38.39.76.63 1.06c.77 1 1.98 1.44 2.24 2.8c.04.14.06.28.06.43c.03.82-.33 1.72-.93 2.27" />
    //                                     </svg>
    //                                 </div>
    //                                 <p class="text-xs text-gray-400">
    //                                     Long streak
    //                                 </p>
    //                             </div>

    //                         </div>
    //                         <div class="flex flex-col gap-0">
    //                             252
    //                             <div class="text-xs text-gray-400 flex gap-1">
    //                                 <div class="rounded-full aspect-square w-4 h-4">
    //                                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
    //                                         <path fill-rule="evenodd"
    //                                             d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4c0-2.2 1.8-4 4-4c2.22 0 4 1.8 4 4c0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2c-1.11 0-2-.89-2-2c0-1.11.89-2 2-2c1.11 0 2 .89 2 2z"
    //                                             fill="#ce3df3" />
    //                                     </svg>
    //                                 </div>
    //                                 <p class="text-xs text-gray-400">
    //                                     Posts read
    //                                 </p>
    //                             </div>

    //                         </div>

    //                     </div>
    //                 </div>
    //             </div>



    //             <div class="mt-8 py-4 border-b mx-6 border-gray-300">
    //                 <h1 class="font-bold text-3xl">
    //                    ${pokemon.name}
    //                 </h1>
    //                 <p class="text-red-500  text-md font-semibold">
    //                     ${pokemon.generation}
    //                     <span class="text-gray-400">

    //                     </span>
    //                 </p>
    //             </div>
    //             <!-- List Tags -->
    //             <ul class="flex flex-wrap gap-2 px-6 py-2 border-b">
    //                 <li class="rounded-lg border border-gray-500 px-2 py-1 text-xs font-bold">
    //                     #tailwind_flex
    //                 </li>
    //                 <li class="rounded-lg border border-gray-500 px-2 py-1 text-xs font-bold">
    //                     #web_dev
    //                 </li>
    //                 <li class="rounded-lg border border-gray-500 px-2 py-1 text-xs font-bold">
    //                     #react
    //                 </li>
    //                 <li class="rounded-lg border border-gray-500 px-2 py-1 text-xs font-bold">
    //                     #dev_tools
    //                 </li>
    //                 <li class="rounded-lg border border-gray-500 px-2 py-1 text-xs font-bold">
    //                     #ai
    //                 </li>
    //             </ul>
    //             <!-- SVG -->

    //             <div class="flex justify-between">
    //                 <div class="w-full px-6 pt-2 flex gap-1 pb-2">
    //                     <div class="w-8 h-8 aspect-square bg-black text-white hover:bg-blue-700   rounded-full flex justify-center items-center">
    //                         1
    //                     </div>
    //                     <div class="w-8 h-8 aspect-square bg-blue-300 rounded-full flex justify-center items-center">
    //                         <svg width="18" height="18" viewBox="0 0 903 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                             <path d="M814.39 736.55L751.05 699.74L750.81 617.11L814.15 653.92L814.39 736.55Z" fill="#00717E"></path>
    //                             <path d="M520.46 997.94L457.12 961.13L456.86 869.58L520.2 906.39L520.46 997.94Z" fill="#00717E"></path>
    //                             <path d="M520.2 906.39L456.86 869.58L751.05 699.74L814.39 736.55L520.2 906.39Z" fill="#00B6CA"></path>
    //                             <path d="M608.06 681.21L544.72 644.4L838.91 474.55L902.25 511.36L608.06 681.21Z" fill="#00B6CA"></path>
    //                             <path d="M519.97 823.77L456.63 786.96L455.87 521.56L519.22 558.37L519.97 823.77Z" fill="#00717E"></path>
    //                             <path d="M519.22 558.37L455.87 521.56L838.41 300.7L901.75 337.51L519.22 558.37Z" fill="#00B6CA"></path>
    //                             <path
    //                                 d="M901.75 337.51L902.01 429.05L607.83 598.9L608.06 681.21L902.25 511.36L903 777.08L520.46 997.94L520.2 906.39L814.39 736.55L814.15 653.92L519.97 823.77L519.22 558.37L901.75 337.51Z"
    //                                 fill="#00A3B6"></path>
    //                             <path d="M75.75 554.2L139.09 517.4L138.34 784.69L75 821.5L75.75 554.2Z" fill="#1D49C5"></path>
    //                             <path d="M1.25 338.65L64.59 301.84L149.22 350.7L85.88 387.51L1.25 338.65Z" fill="#2152DC"></path>
    //                             <path d="M85.88 387.51L149.22 350.7L255.26 668.51L191.92 705.32L85.88 387.51Z" fill="#2459EF"></path>
    //                             <path d="M308.29 688.46L371.63 651.65L254.74 851.89L191.4 888.7L308.29 688.46Z" fill="#1D49C5"></path>
    //                             <path d="M383.77 559.5L447.11 522.69L445.87 962.24L382.53 999.05L383.77 559.5Z" fill="#1D49C5"></path>
    //                             <path d="M299.15 510.64L362.49 473.83L447.11 522.69L383.77 559.5L299.15 510.64Z" fill="#2152DC"></path>
    //                             <path
    //                                 d="M383.77 559.5L382.53 999.05L307.53 955.76L308.29 688.46L191.4 888.7L75.75 554.2L75 821.5L0 778.2L1.25 338.65L85.88 387.51L191.92 705.32L299.15 510.64L383.77 559.5Z"
    //                                 fill="#143389"></path>
    //                             <path d="M832.32 218.54L832.12 291.8L752.97 337.8L753.18 264.54L832.32 218.54Z" fill="#007DC5"></path>
    //                             <path d="M753.18 264.54L752.97 337.8L370.44 116.94L370.65 43.68L753.18 264.54Z" fill="#005789"></path>
    //                             <path d="M449.8 -2.31L832.32 218.54L753.18 264.54L370.65 43.68L449.8 -2.31Z" fill="#008CDC"></path>
    //                             <path d="M387.82 136.05L387.62 209.31L237.03 296.82L237.23 223.56L387.82 136.05Z" fill="#007DC5"></path>
    //                             <path d="M514.52 300.89L514.31 374.15L421.06 320.31L421.27 247.05L514.52 300.89Z" fill="#005789"></path>
    //                             <path d="M452.27 439.4L452.06 512.66L69.54 291.81L69.74 218.55L452.27 439.4Z" fill="#005789"></path>
    //                             <path
    //                                 d="M602.86 351.89L531.42 393.41L452.27 439.4L452.06 512.66L531.21 466.67L602.65 425.15L681.8 379.15L682.01 305.89L602.86 351.89Z"
    //                                 fill="#007DC5"></path>
    //                             <path
    //                                 d="M421.27 247.05L500.41 201.05L682.01 305.89L602.86 351.89L531.42 393.41L452.27 439.4L69.74 218.55L299.48 85.04L387.82 136.05L237.23 223.56L443.08 342.4L514.52 300.89L421.27 247.05Z"
    //                                 fill="#008CDC"></path>
    //                         </svg>
    //                     </div>
    //                     <div class="w-8 h-8 aspect-square bg-orange-300 rounded-full flex justify-center items-center">
    //                         <svg viewBox="0 0 256 257" width="18" height="18" xmlns="http://www.w3.org/2000/svg"
    //                             preserveAspectRatio="xMidYMid">
    //                             <defs>
    //                                 <linearGradient x1="-.828%" y1="7.652%" x2="57.636%" y2="78.411%" id="a">
    //                                     <stop stop-color="#41D1FF" offset="0%" />
    //                                     <stop stop-color="#BD34FE" offset="100%" />
    //                                 </linearGradient>
    //                                 <linearGradient x1="43.376%" y1="2.242%" x2="50.316%" y2="89.03%" id="b">
    //                                     <stop stop-color="#FFEA83" offset="0%" />
    //                                     <stop stop-color="#FFDD35" offset="8.333%" />
    //                                     <stop stop-color="#FFA800" offset="100%" />
    //                                 </linearGradient>
    //                             </defs>
    //                             <path
    //                                 d="M255.153 37.938 134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.537 6.537 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62Z"
    //                                 fill="url(#a)" />
    //                             <path
    //                                 d="M185.432.063 96.44 17.501a3.268 3.268 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028 72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113Z"
    //                                 fill="url(#b)" />
    //                         </svg>
    //                     </div>

    //                 </div>
    //                 <div class="bg-black/90 text-white flex items-center px-2 rounded-tl-3xl rounded-br-3xl">
    //                     <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
    //                         <g fill="#FFF" fill-rule="evenodd">
    //                             <path
    //                                 d="m31.48 19.944-3.533-3.533 1.765-3.531 5.74 5.74a1.873 1.873 0 0 1 0 2.648l-7.065 7.064a1.873 1.873 0 0 1-2.648-2.648l5.74-5.74Z"
    //                                 opacity=".56" />
    //                             <path
    //                                 d="M25.74 11.548a1.873 1.873 0 0 1 2.649 0l1.324 1.325-15.452 15.452a1.873 1.873 0 0 1-2.649 0l-1.324-1.324L25.74 11.548Zm-6.622 4.857-2.65 2.649-3.532-3.533-4.415 4.416 3.532 3.532-1.765 3.532-5.74-5.74a1.873 1.873 0 0 1 0-2.648l7.064-7.064a1.873 1.873 0 0 1 2.65 0l4.856 4.856Z" />
    //                         </g>
    //                     </svg>


    //                 </div>
    //             </div>
    //         </div>

    //     </div>
    //     `;

    // }
    static renderPokemonCars(data) {
        let container = document.getElementById('pokemonsCardContainer');
        document.getElementById('PokemonSearchResultContainer').innerHTML = '';
        // container.innerHTML = ''; 

        let pokemon = data;
        let htmlCode = ''
        htmlCode = `
        
            <!-- Card DailyDev -->

            <div class="w-[340px] mt-3  rounded-[42px] bg-white border-8 relative">
                <!-- Contenedor Imagen Colocar Imagen -->
                <div class="flex flex-col">
                    <div class="rounded-[32px] px-5 py-6"
                        style="background-image: url('https://merehead.com/blog/wp-content/uploads/boliviainteligente-37WxvlfW3to-unsplash.jpg'); background-size: cover; background-position: center;">
                        <img class="relative w-26 h-26 object-fit mb-8 bg-black z-20 rounded-[42px]  border-8 border-white -rotate-12" id="pokemonImage" src="${pokemon.sprites.other.showdown.front_default}" />
                    </div>
                    <!-- Contenedor Time -->
                    <div
                        class="bg-gray-800 py-2 shadow-2xl rounded-2xl absolute top-44 left-1/2 transform -translate-x-1/2 w-[calc(100%_-_16px)] z-10">
                        <div class="text-white text-lg font-bold flex justify-between px-6">
                            <div class="flex flex-col gap-0 ">
                            <span></span>
                            <span class="hover:text-red-500"  >  ${pokemon.stats[0].base_stat}</span>
                               
                                <div class="text-xs text-gray-400 flex gap-1">
                                    <div class="bg-[#7147ed] rounded-full aspect-square w-4 h-4">
                                        <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#2b00ff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M2 9.26044C2 13.0079 6.01943 16.9714 8.96173 19.3707C10.2937 20.4569 10.9597 21 12 21C13.0403 21 13.7063 20.4569 15.0383 19.3707C17.9806 16.9714 22 13.008 22 9.2604C22 3.34931 16.4998 0.662637 12 5.49877C7.50016 0.662637 2 3.3495 2 9.26044Z" fill="#14b9ff"></path> <path d="M10.0932 10.7466C10.1827 10.6187 10.2571 10.5125 10.3233 10.4216C10.3793 10.5191 10.4418 10.6327 10.517 10.7695L12.2273 13.879C12.3933 14.1811 12.5562 14.4774 12.7197 14.6924C12.8947 14.9224 13.2023 15.2377 13.6954 15.2469C14.1884 15.2562 14.5077 14.9527 14.6912 14.7294C14.8627 14.5207 15.0365 14.2308 15.2138 13.9352L15.2692 13.8428C15.49 13.4748 15.629 13.2447 15.752 13.0785C15.8654 12.9254 15.9309 12.8754 15.9798 12.8478C16.0286 12.8201 16.1052 12.7897 16.2948 12.7712C16.5006 12.7512 16.7694 12.7504 17.1986 12.7504H18C18.4142 12.7504 18.75 12.4146 18.75 12.0004C18.75 11.5862 18.4142 11.2504 18 11.2504L17.1662 11.2504C16.7791 11.2504 16.4367 11.2504 16.1497 11.2783C15.8385 11.3085 15.5357 11.3754 15.2407 11.5425C14.9457 11.7095 14.7325 11.9347 14.5465 12.186C14.3749 12.4177 14.1988 12.7113 13.9996 13.0433L13.9996 13.0433L13.9521 13.1225C13.8654 13.2671 13.793 13.3875 13.7284 13.4909C13.6676 13.3852 13.5999 13.2621 13.5186 13.1144L11.8092 10.0063C11.6551 9.7259 11.5015 9.44656 11.3458 9.24177C11.1756 9.01806 10.8839 8.72225 10.4164 8.697C9.94887 8.67176 9.62698 8.93444 9.43373 9.13853C9.25683 9.32536 9.0741 9.58655 8.89069 9.84871L8.58131 10.2907C8.35416 10.6152 8.21175 10.8174 8.08848 10.9632C7.975 11.0974 7.91193 11.1414 7.86538 11.1656C7.81882 11.1899 7.74663 11.2163 7.57159 11.2323C7.38144 11.2497 7.13413 11.2504 6.73803 11.2504H6C5.58579 11.2504 5.25 11.5862 5.25 12.0004C5.25 12.4146 5.58579 12.7504 6 12.7504L6.76812 12.7504H6.76813C7.12509 12.7504 7.44153 12.7505 7.70801 12.7261C7.99707 12.6997 8.27904 12.6414 8.55809 12.4961C8.83714 12.3508 9.04661 12.1533 9.234 11.9316C9.40676 11.7272 9.58821 11.468 9.79291 11.1755L10.0932 10.7466Z" fill="#14b9ff"></path> </g></svg>
                                    </div>
                                    <p>
                                        ${pokemon.stats[0].stat.name}
                                    </p>
                                </div>
                            </div>
                            <div class="flex flex-col gap-0">
                            <span class="hover:text-red-500"> ${pokemon.stats[1].base_stat}</span>
                               
                                <div class="text-xs text-gray-400 flex gap-1">
                                    <div class="bg-[#fc538d] rounded-full aspect-square w-4 h-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                            <path fill="#1f2937"
                                                d="M17.66 11.2c-.23-.3-.51-.56-.77-.82c-.67-.6-1.43-1.03-2.07-1.66C13.33 7.26 13 4.85 13.95 3c-.95.23-1.78.75-2.49 1.32c-2.59 2.08-3.61 5.75-2.39 8.9c.04.1.08.2.08.33c0 .22-.15.42-.35.5c-.23.1-.47.04-.66-.12a.6.6 0 0 1-.14-.17c-1.13-1.43-1.31-3.48-.55-5.12C5.78 10 4.87 12.3 5 14.47c.06.5.12 1 .29 1.5c.14.6.41 1.2.71 1.73c1.08 1.73 2.95 2.97 4.96 3.22c2.14.27 4.43-.12 6.07-1.6c1.83-1.66 2.47-4.32 1.53-6.6l-.13-.26c-.21-.46-.77-1.26-.77-1.26m-3.16 6.3c-.28.24-.74.5-1.1.6c-1.12.4-2.24-.16-2.9-.82c1.19-.28 1.9-1.16 2.11-2.05c.17-.8-.15-1.46-.28-2.23c-.12-.74-.1-1.37.17-2.06c.19.38.39.76.63 1.06c.77 1 1.98 1.44 2.24 2.8c.04.14.06.28.06.43c.03.82-.33 1.72-.93 2.27" />
                                        </svg>
                                    </div>
                                    <p class="text-xs text-gray-400">
                                         ${pokemon.stats[1].stat.name}
                                    </p>
                                </div>

                            </div>
                            <div class="flex flex-col gap-0">
                            <span class="hover:text-purple-500"> ${pokemon.stats[2].base_stat}</span>
                               
                                <div class="text-xs text-gray-400 flex gap-1">
                                    <div class="rounded-full aspect-square w-4 h-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4c0-2.2 1.8-4 4-4c2.22 0 4 1.8 4 4c0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2c-1.11 0-2-.89-2-2c0-1.11.89-2 2-2c1.11 0 2 .89 2 2z"
                                                fill="#ce3df3" />
                                        </svg>
                                    </div>
                                    <p class="text-xs text-gray-400">
                                         ${pokemon.stats[2].stat.name}
                                    </p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>



                <div class="mt-8 py-4 border-b mx-6 border-gray-300">
                <a onclick="user.searchAllStatsForPokemon(${pokemon.id})">
                 <h1 class="font-bold hover:text-yellow-500 text-3xl">
                       ${pokemon.name}              #${pokemon.id}
                    </h1>
                <a>
                   
                    <p class="text-red-500 hover:underline text-md font-semibold">
                        ${pokemon.generation}
                     <span class="text-gray-400">
                           
                        </span>                       
                    </p>
                </div>
                <!-- List Tags -->
                <h2 class="font-bold text-lg px-6">Abilities:</h2>
                <ul class="flex flex-wrap gap-2 px-6 py-2 ">

                `;
        let counter = 0;
        pokemon.abilities.forEach(pokemon => {

            if (counter % 2 == 0) {
                htmlCode += `<li class="rounded-lg  hover:bg-gray-200 hover:text-white duration-300     px-2 py-1 text-xs font-bold">
                               
                                    <div class="badge badge-outline badge-warning">${pokemon.ability.name}</div>
                                </li>`;
            } else {
                htmlCode += `<li class="rounded-lg hover:bg-gray-200 hover:text-white     px-2 py-1 text-xs font-bold">
                                    <div class="badge badge-outline badge-success">${pokemon.ability.name}</div>
                                </li>`;
            }
            counter++;
        });
        htmlCode += `
                </ul>
                <!-- List Tags -->
                <h2 class="font-bold text-lg px-6">Forms:</h2>
                <ul class="flex flex-wrap gap-2 px-6 py-2 ">

                `;
        // ahora es la dde las formas
        let counterForms = 0;
        pokemon.forms.forEach(form => {
            // aca toca buscar la imagen de esa forma de pokemon
            if (counterForms % 2 == 0) {
                // buscando la imagen de la forma del pokemon
                // this.API.getDataFromApi(form.url).then((form) => {
                //     var  formImageUrl = form.sprites.front_default;
                //     });


                htmlCode += `<li class="rounded-lg  hover:bg-gray-200 hover:text-white duration-300     px-2 py-1 text-xs font-bold">
                               <div class="flex flex-col">
                                
                              <a onclick="user.showPokemonForm('${form.url}')"> 
                              <div class="badge  badge-primary">${form.name}</div>
                              </a>
                          
                            </div>
                                </li>`;
            } else {
                htmlCode += `<li class="rounded-lg hover:bg-gray-200 hover:text-white     px-2 py-1 text-xs font-bold">
                                    <div class="badge  badge-info">${form.name}</div>
                                </li>`;
            }
            counter++;
        });
        htmlCode += `
                </ul>
                <!-- SVG -->

                <div class="flex justify-between" >
                    <div class="w-full px-6 pt-2 flex gap-1 pb-2" id="typesContainer" > `;

        // contenedor de esos tipos de pokemon


        pokemon.types.forEach(element => {
            htmlCode += `
                 
                        <div class="w-8 h-8 aspect-square  text-white hover:bg-gray-200   rounded-full flex justify-center items-center">
                      <div class="icon  ${element.type.name}">
<img src="assets/icons/${element.type.name}.svg" alt="" />
                        </div>
                     </div>
                
                `
        });

        htmlCode += `
                    </div>
                    </div>
                    <div class="bg-black/90 text-white flex items-center px-2 rounded-tl-3xl rounded-br-3xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                            <g fill="#FFF" fill-rule="evenodd">
                                <path
                                    d="m31.48 19.944-3.533-3.533 1.765-3.531 5.74 5.74a1.873 1.873 0 0 1 0 2.648l-7.065 7.064a1.873 1.873 0 0 1-2.648-2.648l5.74-5.74Z"
                                    opacity=".56" />
                                <path
                                    d="M25.74 11.548a1.873 1.873 0 0 1 2.649 0l1.324 1.325-15.452 15.452a1.873 1.873 0 0 1-2.649 0l-1.324-1.324L25.74 11.548Zm-6.622 4.857-2.65 2.649-3.532-3.533-4.415 4.416 3.532 3.532-1.765 3.532-5.74-5.74a1.873 1.873 0 0 1 0-2.648l7.064-7.064a1.873 1.873 0 0 1 2.65 0l4.856 4.856Z" />
                            </g>
                        </svg>
                        
                        
                    </div>
                </div>
            </div>

        </div>
        `;

        container.innerHTML += htmlCode;

    }
    static renderOnePokemonCard(data) {
        let container = document.getElementById('PokemonSearchResultContainer');
        document.getElementById('pokemonsCardContainer').innerHTML = '';
        document.getElementById('PokemonSearchResultContainer').innerHTML = '';
        // container.innerHTML = ''; 

        let pokemon = data;
        let htmlCode = ''
        htmlCode = `
        
            <!-- Card DailyDev -->

            <div class="w-[340px] mt-3  rounded-[42px] bg-white border-8 relative">
                <!-- Contenedor Imagen Colocar Imagen -->
                <div class="flex flex-col">
                    <div class="rounded-[32px] px-5 py-6"
                        style="background-image: url('https://merehead.com/blog/wp-content/uploads/boliviainteligente-37WxvlfW3to-unsplash.jpg'); background-size: cover; background-position: center;">
                        <img class="relative w-26 h-26 object-fit mb-8 bg-black z-20 rounded-[42px]  border-8 border-white -rotate-12" id="pokemonImage" src="${pokemon.sprites.other.showdown.front_default}" />
                    </div>
                    <!-- Contenedor Time -->
                    <div
                        class="bg-gray-800 py-2 shadow-2xl rounded-2xl absolute top-44 left-1/2 transform -translate-x-1/2 w-[calc(100%_-_16px)] z-10">
                        <div class="text-white text-lg font-bold flex justify-between px-6">
                            <div class="flex flex-col gap-0 ">
                            <span></span>
                            <span class="hover:text-red-500"  >  ${pokemon.stats[0].base_stat}</span>
                               
                                <div class="text-xs text-gray-400 flex gap-1">
                                    <div class="bg-[#7147ed] rounded-full aspect-square w-4 h-4">
                                        <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#2b00ff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M2 9.26044C2 13.0079 6.01943 16.9714 8.96173 19.3707C10.2937 20.4569 10.9597 21 12 21C13.0403 21 13.7063 20.4569 15.0383 19.3707C17.9806 16.9714 22 13.008 22 9.2604C22 3.34931 16.4998 0.662637 12 5.49877C7.50016 0.662637 2 3.3495 2 9.26044Z" fill="#14b9ff"></path> <path d="M10.0932 10.7466C10.1827 10.6187 10.2571 10.5125 10.3233 10.4216C10.3793 10.5191 10.4418 10.6327 10.517 10.7695L12.2273 13.879C12.3933 14.1811 12.5562 14.4774 12.7197 14.6924C12.8947 14.9224 13.2023 15.2377 13.6954 15.2469C14.1884 15.2562 14.5077 14.9527 14.6912 14.7294C14.8627 14.5207 15.0365 14.2308 15.2138 13.9352L15.2692 13.8428C15.49 13.4748 15.629 13.2447 15.752 13.0785C15.8654 12.9254 15.9309 12.8754 15.9798 12.8478C16.0286 12.8201 16.1052 12.7897 16.2948 12.7712C16.5006 12.7512 16.7694 12.7504 17.1986 12.7504H18C18.4142 12.7504 18.75 12.4146 18.75 12.0004C18.75 11.5862 18.4142 11.2504 18 11.2504L17.1662 11.2504C16.7791 11.2504 16.4367 11.2504 16.1497 11.2783C15.8385 11.3085 15.5357 11.3754 15.2407 11.5425C14.9457 11.7095 14.7325 11.9347 14.5465 12.186C14.3749 12.4177 14.1988 12.7113 13.9996 13.0433L13.9996 13.0433L13.9521 13.1225C13.8654 13.2671 13.793 13.3875 13.7284 13.4909C13.6676 13.3852 13.5999 13.2621 13.5186 13.1144L11.8092 10.0063C11.6551 9.7259 11.5015 9.44656 11.3458 9.24177C11.1756 9.01806 10.8839 8.72225 10.4164 8.697C9.94887 8.67176 9.62698 8.93444 9.43373 9.13853C9.25683 9.32536 9.0741 9.58655 8.89069 9.84871L8.58131 10.2907C8.35416 10.6152 8.21175 10.8174 8.08848 10.9632C7.975 11.0974 7.91193 11.1414 7.86538 11.1656C7.81882 11.1899 7.74663 11.2163 7.57159 11.2323C7.38144 11.2497 7.13413 11.2504 6.73803 11.2504H6C5.58579 11.2504 5.25 11.5862 5.25 12.0004C5.25 12.4146 5.58579 12.7504 6 12.7504L6.76812 12.7504H6.76813C7.12509 12.7504 7.44153 12.7505 7.70801 12.7261C7.99707 12.6997 8.27904 12.6414 8.55809 12.4961C8.83714 12.3508 9.04661 12.1533 9.234 11.9316C9.40676 11.7272 9.58821 11.468 9.79291 11.1755L10.0932 10.7466Z" fill="#14b9ff"></path> </g></svg>
                                    </div>
                                    <p>
                                        ${pokemon.stats[0].stat.name}
                                    </p>
                                </div>
                            </div>
                            <div class="flex flex-col gap-0">
                            <span class="hover:text-red-500"> ${pokemon.stats[1].base_stat}</span>
                               
                                <div class="text-xs text-gray-400 flex gap-1">
                                    <div class="bg-[#fc538d] rounded-full aspect-square w-4 h-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                            <path fill="#1f2937"
                                                d="M17.66 11.2c-.23-.3-.51-.56-.77-.82c-.67-.6-1.43-1.03-2.07-1.66C13.33 7.26 13 4.85 13.95 3c-.95.23-1.78.75-2.49 1.32c-2.59 2.08-3.61 5.75-2.39 8.9c.04.1.08.2.08.33c0 .22-.15.42-.35.5c-.23.1-.47.04-.66-.12a.6.6 0 0 1-.14-.17c-1.13-1.43-1.31-3.48-.55-5.12C5.78 10 4.87 12.3 5 14.47c.06.5.12 1 .29 1.5c.14.6.41 1.2.71 1.73c1.08 1.73 2.95 2.97 4.96 3.22c2.14.27 4.43-.12 6.07-1.6c1.83-1.66 2.47-4.32 1.53-6.6l-.13-.26c-.21-.46-.77-1.26-.77-1.26m-3.16 6.3c-.28.24-.74.5-1.1.6c-1.12.4-2.24-.16-2.9-.82c1.19-.28 1.9-1.16 2.11-2.05c.17-.8-.15-1.46-.28-2.23c-.12-.74-.1-1.37.17-2.06c.19.38.39.76.63 1.06c.77 1 1.98 1.44 2.24 2.8c.04.14.06.28.06.43c.03.82-.33 1.72-.93 2.27" />
                                        </svg>
                                    </div>
                                    <p class="text-xs text-gray-400">
                                         ${pokemon.stats[1].stat.name}
                                    </p>
                                </div>

                            </div>
                            <div class="flex flex-col gap-0">
                            <span class="hover:text-purple-500"> ${pokemon.stats[2].base_stat}</span>
                               
                                <div class="text-xs text-gray-400 flex gap-1">
                                    <div class="rounded-full aspect-square w-4 h-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4c0-2.2 1.8-4 4-4c2.22 0 4 1.8 4 4c0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2c-1.11 0-2-.89-2-2c0-1.11.89-2 2-2c1.11 0 2 .89 2 2z"
                                                fill="#ce3df3" />
                                        </svg>
                                    </div>
                                    <p class="text-xs text-gray-400">
                                         ${pokemon.stats[2].stat.name}
                                    </p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>



                <div class="mt-8 py-4 border-b mx-6 border-gray-300">
                  <a onclick="user.searchAllStatsForPokemon(${pokemon.id})">
                 <h1 class="font-bold hover:text-yellow-500 text-3xl">
                       ${pokemon.name}              #${pokemon.id}
                    </h1>
                <a>
                    <p class="text-red-500 hover:underline text-md font-semibold">
                        ${pokemon.generation}
                     <span class="text-gray-400">
                           
                        </span>                       
                    </p>
                </div>
                <!-- List Tags -->
                <h2 class="font-bold text-lg px-6">Abilities:</h2>
                <ul class="flex flex-wrap gap-2 px-6 py-2 ">

                `;
        let counter = 0;
        pokemon.abilities.forEach(pokemon => {

            if (counter % 2 == 0) {
                htmlCode += `<li class="rounded-lg  hover:bg-gray-200 hover:text-white duration-300     px-2 py-1 text-xs font-bold">
                               
                                    <div class="badge badge-outline badge-warning">${pokemon.ability.name}</div>
                                </li>`;
            } else {
                htmlCode += `<li class="rounded-lg hover:bg-gray-200 hover:text-white     px-2 py-1 text-xs font-bold">
                                    <div class="badge badge-outline badge-success">${pokemon.ability.name}</div>
                                </li>`;
            }
            counter++;
        });
        htmlCode += `
                </ul>
                <!-- List Tags -->
                <h2 class="font-bold text-lg px-6">Forms:</h2>
                <ul class="flex flex-wrap gap-2 px-6 py-2 ">

                `;
        // ahora es la dde las formas
        let counterForms = 0;
        pokemon.forms.forEach(form => {
            // aca toca buscar la imagen de esa forma de pokemon
            if (counterForms % 2 == 0) {
                // buscando la imagen de la forma del pokemon
                // this.API.getDataFromApi(form.url).then((form) => {
                //     var  formImageUrl = form.sprites.front_default;
                //     });


                htmlCode += `<li class="rounded-lg  hover:bg-gray-200 hover:text-white duration-300     px-2 py-1 text-xs font-bold">
                               <div class="flex flex-col">
                                
                              <a onclick="user.showPokemonForm('${form.url}')"> 
                              <div class="badge  badge-primary">${form.name}</div>
                              </a>
                          
                            </div>
                                </li>`;
            } else {
                htmlCode += `<li class="rounded-lg hover:bg-gray-200 hover:text-white     px-2 py-1 text-xs font-bold">
                                    <div class="badge  badge-info">${form.name}</div>
                                </li>`;
            }
            counter++;
        });
        htmlCode += `
                </ul>
                <!-- SVG -->

                <div class="flex justify-between" >
                    <div class="w-full px-6 pt-2 flex gap-1 pb-2" id="typesContainer" > `;

        // contenedor de esos tipos de pokemon


        pokemon.types.forEach(element => {
            htmlCode += `
                 
                        <div class="w-8 h-8 aspect-square  text-white hover:bg-gray-200   rounded-full flex justify-center items-center">
                      <div class="icon  ${element.type.name}">
<img src="assets/icons/${element.type.name}.svg" alt="" />
                        </div>
                     </div>
                
                `
        });

        htmlCode += `
                    </div>
                    </div>
                    <div class="bg-black/90 text-white flex items-center px-2 rounded-tl-3xl rounded-br-3xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                            <g fill="#FFF" fill-rule="evenodd">
                                <path
                                    d="m31.48 19.944-3.533-3.533 1.765-3.531 5.74 5.74a1.873 1.873 0 0 1 0 2.648l-7.065 7.064a1.873 1.873 0 0 1-2.648-2.648l5.74-5.74Z"
                                    opacity=".56" />
                                <path
                                    d="M25.74 11.548a1.873 1.873 0 0 1 2.649 0l1.324 1.325-15.452 15.452a1.873 1.873 0 0 1-2.649 0l-1.324-1.324L25.74 11.548Zm-6.622 4.857-2.65 2.649-3.532-3.533-4.415 4.416 3.532 3.532-1.765 3.532-5.74-5.74a1.873 1.873 0 0 1 0-2.648l7.064-7.064a1.873 1.873 0 0 1 2.65 0l4.856 4.856Z" />
                            </g>
                        </svg>
                        
                        
                    </div>
                </div>
            </div>

        </div>
        `;

        container.innerHTML += htmlCode;

    }

    constructor() {

        // APIEndpoints = {
        //     pokemon: 'https://pokeapi.co/api/v2/pokemon/',
        //     generation: 'https://pokeapi.co/api/v2/generation/',
        //     pokemonSpecies: 'https://pokeapi.co/api/v2/pokemon-species/',
        //     abilities: 'https://pokeapi.co/api/v2/ability/'
        // }

    }
}


// page.getDataFromAPI();