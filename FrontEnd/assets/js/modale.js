// DEBUT CREATE MODALE GALLERY
async function createModale (works) {
  selectIdModaleGallery.setAttribute('class', 'visible');

  const createDivGalleryHead = document.createElement("div");
  createDivGalleryHead.setAttribute('class', 'gallery-head');
  const createIconClose = document.createElement("i");
  createIconClose.setAttribute('class', 'fa-solid fa-xmark');
  createDivGalleryHead.append(createIconClose);

  const createDivGalleryTitle = document.createElement("div");
  createDivGalleryTitle.setAttribute('class', 'gallery-title');
  createDivGalleryTitle.textContent = "Galerie photo";

  const createDivGalleryWorks = document.createElement("div");
  createDivGalleryWorks.setAttribute('class', 'gallery-works');
  for (let i = 0; i < works.length; i++) {
    const work = works[i];

      const createFigureWorks = document.createElement("figure");
      createFigureWorks.id = work.id;
      createFigureWorks.setAttribute('class', 'modale-work');


      const createImageWorks = document.createElement("img");
      createImageWorks.src = work.imageUrl;
      createImageWorks.alt = work.title;
      createImageWorks.setAttribute('class', 'class-work-image');

      const createIconRemoveWork = document.createElement("i");
      createIconRemoveWork.setAttribute('class', 'fa-solid fa-trash-can');
      
      
      const createButtonRemoveWork = document.createElement("button");
      createButtonRemoveWork.setAttribute('class', 'button-work-remove');
      createButtonRemoveWork.appendChild(createIconRemoveWork);
      createButtonRemoveWork.setAttribute('id', `rem-${work.id}`);

      createFigureWorks.append(
        createImageWorks,
        createButtonRemoveWork,
      );
      createDivGalleryWorks.appendChild(createFigureWorks);
  } 

  const createDivGallerySeparator = document.createElement("div");
  createDivGallerySeparator.setAttribute('class', 'gallery-separator');
  createDivGallerySeparator.textContent = "------------------------------";

  const createDivFormSubmit = document.createElement("div");
  createDivFormSubmit.setAttribute('class', 'form-submit');
  createDivFormSubmit.textContent = "Valider";


  selectIdModaleGallery.append(
    createDivGalleryHead,
    createDivGalleryTitle,
    createDivGalleryWorks,
    createDivGallerySeparator,
    createDivFormSubmit
  );
  return selectClassModaleContent.appendChild(selectIdModaleGallery);
}
// FIN CREATE MODALE GALLERY















































