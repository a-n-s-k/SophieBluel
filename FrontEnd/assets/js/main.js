

const loginElement = document.getElementById('login');

/* DEBUT - Vérifier si un jeton de session est stocké et le recupéré */
const token = localStorage.getItem('token');
/* FIN - Vérifier si un jeton de session est stocké et le recupéré */


/* DEBUT - Fonction Vérification du status de la réponse API */
function statutPromesse (response) {
  if (response.status >= 200 && response.status < 300) {
  return Promise.resolve(response)
  } else {
  return Promise.reject(new Error(response.statusText))
  }
}
/* FIN - Fonction Vérification du status de la réponse API */

/* DEBUT - Transformation de la réponse API en objet JavaScript*/
function jsonPromesse (response) {
  return response.json()
}
/* FIN - Transformation de la réponse API en objet JavaScript*/

/* DEBUT - Création du bouton mode édition*/
function boutonEdition() {
  // Création des Eléments du boubon mode edition
  const idModeEdition = document.getElementById("id-edition");

  const aModeEdition = document.createElement("a");
  aModeEdition.setAttribute('class', 'edition');
  aModeEdition.setAttribute('class', 'class-editer');
  aModeEdition.setAttribute('href', '#');

  const imageModeEdition = document.createElement("img");
  imageModeEdition.setAttribute('src', './assets/icons/editer.png');
  imageModeEdition.setAttribute('alt', 'Edition');

  const divModeEdition = document.createElement("div");
  divModeEdition.textContent = "Mode édition";

  aModeEdition.append(imageModeEdition, divModeEdition);

  idModeEdition.appendChild(aModeEdition);
}
/* FIN - Création du bouton mode édition*/


/* DEBUT - Création du bouton Modifier*/
function boutonModeModifier() {
  // Création des Eléments du boubon modifier
  const classDivMesProjets = document.querySelector("div.mesprojets");

  const aModeModifier = document.createElement("a");
  aModeModifier.setAttribute('class', 'modifier');
  aModeModifier.setAttribute('class', 'class-modifier');
  aModeModifier.setAttribute('href', '#');

  const imageModeModifier = document.createElement("img");
  imageModeModifier.setAttribute('src', './assets/icons/editer.png');
  imageModeModifier.setAttribute('alt', 'Edition');

  const divModeModifier = document.createElement("div");
  divModeModifier.textContent = "modifier";

  aModeModifier.append(imageModeModifier, divModeModifier);

  classDivMesProjets.appendChild(aModeModifier);
}
/* FIN - Création du bouton Modifier*/



/* DEBUT - Recupération des boutons de Connexion et de Déconnexion */
const boutonDeConnexion = document.getElementById('connexion');
if (token) {
  boutonDeConnexion.setAttribute('href', '#');
  boutonDeConnexion.textContent = "Logout";
  boutonEdition();
  boutonModeModifier()
  
  
} else {
  touteslesCategories ();
}
// const boutonSeConnecter = document.querySelector("#id-connexion");
/* FIN - Recupération des boutons de Connexion et de Déconnexion */





/* DEBUT - Action sur bouton de déconnexion */
boutonDeConnexion.addEventListener('click', function() {
  // Déconnectez-vous en détruisant le jeton de session
  localStorage.removeItem('token');

  // Redirigez vers la page de connexion ou autre
  window.location.href = 'index.html';
});
/* FIN - Action sur bouton de déconnexion */



function donneesCategories(data) {
  // Création des Eléments des catégories
  const lesCategories = document.querySelector("div.categorie");
  const h30Categorie = document.createElement("h3");
  const a0Categorie = document.createElement("a");
  a0Categorie.href = "#";
  a0Categorie.textContent = "Tous";
  h30Categorie.append(a0Categorie);
  for (const categorie of data) {
    const h3Categorie = document.createElement("h3");
    const aCategorie = document.createElement("a");
    aCategorie.id = categorie.id;
    aCategorie.onclick = "affichageCategorie()";
    aCategorie.textContent = categorie.name;
    h3Categorie.append(aCategorie);
    lesCategories.prepend(h30Categorie);
    lesCategories.appendChild(h3Categorie);
  }
}


function affichageProjets (data) {
  // Création des Eléments HTML et insersion des données projets
  const laGalerie = document.querySelector("div.gallery");
  for (const projet of data) {
    if (projet.categoryId !== 0) {
      const figureProjet = document.createElement("figure");
      const imageProjet = document.createElement("img");
      imageProjet.src = projet.imageUrl;
      imageProjet.alt = projet.title;
      const figcaptionProjet = document.createElement("figcaption");
      figcaptionProjet.textContent = projet.title;
      figureProjet.append(
        imageProjet,
        figcaptionProjet
      );
      laGalerie.appendChild(figureProjet);
    }
  }
}


function touteslesCategories () {
  fetch('http://localhost:5678/api/categories')
  .then(statutPromesse)
  .then(jsonPromesse)
  .then(donneesCategories)
  .catch(function(error) {
  console.log("Il y a un problème. Status Code:", error);
  });
}

function lesProjets () {
  fetch('http://localhost:5678/api/works')
  .then(statutPromesse)
  .then(jsonPromesse)
  .then(affichageProjets)
  .catch(function(error) {
  console.log("Il y a un problème. Status Code:", error);
  });
}
lesProjets ();




