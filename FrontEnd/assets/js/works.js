
const laGalerie = document.querySelector("div");
fetch('http://localhost:5678/api/works')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error, status = ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    for (const product of data) {

      // Création de l'élément HTML figure
      const figureProjet = document.createElement("figure");
       // Création de l'élément HTML img
      const imageProjet = document.createElement("img");
       // Création de l'attibut src de l'élément HTML img et ajout de son contenu
      imageProjet.src = product.imageUrl;
       // Création de l'attibut alt de l'élément HTML img et ajout de son contenu
      imageProjet.alt = product.title;
      // Création de l'élément HTML figcaption
      const figcaptionProjet = document.createElement("figcaption");
      // Ajout du contenu entre les balises ouvrante et fermante figcaption
      figcaptionProjet.textContent = product.title;

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


  

  




