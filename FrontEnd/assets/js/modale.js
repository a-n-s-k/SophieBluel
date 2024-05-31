/* DEBUT - Création de la fenêtre modale */
export function createElementsModale (data) {
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
  




















































