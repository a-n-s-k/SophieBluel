export function statutPromesse (response) {
  if (response.status >= 200 && response.status < 300) {
  return Promise.resolve(response)
  } else {
  return Promise.reject(new Error(response.statusText))
  }
}

export function jsonPromesse (response) {
  return response.json()
}

export function creationElements () {
  // Création de l'élément HTML figure
const figureProjet = document.createElement("figure");
// Création de l'élément HTML img
const imageProjet = document.createElement("img");
// Création de l'élément HTML figcaption
const figcaptionProjet = document.createElement("figcaption");
  return (
figureProjet,
imageProjet,
figcaptionProjet
  );
}


export function creationAtributsElements () {
  // Création de l'attibut src de l'élément HTML img et ajout de son contenu
 imageProjet.src = projet.imageUrl;
  // Création de l'attibut alt de l'élément HTML img et ajout de son contenu
 imageProjet.alt = projet.title;
 // Ajout du contenu entre les balises ouvrante et fermante figcaption
 figcaptionProjet.textContent = projet.title;
 figureProjet.append(
     imageProjet,
     figcaptionProjet
 );
 laGalerie.appendChild(figureProjet);
  return;
}















