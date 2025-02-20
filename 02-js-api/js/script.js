   //Ellements
   const characters = document.querySelector('.characters');
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
                       <button  class="btn-show" data-id="${personaje.id}" class="btn-show">Saber mas</button>
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
               alert(element.getAttribute('data-id'))

           })
       })
   }
   fetchCharacters();