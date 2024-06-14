//Récupération des works eventuellement stockées dans le localStorage
let works = window.localStorage.getItem("storedWorks");
let categories = window.localStorage.getItem("storedCategories");
const sectionDivGallery = document.querySelector(".gallery"); // Récupération de l'élément du DOM qui accueillera les projets
const selectDivCategorie = document.querySelector(".categories");

const urlApiWorks = "http://localhost:5678/api/works";
const urlApiCategories = "http://localhost:5678/api/categories";


/* const onClick = (event) => {
    if (event.target.nodeName === 'BUTTON') {
        const clickedCatId = event.target.id;
        console.log(clickedCatId);
    }   
}
const catId = window.addEventListener('click', onClick); */

async function worksElements (work, sectionDivGallery) {
    const figureElement = document.createElement('figure'); // Création de la balise figure pour chaque projet
    figureElement.setAttribute('class', `cat-${work.categoryId}`);  // Création de l'attribut class pour figure
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



async function getWorks() {
    if (works === null) {  // Récupération des works depuis l'API s'il n'y rien dans le localStorage
        const reponse = await fetch(urlApiWorks);
        works = await reponse.json();  // Transformation des works en JSON
        const valeurWorks = JSON.stringify(works); // Transformation des works en Objets pour pouvoir les stocker en localStorage
        window.localStorage.setItem("storedWorks", valeurWorks); // Stockage des informations dans le localStorage 
    } else {
        works = JSON.parse(works);
    }
    async function generateWorks() {
        for (const work of works) {

/*             const buttonCatId = document.querySelector(".categ");
            buttonCatId.addEventListener("click", myFunction);

            function myFunction() {
            const catId = buttonCatId.getAttribute("id").split(" ")[0];
            console.log(catId);
            } */




            //if (work.categoryId === 1) {
                worksElements(work, sectionDivGallery);
            //} else {
               // worksElements(work, sectionDivGallery);
                //sectionDivGallery.innerHTML = "";
            //}
            
        }
        
    }
    generateWorks()
}
getWorks();


async function getCategories() {
    if (categories === null) {  // Récupération des categories depuis l'API s'il n'y rien dans le localStorage
        const reponse = await fetch(urlApiCategories);
        categories = await reponse.json();  // Transformation des categories en JSON
        const valeurCategories = JSON.stringify(categories); // Transformation des categories en Objets pour pouvoir les stocker en localStorage
        window.localStorage.setItem("storedCategories", valeurCategories); // Stockage des informations dans le localStorage 
    } else {
        categories = JSON.parse(categories);
    }
    categoriesElements(categories);
}
getCategories();






// WORKS
/* async function generateWorks() {
    for (const work of works) {
        worksElements(work, sectionDivGallery);
    }
} */




//generateFilterWorks(works);
//generateWorks(works);

/* const figureWorkClass = document.querySelector(".projet").getAttribute("class").split(" ")[1]; 
console.log(figureWorkClass); */


// CATEGORIES

/* DEBUT Création des Eléments des catégories */
async function categoriesElements(categories) {
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
//categoriesElements(categories);
/* FIN Création des Eléments des catégories */




/* function myFunction() {
    //document.getElementById("demo").innerHTML = "Hello World";
    const buttonCatId = document.querySelector(".categ").getAttribute("id").split(" ")[0];
    console.log(buttonCatId);
}
myFunction(); */

//const buttonCatId = document.querySelectorAll(".categ");
//const catId = buttonCatId.getAttribute("id");
//buttonCatId.addEventListener("click", myFunction);
//console.log(catId);

/* for (const name of buttonCatId.getAttributeNames()) {
    const value = buttonCatId.getAttribute(name);
    console.log(name, value);
  } */



//const catAttributes = document.querySelector(".categ"); 
//let catIdAttributes = catAttributes.getAttribute("id");
//document.getElementById("demo").innerHTML = catIdAttributes;

    const catAll = document.getElementById("cat-0");
    const idCatAll = catAll.getAttribute("id");


    const cat1 = document.getElementById("cat-1").getAttribute("id");
    const cat2 = document.getElementById("cat-2").getAttribute("id");
    const cat3 = document.getElementById("cat-3").getAttribute("id");
    //const cat4 = document.getElementById("cat-4").getAttribute("id");


    console.log(idCatAll);
    console.log(cat1);
    console.log(cat2);

console.log(cat3);
//console.log(cat4);

//const element = document.getElementById("myBtn");
/* catAttributes.addEventListener("click", function() {
    let catIdAttributes = catAttributes.getAttribute("id");
    let workClassAttributes = workAttributes.getAttribute("class");
    console.log(catIdAttributes);
    console.log(workClassAttributes);
 */



/* if ( catIdAttributes === workClassAttributes) {
console.log(catIdAttributes);
console.log(workClassAttributes);
//getWorks();
} */
//});


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











