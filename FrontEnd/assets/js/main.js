
//let categories = window.localStorage.getItem("storedCategories");
const sectionDivGallery = document.querySelector(".gallery"); // Récupération de l'élément du DOM qui accueillera les projets
const selectDivCategorie = document.querySelector(".categories");

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






/* DEBUT - Création du bouton mode édition*/
async function createElementsEdition() {
    // Création des Eléments du boubon mode edition
    const selectIdEdition = document.getElementById("id-edition");
    selectIdEdition.setAttribute('class', 'class-edition');
  
    const createAEdition = document.createElement("a");
    // createAEdition.setAttribute('class', 'edition');
    createAEdition.setAttribute('class', 'class-editer');
    createAEdition.setAttribute('href', '#');
  
    const createImgEdition = document.createElement("img");
    createImgEdition.setAttribute('src', './assets/icons/editer.png');
    createImgEdition.setAttribute('alt', 'Edition');
  
    const createDivEdition = document.createElement("div");
    createDivEdition.textContent = "Mode édition";
  
    createAEdition.append(createImgEdition, createDivEdition);
  
    selectIdEdition.appendChild(createAEdition);
  }
  createElementsEdition();
  /* FIN - Création du bouton mode édition*/
  
  
  /* DEBUT - Création du bouton Modifier*/
  async function createElementsModification() {
    // Création des Eléments du boubon modifier
    const selectDivMesprojets = document.querySelector("div.mesprojets");
  
    const createAModification = document.createElement("a");
    createAModification.setAttribute('class', 'modifier');
    createAModification.setAttribute('class', 'class-modifier');
    createAModification.setAttribute('href', '#');
  
    const createImgModification = document.createElement("img");
    createImgModification.setAttribute('src', './assets/icons/editer.png');
    createImgModification.setAttribute('alt', 'Edition');
  
    const createDivModification = document.createElement("div");
    createDivModification.textContent = "modifier";
  
    createAModification.append(createImgModification, createDivModification);
  
    selectDivMesprojets.appendChild(createAModification);
  }
  createElementsModification();
  /* FIN - Création du bouton Modifier*/
