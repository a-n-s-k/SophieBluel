//Récupération des works eventuellement stockées dans le localStorage
let works = window.localStorage.getItem("storedWorks");
let categories = window.localStorage.getItem("storedCategories");



/* const onClick = (event) => {
    if (event.target.nodeName === 'BUTTON') {
        const clickedCatId = event.target.id;
        console.log(clickedCatId);
    }   
}
const catId = window.addEventListener('click', onClick); */





async function getWorks() {
    if (works === null) {  // Récupération des works depuis l'API s'il n'y rien dans le localStorage
        const reponse = await fetch("http://localhost:5678/api/works");
        works = await reponse.json();  // Transformation des works en JSON
        const valeurWorks = JSON.stringify(works); // Transformation des works en Objets pour pouvoir les stocker en localStorage
        window.localStorage.setItem("storedWorks", valeurWorks); // Stockage des informations dans le localStorage 
    } else {
        works = JSON.parse(works);
    }
return works;
}
getWorks();


async function getCategories() {
    if (categories === null) {  // Récupération des categories depuis l'API s'il n'y rien dans le localStorage
        const reponse = await fetch("http://localhost:5678/api/categories");
        categories = await reponse.json();  // Transformation des categories en JSON
        const valeurCategories = JSON.stringify(categories); // Transformation des categories en Objets pour pouvoir les stocker en localStorage
        window.localStorage.setItem("storedCategories", valeurCategories); // Stockage des informations dans le localStorage 
    } else {
        categories = JSON.parse(categories);
    }
return categories;
}
getCategories();






// WORKS
async function generateWorks(works) {
	for (let i = 0; i < works.length; i++) {
		const work = works[i]; // Variable pour parcourir chaque projet
		
		const sectionDivGallery = document.querySelector(".gallery"); // Récupération de l'élément du DOM qui accueillera les projets
		
        const figureElement = document.createElement('figure'); // Création de la balise figure pour chaque projet
        figureElement.setAttribute('class', `projet cat-${work.categoryId}`);  // Création de l'attribut class pour figure
        figureElement.setAttribute('id', `${work.id}`);  // Création de l'attribut id et recupération de sa valeur pour figure
        
        const imgElement = document.createElement('img');  // Création de la balise img pour chaque projet
        imgElement.src = work.imageUrl; // Création de l'attribut src et recupération de l'URL de l'image 
        imgElement.alt = work.title;  // Création de l'attribut alt et recupération du titre pour l'image

        const figcaptionElement = document.createElement("figcaption");  // Création de la balise figcaption pour chaque projet
        figcaptionElement.textContent = work.title;  // Insertion du titre pour le projet

        figureElement.appendChild(imgElement, figcaptionElement);  // Insertion des balises enfants img et figcaption à leur parent figure
        //figureElement.dataset.category = work.category; // Ajoutez la catégorie à l'élément work
        //figureElement.setAttribute('id', `${work.id}`);  // Création de l'attribut id et recupération de sa valeur pour figure

        sectionDivGallery.appendChild(figureElement);  // Insertion des balises figure à son parent div

	}
    return;
}




//generateFilterWorks(works);
generateWorks(works);

const figureWorkClass = document.querySelector(".projet").getAttribute("class").split(" ")[1]; 
console.log(figureWorkClass);


// CATEGORIES
const selectDivCategorie = document.querySelector(".categories");
/* DEBUT Création des Eléments des catégories */
async function generateCategories(categories) {
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
generateCategories(categories);
/* FIN Création des Eléments des catégories */

const buttonCatId = document.querySelector(".categ").getAttribute("id").split(" ")[0];
console.log(buttonCatId);




function generateFilterWorks() {
    const works = JSON.parse(localStorage.getItem('storedWorks'));
    let listWorks = [];


    works.forEach((work) => {
        if(work.categoryId == figureWorkClass[4]) {
            listWorks.push(work);
        }
    });
    generateWorks(listWorks)
    
} 
generateFilterWorks();











