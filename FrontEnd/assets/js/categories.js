/* DEBUT Création des Eléments des catégories */
export function createElementsCategories(data) {
  const selectDivCategorie = document.querySelector("div.categorie");
  const createH3AllCategories = document.createElement("h3");
  const createButtonAllCategories = document.createElement("button");
//   createButtonAllCategories.href = "#";
  createButtonAllCategories.textContent = "Tous";
  createH3AllCategories.append(createButtonAllCategories);
  // Création des Eléments des filtres catégories
  for (const categorie of data) {
    const createH3Categories = document.createElement("h3");
    const createButtonCategories = document.createElement("button");
    createButtonCategories.id = categorie.id;
    createButtonCategories.onclick = "affichageCategorie()";
    createButtonCategories.textContent = categorie.name;
    createH3Categories.append(createButtonCategories);
    selectDivCategorie.prepend(createH3AllCategories);
    selectDivCategorie.appendChild(createH3Categories);
  }
}
/* FIN Création des Eléments des catégories */


/* DEBUT Création des Eléments HTML et insersion des données travaux */
export function createElementsWorks (data) {
  const selectDivGallery = document.querySelector("div.gallery");
  for (const work of data) {
    if (work.categoryId !== 0) {
      const createFigureWorks = document.createElement("figure");
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
}
/* DEBUT Création des Eléments HTML et insersion des données travaux */




