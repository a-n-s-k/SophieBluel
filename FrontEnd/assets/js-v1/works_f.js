function statutPromesse (response) {
  if (response.status >= 200 && response.status < 300) {
  return Promise.resolve(response)
  } else {
  return Promise.reject(new Error(response.statusText))
  }
}

function jsonPromesse (response) {
  const donnees = response.json();
  return donnees;
}



function affichageProjets (data) {
  const laGalerie = document.querySelector("div.gallery");
  for (const projet of data) {

if (projet.categoryId !== 0) {
    
    // Création de l'élément HTML figure
    const figureProjet = document.createElement("figure");
     // Création de l'élément HTML img
    const imageProjet = document.createElement("img");
     // Création de l'attibut src de l'élément HTML img et ajout de son contenu
    imageProjet.src = projet.imageUrl;
     // Création de l'attibut alt de l'élément HTML img et ajout de son contenu
    imageProjet.alt = projet.title;
    // Création de l'élément HTML figcaption
    const figcaptionProjet = document.createElement("figcaption");
    // Ajout du contenu entre les balises ouvrante et fermante figcaption
    figcaptionProjet.textContent = projet.title;
    figureProjet.append(
        imageProjet,
        figcaptionProjet
    );
    laGalerie.appendChild(figureProjet);
  }
  }
  return;
}

function affichageFiltreCategorie (data) {
  const laGalerie = document.querySelector("div.gallery");
 
  for (const projet of donnees) {
    // Création de l'élément HTML figure
    if (projet.categoryId === 3){
      const figureProjet = document.createElement("figure");
      // Création de l'élément HTML img
     const imageProjet = document.createElement("img");
      // Création de l'attibut src de l'élément HTML img et ajout de son contenu
     imageProjet.src = projet.imageUrl;
      // Création de l'attibut alt de l'élément HTML img et ajout de son contenu
     imageProjet.alt = projet.title;
     // Création de l'élément HTML figcaption
     const figcaptionProjet = document.createElement("figcaption");
     // Ajout du contenu entre les balises ouvrante et fermante figcaption
     figcaptionProjet.textContent = projet.title;
     figureProjet.append(
         imageProjet,
         figcaptionProjet
     );
     laGalerie.appendChild(figureProjet);
    }  
  }
  return;

}


/* const fruits = [
  {name: 'strawberry', color: 'red'},
  {name: 'chery', color: 'red'},
  {name: 'apple', color: 'green'},
  {name: 'grape', color: 'yellow'},
] */
/* let redFruits = [];

reponse.forEach (function (donnee) {
  if (donnee.categoryId !== 0) redFruits.push(donnee.category.name);
})

console.log(redFruits); */

// output: strawberry,chery







function lesProjets () {
  fetch('http://localhost:5678/api/works')
  .then(statutPromesse)
  .then(jsonPromesse)
  .then(affichageProjets)
  /* .then(function(data) {
    const laGalerie = document.querySelector("div.gallery");
    for (const projet of data) {
      // Création de l'élément HTML figure
      const figureProjet = document.createElement("figure");
       // Création de l'élément HTML img
      const imageProjet = document.createElement("img");
       // Création de l'attibut src de l'élément HTML img et ajout de son contenu
      imageProjet.src = projet.imageUrl;
       // Création de l'attibut alt de l'élément HTML img et ajout de son contenu
      imageProjet.alt = projet.title;
      // Création de l'élément HTML figcaption
      const figcaptionProjet = document.createElement("figcaption");
      // Ajout du contenu entre les balises ouvrante et fermante figcaption
      figcaptionProjet.textContent = projet.title;

      figureProjet.append(
          imageProjet,
          figcaptionProjet
      );
      laGalerie.appendChild(figureProjet);
    }
  }) */
  .catch(function(error) {
  console.log("Il y a un problème. Status Code:", error);
  });
  return;
}
lesProjets ();



