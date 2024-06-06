




const selectDivCategorie = document.querySelector("div.categorie");
// const catButton = selectDivCategorie.getElementsByClassName("cat-button");
const selectDivGallery = document.querySelector("div.gallery");
const catFilter = selectDivGallery.getElementsByClassName("cat-filter");


/* DEBUT Création des Eléments des catégories */
export function functionCategoryElements(data) {
  const createButtonAllCategories = document.createElement("button");
  createButtonAllCategories.id = "0";
  createButtonAllCategories.setAttribute('class', 'cat-button');
  createButtonAllCategories.textContent = "Tous";
  // Création des Eléments des filtres catégories
  for (const categorie of data) {
    const createButtonCategories = document.createElement("button");
    createButtonCategories.setAttribute('class', 'cat-button');
    createButtonCategories.id = categorie.id;
    createButtonCategories.textContent = categorie.name;
    selectDivCategorie.prepend(createButtonAllCategories);
    selectDivCategorie.appendChild(createButtonCategories);

  }
}
/* FIN Création des Eléments des catégories */


/* DEBUT Création des Eléments HTML et insersion des données travaux */
export function createElementsWorks (data) {
  for (const work of data) {
      const createFigureWorks = document.createElement("figure");
      createFigureWorks.setAttribute('class', `cat-filter ${work.categoryId}`);
      const createImageWorks = document.createElement("img");
      createImageWorks.src = work.imageUrl;
      createImageWorks.alt = work.title;
      const createFigcaptionWorks = document.createElement("figcaption");
      createFigcaptionWorks.textContent = work.title;
      createFigureWorks.append(
        createImageWorks,
        createFigcaptionWorks
      );
      selectDivGallery.appendChild(createFigureWorks);






  }
}
/* DEBUT Création des Eléments HTML et insersion des données travaux */

// Add active class to the current control button (highlight it)
const catButton = selectDivCategorie.getElementsByClassName("cat-button");
for (const i = 0; i < catButton.length; i++) {
  catButton[i].addEventListener("click", function(event) {
    const current = event.target.document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

