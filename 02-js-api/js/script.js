//Ellements
const characters = document.querySelector('.characters');
const openModal = document.querySelector('.hero__cta');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');
var numOfItems = 40;
//fetch all characters
const fetchCharacters = async () => {
    for (let i = 1; i <= numOfItems; i++) {
        let url = 'https://rickandmortyapi.com/api/character/' + i;
        await fetch(url)
            .then((response) => response.json())
            .then((personaje) => {
                characters.innerHTML += `
               <div class="character"> 
                   <article>
                       <h4>${personaje.name.substring(0, 16)}</h4>
                       <h5 class="${personaje.status}">${personaje.status}</h5>
                       <button  class="btn-show hero__cta"  data-id="${personaje.id}" class="btn-show">Saber mas</button>
                    </article>
                    <img src="${personaje.image}">
                    
               </div>
               `;
            })
    }
    addClickEvents();
}



function addClickEvents() {
    const btnsShow = document.querySelectorAll('.btn-show')

    btnsShow.forEach(element => {
        element.addEventListener("click", a => {
            // modal.classList.add('modal--show');
            // // alert(element.getAttribute('data-id'))
            fetchSpecificCharacter(element.getAttribute('data-id'));
            openModal();

        })
    })
}

async function fetchSpecificCharacter(idCharacter) {
    let url = 'https://rickandmortyapi.com/api/character/' + idCharacter;
    let modal = document.getElementById("modal");
    await fetch(url)
        .then((response => response.json))
        .then((character) => {
            modal.innerHTML = `
        <div class="modal__container">
                <!-- <h2 class="modal__title">${character.name}</h2> -->
                <img src=${character.image} height="350" width="350" alt="" class="modal__img">
                <p class="modal__paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repellendus
                    distinctio quia, ullam facilis harum dicta esse eligendi eaque enim unde similique iure voluptatibus
                    qui fugit vero reprehenderit veritatis quae!</p>
                <a href="#" class="modal__close">Cerrar modal</a>
            </div>
        
        `
        })


}

// closeModal.addEventListener('click', (e)=>{
//     e.preventDefault();
//     modal.classList.remove('modal--show');
// });


fetchCharacters();

