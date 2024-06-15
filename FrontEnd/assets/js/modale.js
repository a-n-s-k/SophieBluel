

const token = localStorage.getItem('token');
const selectIdModale = document.getElementById("id-modale");




/* DEBUT - Recupération du lien de la Modification */
const classBoutonModifier = document.querySelector("main section div a.class-modifier");
const classBoutonEditer = document.querySelector("div a.class-editer");

const idModale = document.getElementById("id-modale");

/* FIN - Recupération du lien de la Modification */





/* DEBUT - Création de la fenêtre modale */
export function createElementsModale (data) {
  // Modification de l'attibut de visibilité
  selectIdModale.setAttribute('class', 'modale-visible');

  // Création des Eléments HTML et insersion des données projets
  const selectSectionContent = document.getElementById("section-id-mod-content");



  const createDivModaleGalleryContent = document.createElement("div");
  createDivModaleGalleryContent.setAttribute('id', 'modale-gallery-content');
  selectSectionContent.appendChild(createDivModaleGalleryContent);

  for (const work of data) {
    if (work.categoryId !== 0) {
      const createFigureWorks = document.createElement("figure");
      createFigureWorks.id = work.id;
      const createImageWorks = document.createElement("img");
      createImageWorks.src = work.imageUrl;
      createImageWorks.alt = work.title;
      createImageWorks.setAttribute('class', 'class-work-image');

      const createIconRemoveWork = document.createElement("i");
      createIconRemoveWork.setAttribute('class', 'fa-solid fa-trash-can');

      const createButtonRemoveWork = document.createElement("button");
      createButtonRemoveWork.setAttribute('class', 'button-work-remove');
      createButtonRemoveWork.appendChild(createIconRemoveWork);

      // createFigcaptionWorks.textContent = work.title;
      createFigureWorks.append(
        createImageWorks,
        createButtonRemoveWork,
      );
      createDivModaleGalleryContent.appendChild(createFigureWorks);
    }
  }
}
/* FIN - Création de la fenêtre modale */  



/* DEBUT - Suppression ou Fermeture de la fenêtre modale */
export function closeAndRemoveElements() {
  selectIdModale.setAttribute('class', 'modale-invisible');
  const toRemovedElements = document.getElementById("modale-gallery-content");
  toRemovedElements.remove();
}
/* FIN - Suppression ou Fermeture de la fenêtre modale */


















































