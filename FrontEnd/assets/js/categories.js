/* DEBUT Création des Eléments des catégories */
export function createElementsCategories(data) {
  const selectDivCategorie = document.querySelector("div.categorie");
  // const createH3AllCategories = document.createElement("h3");
  const createButtonAllCategories = document.createElement("button");
//   createButtonAllCategories.href = "#";
  createButtonAllCategories.textContent = "Tous";
  // createH3AllCategories.append(createButtonAllCategories);
  // Création des Eléments des filtres catégories
  for (const categorie of data) {
    // const createH3Categories = document.createElement("h3");
    const createButtonCategories = document.createElement("button");
    createButtonCategories.id = categorie.id;
    // createButtonCategories.onclick = "affichageCategorie()";
    createButtonCategories.textContent = categorie.name;
    // createH3Categories.append(createButtonCategories);
    selectDivCategorie.prepend(createButtonAllCategories);
    selectDivCategorie.appendChild(createButtonCategories);
  }
}
/* FIN Création des Eléments des catégories */


/* DEBUT Création des Eléments HTML et insersion des données travaux */
export function createElementsWorks (data) {
  // const figureWorksSet = new Set();
  
  const selectDivGallery = document.querySelector("div.gallery");
  
  // const letters = new Set();
 
  for (const work of data) {
    // if (work.categoryId !== 0) {
      const  idCategories = document.querySelector("main section div.categorie");
      // const createFigureWorks = document.createElement("figure");
      idCategories.addEventListener('click', function(event) {
      
        const  idCategory = event.target.querySelector("main section div button.id");
        const createFigureWorks = document.createElement("figure");
      
        if (work.categoryId == idCategory) {
          createFigureWorks.id = work.id;
      
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
      // location.reload();
/*         const elementsToRemove = document.getElementsByClassName("gallery");
        const removeFigures = document.getElementsByTagName("figure"); */
   


/*       const idCategory = event.target.getAttribute('id');

      if (work.categoryId == idCategory) {
        createFigureWorks.id = work.id;

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
    } */
  });

  }
 
}

/* function removeElements() {
          const elementsToRemove = document.getElementsByClassName("gallery");
          const removeFigures = document.getElementsByTagName("figure");
          elementsToRemove.removeChild(removeFigures);
          return;
        } */
/* DEBUT - Suppression d'Eléments */
function reloadElements() {
  document.getElementsByClassName("gallery").contentWindow.location.reload(true);
  return;
}

/* FIN - Suppression d'Eléments */


  function createFigures () {
    // const idCategory = getAttribute('id');
    const  idCategory = document.querySelector("main section div button.id");
    const createFigureWorks = document.createElement("figure");
  
    if (work.categoryId == idCategory) {
      createFigureWorks.id = work.id;
  
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
