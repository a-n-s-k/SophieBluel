// Récupération des projets depuis l'API works
/* const reponse = fetch("http://localhost:5678/api/works");
const projets = reponse.json(); */
async function lesProjets() {
  const response = await fetch("http://localhost:5678/api/works");
  // const projets = Response.json(data);
  const projets = await response.json(data);
  console.log(projets);
}


// Créez les élements HTML du DOM

const projet = lesProjets();
const imageElement = document.createElement("img");
imageElement.src = projet.imageUrl;
imageElement.alt = projet.title;
const titreElement = document.createElement("figcaption");
titreElement.innerText = projet.title;
/* const prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${article.prix} €`; */
/* const categorieElement = document.createElement("p");
categorieElement.innerText = projet.category.name; */

// Rattachement des ces éléments à leur parent 
/* const divGalerie = document.querySelector(".gallery");
divGalerie.appendChild(imageElement);
divGalerie.appendChild(titreElement); */
// divGalerie.appendChild(prixElement);
// divGalerie.appendChild(categorieElement);



