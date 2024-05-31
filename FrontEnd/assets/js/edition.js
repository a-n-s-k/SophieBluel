/* DEBUT - Création du bouton mode édition*/
export function createElementsEdition() {
  // Création des Eléments du boubon mode edition
  const selectIdEdition = document.getElementById("id-edition");
  selectIdEdition.setAttribute('class', 'class-edition');

  const createAEdition = document.createElement("a");
  // createAEdition.setAttribute('class', 'edition');
  createAEdition.setAttribute('class', 'class-editer');
  createAEdition.setAttribute('href', '#');

  const createImgEdition = document.createElement("img");
  createImgEdition.setAttribute('src', './assets/icons/editer.png');
  createImgEdition.setAttribute('alt', 'Edition');

  const createDivEdition = document.createElement("div");
  createDivEdition.textContent = "Mode édition";

  createAEdition.append(createImgEdition, createDivEdition);

  selectIdEdition.appendChild(createAEdition);
}
/* FIN - Création du bouton mode édition*/


/* DEBUT - Création du bouton Modifier*/
export function createElementsModification() {
  // Création des Eléments du boubon modifier
  const selectDivMesprojets = document.querySelector("div.mesprojets");

  const createAModification = document.createElement("a");
  createAModification.setAttribute('class', 'modifier');
  createAModification.setAttribute('class', 'class-modifier');
  createAModification.setAttribute('href', '#');

  const createImgModification = document.createElement("img");
  createImgModification.setAttribute('src', './assets/icons/editer.png');
  createImgModification.setAttribute('alt', 'Edition');

  const createDivModification = document.createElement("div");
  createDivModification.textContent = "modifier";

  createAModification.append(createImgModification, createDivModification);

  selectDivMesprojets.appendChild(createAModification);
}
/* FIN - Création du bouton Modifier*/













