
const lesCategories = document.querySelector("div.categorie");
fetch('http://localhost:5678/api/categories')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error, status = ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
          // Création de l'élément HTML h3 pour la catégorie tous
          const h30Categorie = document.createElement("h3");
          // Création de l'élément HTML a pour la catégorie tous
          const a0Categorie = document.createElement("a");
          // Création de l'attibut href de l'élément HTML img et ajout de son contenu
      a0Categorie.href = "#";
          // Ajout du contenu entre les balises ouvrante et fermante a pour la catégorie tous
      a0Categorie.textContent = "Tous";
      h30Categorie.append(a0Categorie);
    //   lesCategories.appendChild(h3Categorie);


    for (const categorie of data) {
        // Création de l'élément HTML h3
        const h3Categorie = document.createElement("h3");
        // Création de l'élément HTML a
        const aCategorie = document.createElement("a");
      // Création de l'attibut href de l'élément HTML img et ajout de son contenu
      aCategorie.id = categorie.id;
      // Création de l'attibut href de l'élément HTML img et ajout de son contenu
      aCategorie.onclick = "affichageCategorie()";
      // Ajout du contenu entre les balises ouvrante et fermante figcaption
      aCategorie.textContent = categorie.name;

      h3Categorie.append(aCategorie);
      lesCategories.prepend(h30Categorie);
      lesCategories.appendChild(h3Categorie);

    }
    document.getElementById(`${categorie.id}`).addEventListener("click", affichageCategorie);
    function affichageCategorie() {
      document.getElementById(`${categorie.id}`).innerHTML = "YOU CLICKED ME!";
    }
  })
  .catch((error) => {
    const p = document.createElement("p");
    p.appendChild(document.createTextNode(`Error: ${error.message}`));
    // document.body.insertBefore(p, lesCategories);
  });

 /*  document.getElementById(`${categorie.id}`).addEventListener("click", myFunction);
  function affichageCategorie() {
    document.getElementById(`${categorie.id}`).innerHTML = "YOU CLICKED ME!";
  }
  function affichageCategorie() {
    document.getElementById(`${categorie.id}`).innerHTML = "YOU CLICKED ME!";
  } */


/*   const laGalerieCatId = document.querySelector("div.gallery");
  fetch('http://localhost:5678/api/works')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error, status = ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
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
  })
  .catch((error) => {
    const p = document.createElement("p");
    p.appendChild(document.createTextNode(`Error: ${error.message}`));
    document.body.insertBefore(p, laGalerie);
  });
 */



  

  



