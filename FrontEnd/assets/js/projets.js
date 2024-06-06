

// Fonction pour récupérer les works depuis l'API
function getWorks() {
    fetch('http://localhost:5678/api/works') // Remplacez par l'URL de votre API
        .then(response => response.json())
        .then(data => {
            const works = data.works; // Accédez aux données des works
            displayWorks(works);
        });
}

// Fonction pour afficher les works
function displayWorks(works) {
    const galleryContainer = document.querySelector('.gallery');
    galleryContainer.innerHTML = ''; // Vider le conteneur de works

    works.forEach(work => {
        const figureElement = document.createElement('figure');
        figureElement.setAttribute('class', 'projet');
        figureElement.classList.add('work');


        const imgElement = document.createElement('img');
        imgElement.src = work.imageUrl; // Accédez à l'URL de l'image
        imgElement.alt = work.title;  // Accédez au Titre de l'image

        const figcaptionElement = document.createElement("figcaption"); 
        figcaptionElement.textContent = work.title;

        figureElement.appendChild(imgElement, figcaptionElement);
        figureElement.dataset.category = work.category; // Ajoutez la catégorie à l'élément work

        galleryContainer.appendChild(figureElement);
    });
}


/* DEBUT Création des Eléments des catégories */
export function functionCategoryElements(data) {
    const selectDivCategorie = document.querySelector("div.categorie");
    const createButtonAllCategories = document.createElement("button");
    createButtonAllCategories.id = "0";
    createButtonAllCategories.textContent = "Tous";
    // Création des Eléments des filtres catégories
    for (const categorie of data) {
      const createButtonCategories = document.createElement("button");
      createButtonCategories.id = categorie.id;
      createButtonCategories.textContent = categorie.name;
      selectDivCategorie.prepend(createButtonAllCategories);
      selectDivCategorie.appendChild(createButtonCategories);
    }
  }
  /* FIN Création des Eléments des catégories */




// Fonction pour filtrer les works par catégorie
function filterWorks(category) {
    const works = document.querySelector('.categorie');

    if (category === 'all') {
        works.forEach(work => work.style.display = 'block');
        return;
    }

    works.forEach(work => {
        if (work.dataset.category === category) {
            work.style.display = 'block';
        } else {
            work.style.display = 'none';
        }
    });
}

// Événements pour les boutons de filtre
const filterButtons = document.querySelectorAll('.filter-buttons button');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.filter;
        filterWorks(category);
    });
});

// Récupérez les works au chargement de la page
getWorks();



