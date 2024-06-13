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





