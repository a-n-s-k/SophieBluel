const selectButtonConnexion = document.querySelector(".connecter");
selectButtonConnexion.addEventListener('click', function(event) {
  event.preventDefault();
window.location.href = 'login.html';
});  

const sectionDivGallery = document.querySelector(".gallery"); // Récupération de l'élément du DOM qui accueillera les projets
const selectDivCategorie = document.querySelector(".categories");

const loginSession = sessionStorage.getItem("tokenKey");


const selectButtonLogin = document.getElementById('connexion');

// Select MODALE Id and Class
const selectIdModale = document.getElementById('modale');
const selectClassModaleContent = document.querySelector(".modale-content");
const selectIdModaleGallery = document.getElementById('modale-gallery');
const selectIdModaleForm = document.getElementById('modale-form');
const selectIdModaleFormPreview = document.getElementById('modale-form-preview');

// Select EDITION and MODIFICATION Id
const selectDivEdit = document.getElementById("edition");
const selectDivModif = document.getElementById("modification");


  if (loginSession) {  
    
		selectButtonLogin.setAttribute('class', 'deconnecter');
    selectButtonLogin.textContent = "Logout";

    const selectButtonDeConnexion = document.querySelector(".deconnecter");

    selectButtonDeConnexion.addEventListener('click', function(event) {
      event.preventDefault();
      // Déconnectez-vous en détruisant le jeton de session
      sessionStorage.removeItem("tokenKey");
      // Redirigez vers la page de connexion ou autre
		window.location.href = 'index.html';

    });  
} else if (!loginSession) {
  selectButtonLogin.setAttribute('class', 'connecter');
  selectButtonLogin.textContent = "Login";
}


const urlApiWorks = "http://localhost:5678/api/works";
const urlApiCategories = "http://localhost:5678/api/categories";

// Récupération des works eventuellement stockés dans le localStorage
let works = localStorage.getItem("storeWorks");

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



// Fonction qui crée les éléments de works
async function worksElements (work) {
  // Création de la balise figure pour chaque work
  const figureElement = document.createElement('figure');
  // Création de l'attribut class pour figure
  figureElement.setAttribute('class', `projet cat-${work.categoryId}`);
  // Création de l'attribut id et recupération de sa valeur pour figure
  figureElement.setAttribute('id', `${work.id}`);  
   
  // Création de la balise img pour chaque projet
  const imgElement = document.createElement('img');
  // Création de l'attribut src et recupération de l'URL de l'image 
  imgElement.src = work.imageUrl;
  // Création de l'attribut alt et recupération du titre pour l'image
  imgElement.alt = work.title;  

  // Création de la balise figcaption pour chaque projet
  const figcaptionElement = document.createElement("figcaption");
  // Insertion du titre pour le projet
  figcaptionElement.textContent = work.title;  
  // Insertion des balises enfants img et figcaption à leur parent figure
  figureElement.append(imgElement, figcaptionElement);  
  // Insertion des balises figure à son parent div
  sectionDivGallery.appendChild(figureElement);          
}



/* DEBUT Création des Eléments des catégories */
async function categoriesElements(categorie) {
    const buttonElement = document.createElement("button");
    buttonElement.setAttribute('class', `categ`);
    buttonElement.setAttribute('id', `cat-${categorie.id}`);
    buttonElement.textContent = categorie.name;
    selectDivCategorie.appendChild(buttonElement);
}
/* FIN Création des Eléments des catégories */

// Fonction qui affiche les catégories
async function showCategories () {
  const buttonElementAll = document.createElement("button");
  buttonElementAll.id = "cat-0";
  buttonElementAll.setAttribute('class', 'categ');
  buttonElementAll.textContent = "Tous";
  selectDivCategorie.appendChild(buttonElementAll);
  for (let i = 0; i < categories.length; i++) {
      const categorie = categories[i];
      await categoriesElements (categorie);
  }
}
showCategories ();



async function showWorks () {
    for (let i = 0; i < works.length; i++) {
        const work = works[i];
        await worksElements (work);
    }
}
showWorks ();


selectDivCategorie.addEventListener("click", (event) => {
  const categoryId = document.getElementById(`${event.target.id}`);
    const catId = event.target.id[4];
    sectionDivGallery.innerHTML = "";
    async function showFilteredWorks () {
        for (let i = 0; i < works.length; i++) {
            const work = works[i];
            const categorie = work.category;
                if ((work.categoryId > 0) && (work.categoryId == catId)){ 
                  categoryId.style.backgroundColor = "grey";
                await worksElements (work);
            }  else if (catId === "0") {  
                location.reload();
            } 
        }
    }
    //return showFilteredWorks ();
    showFilteredWorks ();
});


//let y  =localStorage.getItem("storeWorks");
//console.log(y);

//let z  =localStorage.getItem("storeCategories");
//console.log(z);

//     Effacer un localStorage à partir de sa clef
//localStorage.removeItem("storeCategories"); 

//     Effacer tous les localStorages
//localStorage.clear(); 


if (loginSession) {

// EDITION ET MODIFICATION

const textEdition = "edition";
const textModification = "modification";

// Fonction qui crée les éléments des boutons modifier et éditer
async function editElements(idSelection, texte) {
  idSelection.setAttribute('class', `${texte}-visible`);

 const imgElement = document.createElement("img");
  imgElement.setAttribute('src', `./assets/icons/${texte}.png`);
  imgElement.setAttribute('alt', `${texte}`);

  const divElement = document.createElement("div");
  divElement.textContent = texte;

  //aElement.append(imgElement, divElement);
  idSelection.append(imgElement, divElement);
}

editElements(selectDivEdit, textEdition);
editElements(selectDivModif, textModification);
}



if (loginSession) {
// DEBUT CREATE MODALE GALLERY
async function createModale (works) {
  selectIdModaleGallery.setAttribute('class', 'visible');

  const createDivGalleryHead = document.createElement("div");
  createDivGalleryHead.setAttribute('class', 'gallery-head');
  const createButtonGalleryHead = document.createElement("button");
  createButtonGalleryHead.setAttribute('class', 'close-modale');
 
  const createIconClose = document.createElement("i");
  createIconClose.setAttribute('class', 'fa-solid fa-xmark');
  createButtonGalleryHead.append(createIconClose);
  createDivGalleryHead.append(createButtonGalleryHead);

  const createDivGalleryTitle = document.createElement("div");
  createDivGalleryTitle.setAttribute('class', 'modale-title');
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
      createIconRemoveWork.setAttribute('id', `rem-${work.id}`);
      
      
      const createButtonRemoveWork = document.createElement("button");
      createButtonRemoveWork.setAttribute('class', 'button-work-remove');
      createButtonRemoveWork.appendChild(createIconRemoveWork);
      //createButtonRemoveWork.setAttribute('id', `rem-${work.id}`);

      createFigureWorks.append(
        createImageWorks,
        createButtonRemoveWork,
      );
      createDivGalleryWorks.appendChild(createFigureWorks);
  } 

  const createDivGallerySeparator = document.createElement("div");
  createDivGallerySeparator.setAttribute('class', 'modale-separator');
  //createDivGallerySeparator.textContent = "------------------------------";

  const createDivAddWork = document.createElement("div");
  //createDivFormSubmit.setAttribute('class', 'gallery-add');
  const createButtonAddWork = document.createElement("button");
  createButtonAddWork.setAttribute('id', 'add-work');
  createButtonAddWork.setAttribute('class', 'gallery-add');
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
  selectIdModaleForm.setAttribute('class', 'visible');

  const createDivFormHead = document.createElement("div");
  createDivFormHead.setAttribute('class', 'form-head');
  const createButtonFormHeadC = document.createElement("button");
  createButtonFormHeadC.setAttribute('class', 'close-modale');
  const createIconClose = document.createElement("i");
  createIconClose.setAttribute('class', 'fa-solid fa-xmark');
  const createButtonFormHeadP = document.createElement("button");
  createButtonFormHeadP.setAttribute('class', 'previous-modale');
  const createIconPrevious = document.createElement("i");
  createIconPrevious.setAttribute('class', 'fa-solid fa-arrow-left');
  createIconPrevious.setAttribute('id', 'previous-to-gallery');
  createButtonFormHeadC.append(createIconClose);
  createButtonFormHeadP.append(createIconPrevious);
  createDivFormHead.append(createButtonFormHeadP, createButtonFormHeadC);

  const createDivFormTitle = document.createElement("div");
  createDivFormTitle.setAttribute('class', 'modale-title');
  createDivFormTitle.textContent = "Ajout photo";

  const formElement = document.createElement("form");
  formElement.setAttribute('id', 'work-form');
  formElement.setAttribute('class', 'form-work');
  formElement.setAttribute('method', 'post');

  const divLabelImageElement = document.createElement("div");
  divLabelImageElement.setAttribute('class', 'file-preview');
  divLabelImageElement.setAttribute('id', 'file-preview');
  const imgLabelImageElement = document.createElement("img");
  imgLabelImageElement.setAttribute('src', 'assets/images/picture-svgrepo-com.png');
  const labelImageElement = document.createElement("label");
  labelImageElement.setAttribute('for', 'image-file');
  labelImageElement.setAttribute('class', 'button-image-input');
  labelImageElement.textContent = "+ Ajouter photo";

  const divInputImageElement = document.createElement("div");
  divInputImageElement.setAttribute('class', 'div-image-input');
  divInputImageElement.textContent = "jpg, png :4mo max";

  const inputImageElement = document.createElement("input");
  inputImageElement.setAttribute('type', 'file');
  inputImageElement.setAttribute('id', 'image-file');
  inputImageElement.setAttribute('style', 'display:none');

  inputImageElement.setAttribute('name', 'image-file');
  inputImageElement.setAttribute('accept', '.jpg, .jpeg, .png');
 
  divLabelImageElement.append(imgLabelImageElement, inputImageElement, labelImageElement, divInputImageElement);

  const labelImageTitleElement = document.createElement("label");
  labelImageTitleElement.setAttribute('for', 'image-title');
  labelImageTitleElement.textContent = "Titre";
  const inputImageTitleElement = document.createElement("input");
  inputImageTitleElement.setAttribute('type', 'text');
  inputImageTitleElement.setAttribute('id', 'image-title');
  inputImageTitleElement.setAttribute('name', 'image-title');

  const labelImageCategoryElement = document.createElement("label");
  labelImageCategoryElement.setAttribute('for', 'image-category');
  labelImageCategoryElement.textContent = "Catégorie";

  const selectImageCategoryElement = document.createElement("select");
  selectImageCategoryElement.setAttribute('id', 'select-category');
  selectImageCategoryElement.setAttribute('name', 'select-category');
  selectImageCategoryElement.setAttribute('form', 'work-form');
  selectImageCategoryElement.requiered;

  formElement.append(
    divLabelImageElement,
    labelImageTitleElement,
    inputImageTitleElement,
    labelImageCategoryElement,
    selectImageCategoryElement
    );

    const createDivFormSeparator = document.createElement("div");
    createDivFormSeparator.setAttribute('class', 'modale-separator');

    const createDivSubmitWork = document.createElement("div");
    const createButtonSubmitWork = document.createElement("button");
    createButtonSubmitWork.setAttribute('id', 'submit-to-preview');
    createButtonSubmitWork.setAttribute('class', 'submit-add');
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


// DEBUT CREATE MODALE ADD WORK PREVIEW
async function createModaleAddWorkPreview (inputImageUrl, theGetInputTitle, theGetInputCategory) {
  selectIdModaleFormPreview.setAttribute('class', 'visible');

  const createDivFormHead = document.createElement("div");
  createDivFormHead.setAttribute('class', 'form-head');

  const createButtonFormHeadC = document.createElement("button");
  createButtonFormHeadC.setAttribute('class', 'close-modale');

  const createIconClose = document.createElement("i");
  createIconClose.setAttribute('class', 'fa-solid fa-xmark');

  const createButtonFormHeadP = document.createElement("button");
  createButtonFormHeadP.setAttribute('class', 'previous-modale');
 // createButtonFormHeadP.setAttribute('id', 'previous-to-add');

  const createIconPrevious = document.createElement("i");
  createIconPrevious.setAttribute('class', 'fa-solid fa-arrow-left');
  createIconPrevious.setAttribute('id', 'previous-to-add');

  createButtonFormHeadC.append(createIconClose);
  createButtonFormHeadP.append(createIconPrevious);
  createDivFormHead.append(createButtonFormHeadP, createButtonFormHeadC);

  const createDivFormTitle = document.createElement("div");
  createDivFormTitle.setAttribute('class', 'modale-title');
  createDivFormTitle.textContent = "Ajout photo";

  const formElement = document.createElement("form");
  formElement.setAttribute('id', 'work-form-preview');
  formElement.setAttribute('class', 'form-work');
  formElement.setAttribute('method', 'post');

  const divLabelImageElement = document.createElement("div");
  divLabelImageElement.setAttribute('class', 'image-preview');

  const imgLabelImageElement = document.createElement("img");
  imgLabelImageElement.setAttribute('src', `assets/images/${inputImageUrl}`);
 
  divLabelImageElement.append(imgLabelImageElement);

  const labelImageTitleElement = document.createElement("label");
  labelImageTitleElement.setAttribute('for', 'image-title');
  labelImageTitleElement.textContent = "Titre";
  const inputImageTitleElement = document.createElement("input");
  inputImageTitleElement.setAttribute('type', 'text');
  inputImageTitleElement.setAttribute('id', 'image-title-preview');
  inputImageTitleElement.setAttribute('name', 'image-title');
  inputImageTitleElement.setAttribute('value', `${theGetInputTitle}`);

  const labelImageCategoryElement = document.createElement("label");
  labelImageCategoryElement.setAttribute('for', 'select-category-preview');
  labelImageCategoryElement.textContent = "Catégorie";

  const selectImageCategoryElement = document.createElement("select");
  selectImageCategoryElement.setAttribute('id', 'select-category-preview');
  selectImageCategoryElement.setAttribute('name', 'select-category-preview');
  selectImageCategoryElement.setAttribute('form', 'work-form-preview');
  selectImageCategoryElement.setAttribute("requiered", "");
 

  formElement.append(
    divLabelImageElement,
    labelImageTitleElement,
    inputImageTitleElement,
    labelImageCategoryElement,
    selectImageCategoryElement,
    );

    const createDivFormSeparator = document.createElement("div");
    createDivFormSeparator.setAttribute('class', 'modale-separator');
     
    const createDivSubmitWork = document.createElement("div");
    const createButtonSubmitWork = document.createElement("button");
    createButtonSubmitWork.setAttribute('id', 'submit-work-preview');
    createButtonSubmitWork.setAttribute('class', 'submit-add-preview');
    createButtonSubmitWork.textContent = "Valider";
    createDivSubmitWork.append(createButtonSubmitWork);

    selectIdModaleFormPreview.append(
    createDivFormHead,
    createDivFormTitle,
    formElement,
    createDivFormSeparator,
    createDivSubmitWork
  );
  selectClassModaleContent.appendChild(selectIdModaleFormPreview);
}
// FIN CREATE MODALE ADD WORK PREVIEW

// START - GENERATE CATEGORIES OPTIONS
async function generateCategoryOption (categories, selectcategories) {
  const categorySelector = document.getElementById(`${selectcategories}`);
  const emptyCategory = document.createElement("option");
  emptyCategory.setAttribute("value", "");
  emptyCategory.setAttribute("label", "");
  emptyCategory.textContent = "Choisissez une catégorie";
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
  window.addEventListener('click', function(event) {
      if (event.target.className === "fa-solid fa-xmark") {
      selectIdModale.setAttribute('class', 'invisible');
      visibilityRemoveElementChilds(selectIdModaleGallery);
      visibilityRemoveElementChilds(selectIdModaleForm);
      visibilityRemoveElementChilds(selectIdModaleFormPreview);
      //localStorage.removeItem("storeWorks");
      location.reload();

      //visibilityRemoveModale();
    }
  });

  // Fermeture et Suppression de la Modale en cliquant ailleur en dehors de la Modale
  window.addEventListener('click', function(event) {
    if (event.target == selectIdModale) {
      selectIdModale.setAttribute('class', 'invisible');
      visibilityRemoveElementChilds(selectIdModaleGallery);
      visibilityRemoveElementChilds(selectIdModaleForm);
      visibilityRemoveElementChilds(selectIdModaleFormPreview);
      location.reload();
      //localStorage.removeItem("storeWorks");
      //visibilityRemoveModale();
    }
  });

// START PREVIOUS BUTTON





/*   window.addEventListener('click', function(event) {
    if (event.target.className === "fa-solid fa-arrow-left") {
      const element = document.querySelector(".fa-solid .fa-arrow-left");
      console.log(element);

      if (element.parentElement.id === "previous-to-gallery") {
      visibilityRemoveElementChilds(selectIdModaleForm);
      //createModale (works);
      } else if (element.parentElement.id === "previous-to-add") {
        visibilityRemoveElementChilds(selectIdModaleFormPreview);
      }
  }
}); */


window.addEventListener('click', function(event) {
  if (event.target.id === "previous-to-gallery") {
    visibilityRemoveElementChilds(selectIdModaleForm);
    selectIdModaleGallery.setAttribute('class', 'visible');
} else if (event.target.id === "previous-to-add") {
  visibilityRemoveElementChilds(selectIdModaleFormPreview);
  selectIdModaleForm.setAttribute('class', 'visible');
}
});
// END PREVIOUS BUTTON

// Add Work
  window.addEventListener('click', function(event) {
    if (event.target.id == "add-work") {
      visibilityElementChilds(selectIdModaleGallery);
      //visibilityRemoveModale();
      createModaleAddWork(works);
      generateCategoryOption (categories, 'select-category');
    }
  });

// Création et Affichage de la Modale en cliquant sur le bouton Modifier
  selectDivModif.addEventListener('click', async function() {
    selectIdModale.setAttribute('class', 'visible');
    createModale (works);
  });

  selectDivEdit.addEventListener('click', async function() {
      selectIdModale.setAttribute('class', 'visible');
      createModale (works);
  });



// DELETE WORK 
window.addEventListener('click', function(event) {
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


//////////////////////////////////////////////////////////
let getInputImage;
window.addEventListener('click', function(event) {
  if (event.target.id === "image-file") {
    getInputImage = document.getElementById('image-file');
   } 
 });

 let getInputTitle;
 window.addEventListener('click', function(event) {
   if (event.target.id === "image-title") {
    getInputTitle = document.getElementById('image-title');
    } 
  });

  let getInputCategory;
  window.addEventListener('click', function(event) {
    if (event.target.id === "select-category") {
      getInputCategory = document.getElementById('select-category');
     } 
  });

window.addEventListener('click', async function(event) {
  if (event.target.id == "submit-to-preview") {

  const theGetInputImage = getInputImage.files[0];

  const inputImageUrl = theGetInputImage.name;
  console.log(inputImageUrl);

  const theGetInputTitle = getInputTitle.value;
  const theGetInputCategory = getInputCategory.value;
  const theGetInputCategoryLabel = getInputCategory.label;

  if (theGetInputCategory) {
    const theGetInputCategoryName = theGetInputCategory.textContent;
    console.log(theGetInputCategoryName);
  }
  const theGetInputCategoryName = theGetInputCategory.textContent;
  console.log(theGetInputImage);
  console.log(theGetInputTitle);
  console.log(theGetInputCategory);
  console.log(theGetInputCategoryLabel);
  
  if (!theGetInputImage || !theGetInputTitle || !theGetInputCategory) {
    alert('Veuillez sélectionner une image, un titre et une catégorie.');
    return;
  }

  const formData = new FormData();
  formData.append('image', theGetInputImage);
  formData.append('title', theGetInputTitle);
  formData.append('category', theGetInputCategory);

createModaleAddWorkPreview (inputImageUrl, theGetInputTitle, theGetInputCategory);
generateCategoryOption (categories, 'select-category-preview');
toSetSelectedAttribute(document.getElementById("select-category-preview"),theGetInputCategory);

selectIdModaleForm.setAttribute('class', 'invisible');

window.addEventListener('click', async function(event) {
  if (event.target.id == "submit-work-preview") {
try {
const response = await fetch( urlApiWorks, {
  method: 'POST',
  body: formData,
  headers: {
    authorization: `Bearer ${loginSession}`,
  },
});

if (response.ok) {
  alert('Image envoyée avec succès !');
  localStorage.removeItem("storeCategories");
  localStorage.removeItem("storeWorks");
  toDisabledElement('submit-work-preview');
} else {
  alert('Erreur lors de l\'envoi de l\'image.');
}
} catch (error) {
console.error(error);
alert('Erreur lors de l\'envoi de l\'image.');
}

}
});



}
});



/* async function changePreviewElementsAttributes () {
  const previewVisibility = document.querySelector("visible");

  if (previewVisibility) {
    const previewImage = document.getElementById("file-preview");
    previewImage.setAttribute('class', 'image-preview');
    const previewSubmit = document.getElementById("submit-to-preview");
    previewImage.setAttribute('class', 'submit-work');
  }
} */






/* getInputImage.addEventListener('change', () => {
  if (getInputImage.files && getInputImage.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      getPreviewImage.src = e.target.result;
    };
    reader.readAsDataURL(getInputImage.files[0]);
  } else {
    getPreviewImage.src = '';
  }
}); */


////////////////////////////////////////////////////
}


async function visibilityRemoveElementChilds(identifiantElement) {
  while (identifiantElement.hasChildNodes()) {
    identifiantElement.removeChild(identifiantElement.firstChild);
    identifiantElement.setAttribute("class", "invisible");
  }
}
async function visibilityElementChilds(identifiantElement) {
    identifiantElement.setAttribute("class", "invisible");
}

async function toDisabledElement(identifiant) {
  document.getElementById(`${identifiant}`).disabled = true;
}


async function toSetSelectedAttribute(variableIdentifiant, valeurValue) {
  // Loop through all the items in drop down list
    for (let i = 0; i< variableIdentifiant.options.length; i++) { 
      if (variableIdentifiant.options[i].value == valeurValue) {
      // Item is found. Set its property and exit
      variableIdentifiant.options[i].selected = true;
      break;
      }
    }
    return;
}





