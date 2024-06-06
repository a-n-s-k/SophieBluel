const selectDivCategorie = document.querySelector("div.categorie");
const catButton = selectDivCategorie.getElementsByClassName("cat-button");
const selectDivGallery = document.querySelector("div.gallery");
const catFilter = selectDivCategorie.getElementsByClassName("cat-filter");





/* DEBUT Création des Eléments des catégories */
export function functionCategoryElements(data) {
    const createButtonAllCategories = document.createElement("button");
    createButtonAllCategories.id = "0";
    createButtonAllCategories.setAttribute('class', 'cat-button active');
    createButtonAllCategories.textContent = "Tous";
    createButtonAllCategories.onclick = `filterSelection('0')`;
    // Création des Eléments des filtres catégories
    for (const categorie of data) {
      const createButtonCategories = document.createElement("button");
      createButtonCategories.setAttribute('class', 'cat-button');
      createButtonCategories.onclick = `filterSelection('${work.categoryId}')`;
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
/* var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn"); */
for (const i = 0; i < catButton.length; i++) {
  catButton[i].addEventListener("click", function() {
    const current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


filterSelection("0")
export function filterSelection(c) {
  if (c == "0") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (const i = 0; i < catFilter.length; i++) {
    worksRemoveClass(catFilter[i], "show");
    if (catFilter[i].className.indexOf(c) > -1) worksAddClass(catFilter[i], "show");
  }
}

// Show filtered elements
function worksAddClass(element, name) {
  const arr1 = element.className.split(" ");
  const arr2 = name.split(" ");
  for (const i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function worksRemoveClass(element, name) {
  const arr1 = element.className.split(" ");
  const arr2 = name.split(" ");
  for (const i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}