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

    selectButtonDeConnexion.addEventListener('click', function() {
      // Déconnectez-vous en détruisant le jeton de session
      sessionStorage.removeItem("tokenKey");
      // Redirigez vers la page de connexion ou autre
		window.location.href = 'index.html';
    });  
} else if (!loginSession) {
  selectButtonLogin.setAttribute('class', 'connecter');
  selectButtonLogin.textContent = "Login";
}


export const urlApiWorks = "http://localhost:5678/api/works";
export const urlApiCategories = "http://localhost:5678/api/categories";

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
  figureElement.appendChild(imgElement, figcaptionElement);  
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
    const catId = event.target.id[4];
    sectionDivGallery.innerHTML = "";
    async function showFilteredWorks () {
        //sectionDivGallery.innerHTML = "";
        for (let i = 0; i < works.length; i++) {
            const work = works[i];
            const categorie = work.category;
                if ((work.categoryId > 0) && (work.categoryId == catId)){ 
                await worksElements (work);
            }  else if (catId === "0") {  
                location.reload();
            } 
        }
    }
    return showFilteredWorks ();

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
  

  //const aElement = document.createElement("a");
  // createAEdition.setAttribute('class', 'edition');
  //aElement.setAttribute('href', '#');

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
  createButtonGalleryHead.setAttribute('id', 'close-modale');
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
//const varAddWork = 
async function createModaleAddWork (works) {
  selectIdModaleForm.setAttribute('class', 'visible');

  const createDivFormHead = document.createElement("div");
  createDivFormHead.setAttribute('class', 'form-head');
  const createButtonFormHeadC = document.createElement("button");
  createButtonFormHeadC.setAttribute('id', 'close-modale');
  const createIconClose = document.createElement("i");
  createIconClose.setAttribute('class', 'fa-solid fa-xmark');
  const createButtonFormHeadP = document.createElement("button");
  createButtonFormHeadP.setAttribute('id', 'previous-modale');
  const createIconPrevious = document.createElement("i");
  createIconPrevious.setAttribute('class', 'fa-solid fa-arrow-left');
  createButtonFormHeadC.append(createIconClose);
  createButtonFormHeadP.append(createIconPrevious);
  createDivFormHead.append(createButtonFormHeadC, createButtonFormHeadP);




  const createDivFormTitle = document.createElement("div");
  createDivFormTitle.setAttribute('class', 'modale-title');
  createDivFormTitle.textContent = "Ajout photo";

  const createDivFormWork = document.createElement("div");
  createDivFormWork.setAttribute('class', 'form-work');


  const formElement = document.createElement("form");
  formElement.setAttribute('id', 'work-form');
  formElement.setAttribute('method', 'post');

  const labelImageElement = document.createElement("label");
  const iLabelImageElement = document.createElement("i");
  iLabelImageElement.setAttribute('class', 'fa-regular fa-image');
  labelImageElement.append(iLabelImageElement);
  
  const inputImageElement = document.createElement("input");

  inputImageElement.setAttribute('type', 'file');
  inputImageElement.setAttribute('id', 'image-file');

  const labelImageTitleElement = document.createElement("label");
  labelImageTitleElement.setAttribute('for', 'image-title');
  labelImageTitleElement.textContent = "Titre";
  const inputImageTitleElement = document.createElement("input");
  inputImageTitleElement.setAttribute('type', 'image-title');

  const labelImageCategoryElement = document.createElement("label");
  labelImageCategoryElement.setAttribute('for', 'image-category');
  labelImageCategoryElement.textContent = "Catégorie";
  const fieldsetImageCategoryElement = document.createElement("fieldset");


  
  fieldsetImageCategoryElement.setAttribute('class', 'selection-category');

  const selectImageCategoryElement = document.createElement("select");
  selectImageCategoryElement.setAttribute('id', 'select-category');
  selectImageCategoryElement.setAttribute('name', 'select-category');
  selectImageCategoryElement.setAttribute('form', 'work-form');
  selectImageCategoryElement.setAttribute("requiered", "");


  const optionImageCategoryElement = document.createElement("option");
  optionImageCategoryElement.setAttribute("value", "");
  optionImageCategoryElement.setAttribute("label", "");
  optionImageCategoryElement.setAttribute("hidden", "");

  fieldsetImageCategoryElement.append(selectImageCategoryElement, optionImageCategoryElement);





  const inputImageCategoryElement = document.createElement("input");
  inputImageCategoryElement.setAttribute('type', 'image-category');

  formElement.append(
    labelImageElement,
    inputImageElement,
    labelImageTitleElement,
    inputImageTitleElement,
    labelImageCategoryElement,
    fieldsetImageCategoryElement
    //inputImageCategoryElement
    );

    const createDivFormSeparator = document.createElement("div");
    createDivFormSeparator.setAttribute('class', 'modale-separator');
    createDivFormSeparator.textContent = "------------------------------";
  
    const createDivSubmitWork = document.createElement("div");
    const createButtonSubmitWork = document.createElement("button");
    createButtonSubmitWork.setAttribute('id', 'submit-work');
    createButtonSubmitWork.setAttribute('class', 'submit-add');
    createButtonSubmitWork.textContent = "Ajouter";
    createDivSubmitWork.append(createButtonSubmitWork);



    createDivFormWork.append(formElement);
    selectIdModaleForm.append(
    createDivFormHead,
    createDivFormTitle,
    createDivFormWork,
    createDivFormSeparator,
    createDivSubmitWork
  );
  selectClassModaleContent.appendChild(selectIdModaleForm);



    


/*   for (let i = 0; i < works.length; i++) {
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
  }  */
}

// FIN CREATE MODALE ADD WORK

// Génération des options catégories
async function generateCategoryOption (categories) {
  const categorySelector = document.getElementById("select-category");
  categories.forEach((category) => {
    const optionImageCategoryElement = document.createElement("option");
    optionImageCategoryElement.setAttribute("value", category.id);
    optionImageCategoryElement.setAttribute("label", category.name);
    categorySelector.appendChild(optionImageCategoryElement);
  });
}  


// VISIBILITY CLOSE REMOVE
async function visibilityRemoveModale() {
  while (selectIdModaleGallery.hasChildNodes()) {
    selectIdModaleGallery.removeChild(selectIdModaleGallery.firstChild);
    selectIdModaleGallery.setAttribute("class", "invisible");
  }
  while (selectIdModaleForm.hasChildNodes()) {
    selectIdModaleForm.removeChild(selectIdModaleForm.firstChild);
    selectIdModaleForm.setAttribute("class", "invisible");
  }
  while (selectIdModaleFormPreview.hasChildNodes()) {
    selectIdModaleFormPreview.removeChild(selectIdModaleFormPreview.firstChild);
    selectIdModaleFormPreview.setAttribute("class", "invisible");
  }
}

  // Recupération du bouton X
  window.addEventListener('click', function(event) {
    if (event.target.id == "close-modale") {
      selectIdModale.setAttribute('class', 'invisible');
      visibilityRemoveModale();
    }
  });

  // Fermeture et Suppression de la Modale en cliquant ailleur en dehors de la Modale
  window.addEventListener('click', function(event) {
    if (event.target == selectIdModale) {
      selectIdModale.setAttribute('class', 'invisible');
      visibilityRemoveModale();
    }
  });

// Add Work
  window.addEventListener('click', function(event) {
    if (event.target.id == "add-work") {
      visibilityRemoveModale();
      createModaleAddWork(works);
      generateCategoryOption (categories);
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

}


// DELETE WORK 
let numRem;
window.addEventListener('click', function(event) {
  if (event.target.matches(".button-work-remove")) {
    numRem = event.target.id.slice(4);
    removeWork(numRem);
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
      localStorage.removeItem("storeCategories");
      localStorage.removeItem("storeWorks"); 
    } else {
      alert("Erreur : " + response.status);
    }
  });
}


//////////////////////////////////////////////////////////

const getInputImage = document.getElementById('image-file');
const getInputTitle = document.getElementById('image-title');
const getInputcategory = document.getElementById('select-category');
const getPreviewImage = document.getElementById('previewImage');
//const getSubmitButton = document.getElementById('submit-work');

window.addEventListener('click', async function(event) {
  if (event.target.id == "submit-work") {


  const theInputImage = getInputImage.files[0];

  const theInputTitle = getInputTitle.value;
  const theInputcategory = getInputcategory.value;

  if (!theInputImage || !theInputTitle || !theInputcategory) {
    alert('Veuillez sélectionner une image, un titre et une catégorie.');
    return;
  }

  const formData = new FormData();
  formData.append('image', theInputImage);
  formData.append('title', theInputTitle);
  formData.append('category', theInputcategory);

  try {
    const response = await fetch( urlApiWorks, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('Image envoyée avec succès !');
      getInputImage.value = '';
      getInputTitle.value = '';
      getInputcategory.value = '';
      getPreviewImage.src = '';
    } else {
      alert('Erreur lors de l\'envoi de l\'image.');
    }
  } catch (error) {
    console.error(error);
    alert('Erreur lors de l\'envoi de l\'image.');
  }
}
});

getInputImage.addEventListener('change', () => {
  if (getInputImage.files && getInputImage.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      getPreviewImage.src = e.target.result;
    };
    reader.readAsDataURL(getInputImage.files[0]);
  } else {
    getPreviewImage.src = '';
  }
});


////////////////////////////////////////////////////










