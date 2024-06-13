
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




