/* DEBUT - Création formulaire de connexion à l'administration du site */
const selectSectionLogin = document.getElementById('login');
function loginElements() {
	// Création des Eléments HTML pour la connexion
	  //const loginElement = document.getElementById('login');
	  const formElement = document.createElement("form");
	  formElement.setAttribute('id', 'id-login');
	  formElement.setAttribute('method', 'post');

	
	  const labelEmailElement = document.createElement("label");
	  labelEmailElement.setAttribute('for', 'id-email');

	  const inputEmailElement = document.createElement("input");
	  inputEmailElement.setAttribute('type', 'email');
	  inputEmailElement.setAttribute('name', 'name-email');
	  inputEmailElement.setAttribute('id', 'id-email');


	  const inputPasswordElement = document.createElement("input");
	  const labelPasswordElement = document.createElement("label");
	  labelPasswordElement.setAttribute('for', 'id-password');
	  inputPasswordElement.setAttribute('type', 'password');
	  inputPasswordElement.setAttribute('name', 'name-password');
	  inputPasswordElement.setAttribute('id', 'id-password');

	
	  
	  
	
	  const buttonElement = document.createElement("button");
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
	  selectSectionLogin.appendChild(formElement);
    //return selectSectionLogin;
}
loginElements();
/* FIN - Création formulaire de connexion à l'administration du site */





/* DEBUT - Recupération des boutons de Connexion et de Déconnexion */
//const boutonDeConnexion = document.getElementById('connexion');
//const selectButtonLogin = document.getElementById('connexion');
/* FIN - Recupération des boutons de Connexion et de Déconnexion */


/* DEBUT - Action sur bouton de connexion */
//const formulaireConnexion = document.getElementById('id-login');
const selectButtonConnexion = document.getElementById('id-login');
//const boutonDeconnexion = document.getElementById('boutonDeconnexion');
//const selectButtonDeConnexion = document.querySelector("deconnecter");
//const messageErreur = document.getElementById('messageErreur');


selectButtonConnexion.addEventListener('submit', function(event) {
    event.preventDefault();

    const loginEmail = document.getElementById("id-email").value;
    const loginPassword = document.getElementById("id-password").value;

    // Envoyez les informations d'identification à l'API distante
    fetch('http://localhost:5678/api/users/login', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
		 	email: loginEmail, 
		 	password: loginPassword,
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'error') {
            messageErreur.textContent = data.message;
        } else {
            // Connexion réussie, enregistrez le token de session
            const loginSessionToken = data.token;
			sessionStorage.setItem('tokenKey', loginSessionToken);

			
            // Redirigez vers la page d'accueil ou autre
            window.location.href = 'index.html';
        }
    })
    .catch(error => {
        console.error('Erreur lors de la connexion:', error);
        messageErreur.textContent = 'Une erreur est survenue. Veuillez réessayer.';
    });
});
