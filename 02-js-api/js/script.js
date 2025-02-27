    // Elements
    const characters = document.querySelector(".characters");
    const modal = document.getElementById("characterModal");
    const modalName = document.getElementById("modalName");
    const modalImage = document.getElementById("modalImage");
    const modalStatus = document.getElementById("modalStatus");
    const modalSpecies = document.getElementById("modalSpecies");
    const modalGender = document.getElementById("modalGender");
    const modalOrigin = document.getElementById("modalOrigin");
    const modalLocation = document.getElementById("modalLocation");
    const closeModal = document.querySelector(".close");

    // Fetch all characters
    const fetchCharacters = async () => {
      for (let i = 1; i <= 40; i++) {
        let url = "https://rickandmortyapi.com/api/character/" + i;
        await fetch(url)
          .then((response) => response.json())
          .then((data) => {
            characters.innerHTML +=
              '<div class="character"> \
                          <article>\
                              <h4>' +
              data.name.substring(0, 16) +
              '</h4>\
                              <h5 class="' +
              data.status +
              '">' +
              data.status +
              '</h5>\
                              <button class="btn-show" data-id="' +
              data.id +
              '"> + info </button>\
                          </article>\
                          <img src="' +
              data.image +
              '">\
                      </div>';
          });
      }
      addClickEvents();
    };

    // Add click events to buttons
    function addClickEvents() {
      const btnsShow = document.querySelectorAll(".btn-show");
      btnsShow.forEach((element) => {
        element.addEventListener("click", function () {
          const characterId = this.getAttribute("data-id");
          fetchCharacterDetails(characterId);
        });
      });
    }

    // Fetch character details and show modal
    const fetchCharacterDetails = async (id) => {
      const url = "https://rickandmortyapi.com/api/character/" + id;
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          modalName.textContent = data.name;
          modalImage.src = data.image;
          modalStatus.textContent = data.status;
          modalSpecies.textContent = data.species;
          modalGender.textContent = data.gender;
          modalOrigin.textContent = data.origin.name;
          modalLocation.textContent = data.location.name;
          modal.style.display = "block";
        });
    };

    // Close modal
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Close modal when clicking outside of it
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });

    fetchCharacters();