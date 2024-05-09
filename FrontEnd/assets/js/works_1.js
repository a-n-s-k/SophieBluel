// const lesProjets = document.querySelector("section");
const projets = document.getElementById('porfolio');
const url = 'http://localhost:5678/api/works';
const projetImage = document.querySelector("img");

// let maRequete = new Request("fleurs.jpg");

fetch(url)
  .then(function (reponse) {
    if (!response.ok) {
      throw new Error(`erreur HTTP! statut: ${reponse.status}`);
    }
    // return reponse.blob();
    
  })
  .then(function (reponse) {
    let URLobjet = URL.createObjectURL(reponse);
    projetImage.src = URLobjet;
    console.log(projetImage.src)
  });
