// CONNEXION A LOGIN.HTML
const selectButtonConnexion = document.querySelector(".connecter");
selectButtonConnexion.addEventListener("click", function(event) {
  event.preventDefault();
window.location.href = "login.html";
});  


const loginSession = sessionStorage.getItem("tokenKey");


const selectButtonLogin = document.getElementById("connexion");

// Select MODALE Id and Class
const selectIdModale = document.getElementById("modale");
const selectClassModaleContent = document.querySelector(".modale-content");
const selectIdModaleGallery = document.getElementById("modale-gallery");
const selectIdModaleForm = document.getElementById("modale-form");

// Select EDITION and MODIFICATION Id
const selectDivEdit = document.getElementById("edition");
const selectDivModif = document.getElementById("modification");


  if (loginSession) { 
    
		selectButtonLogin.setAttribute("class", "deconnecter");
    selectButtonLogin.textContent = "Logout";

    const selectButtonDeConnexion = document.querySelector(".deconnecter");

    selectButtonDeConnexion.addEventListener("click", function(event) {
      event.preventDefault();
      // Déconnectez-vous en détruisant le jeton de session
      sessionStorage.removeItem("tokenKey");
      // Redirigez vers la page de connexion ou autre
		window.location.href = "index.html";

    });  
} else if (!loginSession) {
  selectButtonLogin.setAttribute("class", "connecter");
  selectButtonLogin.textContent = "Login";
  selectDivModif.setAttribute("class", "modification-invisible");
}


const urlApiWorks = "http://localhost:5678/api/works";
const urlApiCategories = "http://localhost:5678/api/categories";

// Récupération des works eventuellement stockés dans le localStorage
let works = localStorage.getItem("storeWorks");

async function worksLocalStorage () {
  // Récupération des works depuis l'API s'il n'y rien dans le localStorage
  if (works === null) {  
    // Appel à l'API et récupération de la réponse pour works
    const reponse = await fetch(urlApiWorks);
    // Transformation de la réponse pour works en JSON
    works = await reponse.json(); 
    // Conversion de works pour pouvoir le stocker en localStorage
    const valeurWorks = JSON.stringify(works); 
    // Stockage des works dans le localStorage
    window.localStorage.setItem("storeWorks", valeurWorks); 
  } else {
    // On parse ici le localStorage de works récupéré 
    works = JSON.parse(localStorage.getItem("storeWorks"));
  }
}
worksLocalStorage ();


// Récupération des catégories eventuellement stockés dans le localStorage
let categories = localStorage.getItem("storeCategories");
// Récupération des catégories depuis l'API s'il n'y rien dans le localStorage
if (categories === null) {
  // Appel à l'API et récupération de la réponse pour catégories
  const reponse = await fetch(urlApiCategories);
  // Transformation de la réponse pour catégories en JSON
  categories = await reponse.json();
  // Conversion de categories pour pouvoir le stocker en localStorage
  const valeurCategories = JSON.stringify(categories);
  // Stockage des categories dans le localStorage
    window.localStorage.setItem("storeCategories", valeurCategories);
} else {
  // On parse ici le localStorage de categories récupéré
  categories = JSON.parse(localStorage.getItem("storeCategories"));
}



// FONCTION QUI CREEE LES ELEMENTS DE WORKS
const sectionDivGallery = document.querySelector(".gallery");
async function worksElements (work) {
  const figureElement = document.createElement("figure");
  figureElement.setAttribute("class", `projet cat-${work.categoryId}`);
  figureElement.setAttribute("id", `${work.id}`);  
   
  const imgElement = document.createElement("img"); 
  imgElement.src = work.imageUrl;
  imgElement.alt = work.title;  

  const figcaptionElement = document.createElement("figcaption");
  figcaptionElement.textContent = work.title;  
  figureElement.append(imgElement, figcaptionElement); 

  sectionDivGallery.appendChild(figureElement);          
}

// FONCTION QUI CREEE LES ELEMENTS DES CATEGORIES
const selectDivCategorie = document.querySelector(".categories");
async function categoriesElements(categorie) {
  const buttonElement = document.createElement("button");
  buttonElement.setAttribute("class", "cat nofocused");
  buttonElement.setAttribute("id", `cat-${categorie.id}`);
  buttonElement.textContent = categorie.name;

  selectDivCategorie.appendChild(buttonElement);
}


// FONCTION QUI AFFICHE LES CATEGORIES
async function showCategories() {
  const buttonElementAll = document.createElement("button");
  buttonElementAll.id = "cat-0";
  buttonElementAll.setAttribute("class", "cat focused");
  buttonElementAll.textContent = "Tous";

  selectDivCategorie.appendChild(buttonElementAll);
  for (let i = 0; i < categories.length; i++) {
    const categorie = categories[i];
    await categoriesElements(categorie);
  }
}

// FONCTION QUI AFFICHE LES WORKS
async function showWorks() {
  for (let i = 0; i < works.length; i++) {
    const work = works[i];
    await worksElements(work);
  }
}


// FITRES CATEGORIES
selectDivCategorie.addEventListener("click", (event) => {
  const categId = event.target.id;
  const catId = categId[4];

  const categIdElement = document.getElementById(`${categId}`);
  const categClass = document.querySelectorAll(".cat");
  for (const categ of categClass) {
    categ.setAttribute("class", "cat nofocused");
    if (categId) {
      categIdElement.setAttribute("class", "cat focused");
    } 
  }

  sectionDivGallery.innerHTML = "";
  async function showFilteredWorks () {
    for (let i = 0; i < works.length; i++) {
      const work = works[i];
      const categorie = work.category;
      if ((work.categoryId > 0) && (work.categoryId == catId)){ 
        await worksElements (work);
      } else if (catId === "0") {  
        await worksElements (work);
      } 
    }
  }
  return showFilteredWorks ();
});
 
// FONCTION CREATION BOUTON EDITION
async function editElements() {
  selectDivEdit.setAttribute("class", "edition-visible");
  const imgElement = document.createElement("img");
  imgElement.setAttribute("src", "./assets/icons/edition.png");
  imgElement.setAttribute("alt", "Mode edition");
  const divElement = document.createElement("div");
  divElement.textContent = "Mode édition";
  selectDivEdit.append(imgElement, divElement);
}

// FONCTION CREATION BOUTON MODIFICATION
async function modifElements() {
  selectDivModif.setAttribute("class", "modification-visible");
  const imgElement = document.createElement("img");
  imgElement.setAttribute("src", "./assets/icons/modification.png");
  imgElement.setAttribute("alt", "Modifier");
  const divElement = document.createElement("div");
  divElement.textContent = "modifier";
  selectDivModif.append(imgElement, divElement);
}

// VISIBILITE ET SUPPRESSION D'ELEMENTS ENFANTS
async function visibilityRemoveElementChilds(identifiantVar) {
  while (identifiantVar.hasChildNodes()) {
    identifiantVar.removeChild(identifiantVar.firstChild);
    identifiantVar.setAttribute("class", "invisible");
  }
}
// POUR RENDRE INVISIBILITE UN ELEMENT
async function visibilityElement(identifiantElement) {
  const idVar = document.getElementById("identifiantElement");
  idVar.setAttribute("class", "invisible");
}

// POUR REMETTRE A ZERO LE FORMULAIRE
function clearFormData() {
  const idImagePreview = document.getElementById("image-preview");
  idImagePreview.setAttribute("class", "image-preview invisible");
  const idFilePreview = document.getElementById("file-preview");
  idFilePreview.setAttribute("class", "file-preview visible");

  const titleInput = document.getElementById("image-title");
  titleInput.value = "";
  const categorySelected = document.getElementById("select-category");
  categorySelected.value = "";

  const submiButton = document.getElementById("to-submit");
  //submiButton.setAttribute("id", "to-submit");
  submiButton.setAttribute("class", "tosubmit preview");
}


if (loginSession) {
// AFFICHAGE CATEGORIES EDITION ET MODIFICATION
  showWorks();
  editElements();
  modifElements();
// DEBUT CREATE MODALE GALLERY
async function createModale (works) {

  selectIdModaleGallery.setAttribute("class", "visible");

  const createDivGalleryHead = document.createElement("div");
  createDivGalleryHead.setAttribute("class", "gallery-head");
  const createButtonGalleryHead = document.createElement("button");
  createButtonGalleryHead.setAttribute("class", "close-modale");
 
  const createIconClose = document.createElement("i");
  createIconClose.setAttribute("class", "fa-solid fa-xmark");
  createButtonGalleryHead.append(createIconClose);
  createDivGalleryHead.append(createButtonGalleryHead);

  const createDivGalleryTitle = document.createElement("div");
  createDivGalleryTitle.setAttribute("class", "modale-title");
  createDivGalleryTitle.textContent = "Galerie photo";

  const createDivGalleryWorks = document.createElement("div");
  createDivGalleryWorks.setAttribute("class", "gallery-works");
  for (let i = 0; i < works.length; i++) {
    const work = works[i];

      const createFigureWorks = document.createElement("figure");
      createFigureWorks.id = work.id;
      createFigureWorks.setAttribute("class", "modale-work");


      const createImageWorks = document.createElement("img");
      createImageWorks.src = work.imageUrl;
      createImageWorks.alt = work.title;
      createImageWorks.setAttribute("class", "class-work-image");

      const createIconRemoveWork = document.createElement("i");
      createIconRemoveWork.setAttribute("class", "fa-solid fa-trash-can");
      createIconRemoveWork.setAttribute("id", `rem-${work.id}`);
      
      
      const createButtonRemoveWork = document.createElement("button");
      createButtonRemoveWork.setAttribute("class", "button-work-remove");
      createButtonRemoveWork.appendChild(createIconRemoveWork);

      createFigureWorks.append(
        createImageWorks,
        createButtonRemoveWork,
      );
      createDivGalleryWorks.appendChild(createFigureWorks);
  } 

  const createDivGallerySeparator = document.createElement("div");
  createDivGallerySeparator.setAttribute("class", "modale-separator");
  //createDivGallerySeparator.textContent = "------------------------------";

  const createDivAddWork = document.createElement("div");
  const createButtonAddWork = document.createElement("button");
  createButtonAddWork.setAttribute("id", "add-work");
  createButtonAddWork.setAttribute("class", "gallery-add");
  createButtonAddWork.textContent = "Ajouter une photo";
  createDivAddWork.append(createButtonAddWork);


  selectIdModaleGallery.append(
    createDivGalleryHead,
    createDivGalleryTitle,
    createDivGalleryWorks,
    createDivGallerySeparator,
    createDivAddWork
  );
  selectClassModaleContent.appendChild(selectIdModaleGallery);
}
// FIN CREATE MODALE GALLERY

// DEBUT CREATE MODALE ADD WORK
async function createModaleAddWork (works) {

  selectIdModaleForm.setAttribute("class", "visible");

  const createDivFormHead = document.createElement("div");
  createDivFormHead.setAttribute("class", "form-head");
  const createButtonFormHeadC = document.createElement("button");
  createButtonFormHeadC.setAttribute("class", "close-modale");
  const createIconClose = document.createElement("i");
  createIconClose.setAttribute("class", "fa-solid fa-xmark");
  const createButtonFormHeadP = document.createElement("button");
  createButtonFormHeadP.setAttribute("class", "previous-modale");

  const createIconPrevious = document.createElement("i");
  createIconPrevious.setAttribute("class", "fa-solid fa-arrow-left");
  createIconPrevious.setAttribute("id", "previous-to-gallery");
  createButtonFormHeadC.append(createIconClose);
  createButtonFormHeadP.append(createIconPrevious);
  createDivFormHead.append(createButtonFormHeadP, createButtonFormHeadC);

  const createDivFormTitle = document.createElement("div");
  createDivFormTitle.setAttribute("class", "modale-title");
  createDivFormTitle.textContent = "Ajout photo";

  const formElement = document.createElement("form");
  formElement.setAttribute("id", "work-form");
  formElement.setAttribute("class", "form-work");
  formElement.setAttribute("method", "post");

  const divLabelImageElement = document.createElement("div");
  divLabelImageElement.setAttribute("class", "file-preview visible");
  divLabelImageElement.setAttribute("id", "file-preview");
  const imgLabelImageElement = document.createElement("img");
  imgLabelImageElement.setAttribute("src", "assets/icons/placeholder-image.png");
  const labelImageElement = document.createElement("label");
  labelImageElement.setAttribute("for", "image-file");
  labelImageElement.setAttribute("class", "button-image-input");
  labelImageElement.textContent = "+ Ajouter photo";

  const divInputImageElement = document.createElement("div");
  divInputImageElement.setAttribute("class", "div-image-input");
  divInputImageElement.textContent = "jpg, png :4mo max";

  const inputImageElement = document.createElement("input");
  inputImageElement.setAttribute("type", "file");
  inputImageElement.setAttribute("id", "image-file");
  inputImageElement.setAttribute("style", "display:none");

  inputImageElement.setAttribute("name", "image-file");
  inputImageElement.setAttribute("accept", ".jpg, .jpeg, .png");
 
  divLabelImageElement.append(imgLabelImageElement, inputImageElement, labelImageElement, divInputImageElement);


  const divImagePreview = document.createElement("div");
  divImagePreview.setAttribute("id", "image-preview");
  divImagePreview.setAttribute("class", "image-preview invisible");

  const imgPreview = document.createElement("img");
  imgPreview.setAttribute("id", "imagepreview");
  divImagePreview.append(imgPreview);


  const divImageTitleElement = document.createElement("div");
  divImageTitleElement.setAttribute("class", "file-title");
  const labelImageTitleElement = document.createElement("label");
  labelImageTitleElement.setAttribute("for", "image-title");
  labelImageTitleElement.textContent = "Titre";
  const inputImageTitleElement = document.createElement("input");
  inputImageTitleElement.setAttribute("type", "text");
  inputImageTitleElement.setAttribute("id", "image-title");
  inputImageTitleElement.setAttribute("name", "image-title");
  divImageTitleElement.append(labelImageTitleElement, inputImageTitleElement);

  const divImageCategoryElement = document.createElement("div");
  divImageCategoryElement.setAttribute("class", "file-category");
  const labelImageCategoryElement = document.createElement("label");
  labelImageCategoryElement.setAttribute("for", "image-category");
  labelImageCategoryElement.textContent = "Catégorie";
  const selectImageCategoryElement = document.createElement("select");
  selectImageCategoryElement.setAttribute("id", "select-category");
  selectImageCategoryElement.setAttribute("name", "select-category");
  selectImageCategoryElement.setAttribute("form", "work-form");
  selectImageCategoryElement.requiered;
  divImageCategoryElement.append(labelImageCategoryElement, selectImageCategoryElement);

  formElement.append(
    divLabelImageElement,
    divImagePreview,
    divImageTitleElement,
    divImageCategoryElement
    );

    const createDivFormSeparator = document.createElement("div");
    createDivFormSeparator.setAttribute("class", "modale-separator");

    const createDivSubmitWork = document.createElement("div");
    const createButtonSubmitWork = document.createElement("button");
    createButtonSubmitWork.setAttribute("id", "to-submit");
    createButtonSubmitWork.setAttribute("class", "tosubmit preview");
    createButtonSubmitWork.textContent = "Valider";
    createDivSubmitWork.append(createButtonSubmitWork);

    selectIdModaleForm.append(
    createDivFormHead,
    createDivFormTitle,
    formElement,
    createDivFormSeparator,
    createDivSubmitWork
  );
  selectClassModaleContent.appendChild(selectIdModaleForm);
}
// FIN CREATE MODALE ADD WORK

// START - GENERATE CATEGORIES OPTIONS
async function generateCategoryOption (categories, selectcategories) {
  const categorySelector = document.getElementById(`${selectcategories}`);
  const emptyCategory = document.createElement("option");
  emptyCategory.setAttribute("value", "");
  emptyCategory.setAttribute("label", "");
  emptyCategory.textContent = "";
  categorySelector.append(emptyCategory);
  categories.forEach((category) => {
    const optionImageCategoryElement = document.createElement("option");
    optionImageCategoryElement.setAttribute("value", category.id);
    optionImageCategoryElement.setAttribute("label", category.name);
    optionImageCategoryElement.textContent = `${category.name}`;
    categorySelector.appendChild(optionImageCategoryElement);
  });
}  
// END - GENERATE CATEGORIES OPTIONS

// VISIBILITY CLOSE REMOVE
  // Recupération du bouton X
  window.addEventListener("click", function(event) {
      if (event.target.className === "fa-solid fa-xmark") {
      selectIdModale.setAttribute("class", "invisible");
      //visibilityRemoveElementChilds(selectIdModaleGallery);
      //visibilityRemoveElementChilds(selectIdModaleForm);
      location.reload();
    }
  });

  // Fermeture et Suppression de la Modale en cliquant ailleur en dehors de la Modale
  window.addEventListener("click", function(event) {
    if (event.target == selectIdModale) {
      selectIdModale.setAttribute("class", "invisible");
      //visibilityRemoveElementChilds(selectIdModaleGallery);
      //visibilityRemoveElementChilds(selectIdModaleForm);
      location.reload();
    }
  });

// START PREVIOUS BUTTON
window.addEventListener("click", function(event) {
  if (event.target.id === "previous-to-gallery") {
    visibilityRemoveElementChilds(selectIdModaleForm);
    //visibilityElement(selectIdModaleForm);
    //visibilityRemoveElementChilds(identifiantElement)
    selectIdModaleGallery.setAttribute("class", "visible");
    createModale (works);
}
});
// END PREVIOUS BUTTON

// Add Work
  window.addEventListener("click", function(event) {
    if (event.target.id == "add-work") {
      //selectIdModaleGallery.setAttribute("class", "invisible");
      visibilityRemoveElementChilds(selectIdModaleGallery);
      createModaleAddWork(works);
      generateCategoryOption (categories, "select-category");
      
    }
  });
// Création et Affichage de la Modale en cliquant sur le bouton Modifier
  selectDivModif.addEventListener("click", async function() {
    selectIdModale.setAttribute("class", "visible");
    createModale (works);
  });

  selectDivEdit.addEventListener("click", async function() {
      selectIdModale.setAttribute("class", "visible");
      createModale (works);
  });

// DELETE WORK 
window.addEventListener("click", function(event) {
 if (event.target.className === "fa-solid fa-trash-can") {
    const numRem = event.target.id;
    const nodeId = numRem.slice(4);
    removeWork(nodeId);
  } 
});

// CALL API FOR DELETE WORK
function removeWork(identifiant) {
  fetch(urlApiWorks + "/" + identifiant, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${loginSession}`,
    },
  }).then((response) => {
    if (response.ok) {
      const element = document.getElementById(`${identifiant}`);
      element.remove();
    localStorage.removeItem("storeWorks"); 
    } else {
      alert("Erreur : " + response.status);
    }
  });
}

let getInputImage;
window.addEventListener("input", function(event) {
  if (event.target.id === "image-file") {
    getInputImage = document.getElementById("image-file");
    const theGetInputImage = getInputImage.files[0];
    console.log(theGetInputImage);
    const inputImageUrl = theGetInputImage.name;
    const theImagePreviewImg = document.getElementById("imagepreview");
    theImagePreviewImg.setAttribute("src", `assets/images/${inputImageUrl}`);
    const theFilePreviewDiv = document.getElementById("file-preview");
    theFilePreviewDiv.setAttribute("class", "file-preview invisible");
    const theImagePreviewDiv = document.getElementById("image-preview");
    theImagePreviewDiv.setAttribute("class", "image-preview visible");
   } 
 });


 let getInputTitle;
 window.addEventListener("input", function(event) {
   if (event.target.id === "image-title") {
    getInputTitle = document.getElementById("image-title");
    } 
  });

  let getInputCategory;
  window.addEventListener("change", function(event) {
    if (event.target.id === "select-category") {
      getInputCategory = document.getElementById("select-category");
     } 
  });





/*         if (!getInputImage || !getInputTitle || !getInputCategory) {
          alert("Veuillez sélectionner une image, un titre et une catégorie.");
      } else {
        document.getElementById("to-submit").style.color = "red";
        //toSubmitButton.setAttribute("class", "tosubmit towork");
      }

        const formData = new FormData();
        formData.append("image", getInputImage.files[0]);
        formData.append("title", getInputTitle.value);
        formData.append("category", getInputCategory.value);
  
        window.addEventListener("click", async function(event) {
          if (event.target.className === "tosubmit") {
            try {
              const response = await fetch( urlApiWorks, {
                method: "POST",
                body: formData,
                headers: {
                authorization: `Bearer ${loginSession}`,
                },
              });
            if (response.ok) {
              alert("Image envoyée avec succès !");
              localStorage.removeItem("storeCategories");
              localStorage.removeItem("storeWorks");
              clearFormData()
            } else {
              alert("Erreur lors de l'envoi de l'image.");
            }
            } catch (error) {
              console.error(error);
              alert("Erreur lors de l'envoi de l'image.");
            }
          }
        }); */

/////////////////////////////////////////////////


window.addEventListener("mouseover", async function(event) {
  if (event.target.className === "tosubmit preview") {

    if (!getInputImage || !getInputTitle || !getInputCategory) {
      alert("Veuillez sélectionner une image, un titre et une catégorie.");
      return;
    } else {
      const toSubmit = document.getElementById("to-submit");
      toSubmit.setAttribute("class", "tosubmit work");
    }
  

  const formData = new FormData();
  formData.append("image", getInputImage.files[0]);
  formData.append("title", getInputTitle.value);
  formData.append("category", getInputCategory.value);

  window.addEventListener("click", async function(event) {
    if (event.target.className == "tosubmit work") {
      try {
        const response = await fetch( urlApiWorks, {
          method: "POST",
          body: formData,
          headers: {
          authorization: `Bearer ${loginSession}`,
          },
        });
      if (response.ok) {
        alert("Image envoyée avec succès !");
        //localStorage.removeItem("storeCategories");
        //localStorage.removeItem("storeWorks");
        clearFormData()
      } else {
        alert("Erreur lors de l'envoi de l'image.");
      }
      } catch (error) {
        console.error(error);
        alert("Erreur lors de l'envoi de l'image.");
      }
    }
  });
}
});
    } else {
  showCategories();
  showWorks();
  selectDivModif.setAttribute("class", "modification-invisible");
}





