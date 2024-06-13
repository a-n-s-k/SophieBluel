/* DEBUT - Création de la fenêtre modale */
export function createElementsModale (data) {
  // Création des Eléments HTML et insersion des données projets
  const selectSectionContent = document.getElementById("section-id-mod-content");

  const createDivModaleGalleryContent = document.createElement("div");
  createDivModaleGalleryContent.setAttribute('id', 'modale-gallery-content');
  selectSectionContent.appendChild(createDivModaleGalleryContent);

  for (const work of data) {
    if (work.categoryId !== 0) {
      const createFigureWorks = document.createElement("figure");
      createFigureWorks.id = work.id;
      const createImageWorks = document.createElement("img");
      createImageWorks.src = work.imageUrl;
      createImageWorks.alt = work.title;
      createImageWorks.setAttribute('class', 'class-work-image');

      const createIconRemoveWork = document.createElement("i");
      createIconRemoveWork.setAttribute('class', 'fa-solid fa-trash-can');

      const createButtonRemoveWork = document.createElement("button");
      createButtonRemoveWork.setAttribute('class', 'button-work-remove');
      createButtonRemoveWork.appendChild(createIconRemoveWork);

      // createFigcaptionWorks.textContent = work.title;
      createFigureWorks.append(
        createImageWorks,
        createButtonRemoveWork,
      );
      createDivModaleGalleryContent.appendChild(createFigureWorks);
    }
  }
}
  


/* DEBUT - Création formulaire de connexion à l'administration du site */
function createElementsModaleForm() {
	// Création des Eléments HTML pour la connexion
	  const loginElement = document.getElementById('login');
	  const formElement = document.createElement("form");
	
	  const labelEmailElement = document.createElement("label");
	  const labelPasswordElement = document.createElement("label");
	
	  const inputEmailElement = document.createElement("input");
	  const inputPasswordElement = document.createElement("input");
	
	  const buttonElement = document.createElement("button");

	  formElement.setAttribute('id', 'id-login');
	  formElement.setAttribute('method', 'post');
	
	  labelEmailElement.setAttribute('for', 'id-email');
	  inputEmailElement.setAttribute('type', 'email');
	  inputEmailElement.setAttribute('name', 'name-email');
	  inputEmailElement.setAttribute('id', 'id-email');
	 
	  labelPasswordElement.setAttribute('for', 'id-password');
	  inputPasswordElement.setAttribute('type', 'password');
	  inputPasswordElement.setAttribute('name', 'name-password');
	  inputPasswordElement.setAttribute('id', 'id-password');
	
	  buttonElement.setAttribute('type', 'submit');
	  buttonElement.setAttribute('id', 'id-connexion');
	  buttonElement.setAttribute('value', 'connexion');
	
	  const buttonElementContent = document.createTextNode("Se connecter");
	  buttonElement.appendChild(buttonElementContent);
	
	  formElement.append(
		labelEmailElement,
		inputEmailElement,
		labelPasswordElement,
		inputPasswordElement,
		buttonElement
	  );
	  loginElement.appendChild(formElement);
    return loginElement;
	}
	createLoginForm()
/* FIN - Création formulaire de connexion à l'administration du site */





















































