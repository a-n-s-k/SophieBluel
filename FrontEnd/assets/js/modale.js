const loginSession = sessionStorage.getItem("tokenKey");

let works = localStorage.getItem("storeWorks");
works = JSON.parse(localStorage.getItem("works"));


let categories = localStorage.getItem("storeCategories");
categories = JSON.parse(localStorage.getItem("storeCategories"));




const selectIdModale = document.getElementById("modale");




//const selectModale = document.getElementById("modale");
//const selectModaleContent = document.querySelector(".modale-content");
const modaleGallery = document.getElementById("modale-gallery");
const selectAddWork = document.getElementById("add-work");


/* DEBUT - Création de la fenêtre modale */
export async function createElementsModale (works) {
  // Modification de l'attibut de visibilité
  selectIdModale.setAttribute('class', 'modale-visible');

  // Création des Eléments HTML et insersion des données projets
  const divModaleGallery = document.createElement("div");
  divModaleGallery.setAttribute('class', 'modale-gallery');



  //const createDivModaleGalleryContent = document.createElement("div");
  //createDivModaleGalleryContent.setAttribute('id', 'modale-gallery-content');
  //selectSectionContent.appendChild(createDivModaleGalleryContent);

  for (const work of works) {
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

      createFigureWorks.append(
        createImageWorks,
        createButtonRemoveWork,
      );
      divModaleGallery.appendChild(createFigureWorks);
      modaleGallery.appendChild(divModaleGallery);
    }
    
    
}
createElementsModale (works);
//createElementsModale (works);
/* FIN - Création de la fenêtre modale */  



/* DEBUT - Suppression ou Fermeture de la fenêtre modale */
export async function closeAndRemoveElements() {
  selectIdModale.setAttribute('class', 'modale-invisible');
  const toRemovedElements = document.querySelector(".modale-gallery");
  return toRemovedElements.remove();
}

/* FIN - Suppression ou Fermeture de la fenêtre modale */
















































