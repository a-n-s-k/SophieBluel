//Récupération des works eventuellement stockées dans le localStorage
let works = window.localStorage.getItem("storedWorks");
let categories = window.localStorage.getItem("storedCategories");
const sectionDivGallery = document.querySelector(".gallery"); // Récupération de l'élément du DOM qui accueillera les projets
const selectDivCategorie = document.querySelector(".categories");

const urlApiWorks = "http://localhost:5678/api/works";
const urlApiCategories = "http://localhost:5678/api/categories";

const storedWorks = localStorage.getItem("storeWorks");
if (storedWorks === null) {  // Récupération des works depuis l'API s'il n'y rien dans le localStorage
    const reponse = await fetch(urlApiWorks);
    works = await reponse.json();  // Transformation des works en JSON
    const valeurWorks = JSON.stringify(works); // Transformation des works en Objets pour pouvoir les stocker en localStorage
    window.localStorage.setItem("storeWorks", valeurWorks); // Stockage des informations dans le localStorage
} else {
    works = JSON.parse(localStorage.getItem("storeWorks"));
}

for (let i = 0; i < works.length; i++) {
    const work = works[i];
    for (const key in work) {
        const categorie = work.category;
        for (const key in categorie) {
            if (categorie.name === "Appartements") {
                console.log(key+":", categorie[key]);
                console.log(key+":", work[key]);
            }
            //console.log(key+":", categorie[key]);
        }
        //console.log(key+":", work[key]);
    }
}


const storedCategories = localStorage.getItem("storeCategories");
if (storedCategories === null) {  // Récupération des categories depuis l'API s'il n'y rien dans le localStorage
    const reponse = await fetch(urlApiCategories);
    categories = await reponse.json();  // Transformation des categories en JSON
    const valeurCategories = JSON.stringify(categories); // Transformation des categories en Objets pour pouvoir les stocker en localStorage
    window.localStorage.setItem("storeCategories", valeurCategories); // Stockage des informations dans le localStorage 
} else {
    categories = JSON.parse(localStorage.getItem("storeCategories"));
}



/* async function getWorks() {
    if (storedWorks === null) {  // Récupération des works depuis l'API s'il n'y rien dans le localStorage
        const reponse = await fetch(urlApiWorks);
        works = await reponse.json();  // Transformation des works en JSON
        const valeurWorks = JSON.stringify(works); // Transformation des works en Objets pour pouvoir les stocker en localStorage
        window.localStorage.setItem("storeWorks", valeurWorks); // Stockage des informations dans le localStorage
        return localStorage.getItem("storeWorks");
    } else {
        //works = JSON.parse(works);
        //works = JSON.parse(localStorage.getItem("storeWorks"));
        //works = localStorage.getItem("storeWorks").json();
        //works = localStorage.getItem("storeWorks");
        return storedWorks;
    }
}
console.log(getWorks()); */




async function worksElements (work, sectionDivGallery) {
    const figureElement = document.createElement('figure'); // Création de la balise figure pour chaque projet
    figureElement.setAttribute('class', `projet cat-${work.categoryId}`);  // Création de l'attribut class pour figure
    figureElement.setAttribute('id', `${work.id}`);  // Création de l'attribut id et recupération de sa valeur pour figure
    
    const imgElement = document.createElement('img');  // Création de la balise img pour chaque projet
    imgElement.src = work.imageUrl; // Création de l'attribut src et recupération de l'URL de l'image 
    imgElement.alt = work.title;  // Création de l'attribut alt et recupération du titre pour l'image

    const figcaptionElement = document.createElement("figcaption");  // Création de la balise figcaption pour chaque projet
    figcaptionElement.textContent = work.title;  // Insertion du titre pour le projet

    figureElement.appendChild(imgElement, figcaptionElement);  // Insertion des balises enfants img et figcaption à leur parent figure

    sectionDivGallery.appendChild(figureElement);  // Insertion des balises figure à son parent div
}





/* async function getCategories() {
    if (categories === null) {  // Récupération des categories depuis l'API s'il n'y rien dans le localStorage
        const reponse = await fetch(urlApiCategories);
        categories = await reponse.json();  // Transformation des categories en JSON
        const valeurCategories = JSON.stringify(categories); // Transformation des categories en Objets pour pouvoir les stocker en localStorage
        window.localStorage.setItem("storedCategories", valeurCategories); // Stockage des informations dans le localStorage 
    } else {
        categories = JSON.parse(categories);
    }
return categories;
}
getCategories(); */


// WORKS
/* async function generateWorks(getWorks) {

    for (const work of works) {
        worksElements(work, sectionDivGallery);
    }
} */
//generateFilterWorks(works);
//generateWorks(works);

//const figureWorkClass = document.querySelector(".projet").getAttribute("class").split(" ")[1]; 
//console.log(figureWorkClass);

// CATEGORIES

/* DEBUT Création des Eléments des catégories */
/* async function generateCategories(categories) {
  const buttonElementAll = document.createElement("button");
  buttonElementAll.id = "cat-0";
  buttonElementAll.setAttribute('class', 'categ');
  buttonElementAll.textContent = "Tous";
  selectDivCategorie.appendChild(buttonElementAll);
  // Création des Eléments des filtres catégories
  for (let i = 0; i < categories.length; i++) {

    const category = categories[i]; // Variable pour parcourir chaque categorie
    const buttonElement = document.createElement("button");
    buttonElement.setAttribute('class', `categ`);
    buttonElement.setAttribute('id', `cat-${category.id}`);
    //buttonElement.id = category.id;
    buttonElement.textContent = category.name;
    selectDivCategorie.appendChild(buttonElement);

  }
}
generateCategories(categories); */
/* FIN Création des Eléments des catégories */

/* const buttonCatId = document.querySelector(".categ").getAttribute("id").split(" ")[0];
console.log(buttonCatId); */

/* function generateFilterWorks() {
    const works = JSON.parse(localStorage.getItem('storedWorks'));
    let listWorks = [];

    works.forEach((work) => {
        if(work.categoryId == figureWorkClass[4]) {
            listWorks.push(work);
        }
    });
    generateWorks(listWorks)  
} 
generateFilterWorks(); */


































//let y  =localStorage.getItem("storeWorks");
//console.log(y);

//let z  =localStorage.getItem("storeCategories");
//console.log(z);

//     Effacer un localStorage à partir de sa clef
//localStorage.removeItem("storeCategories"); 

//     Effacer tous les localStorages
//localStorage.clear(); 





