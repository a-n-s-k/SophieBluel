function statutPromesse (response) {
    if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
    } else {
    return Promise.reject(new Error(response.statusText))
    }
  }
  
  function jsonPromesse (response) {
    return response.json()
  }

const lesCategories = document.querySelector("div.categorie");
function touteslesCategories () {
    fetch('http://localhost:5678/api/categories')
    .then(statutPromesse)
    .then(jsonPromesse)
    .then(function(data) {
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
    })
    .catch(function(error) {
    console.log("Il y a un problème. Status Code:", error);
    });
    return;
  }
touteslesCategories ();







  

  




