

// const boutonSeDeconnecter = document.getElementById('se-deconnecter');
const messageErreur = document.getElementById('message-erreur');

// Vérifier si un jeton de session est stocké
const token = localStorage.getItem('token');

// const formulaireConnexion = document.getElementById('formulaireConnexion');
const boutonSeConnecter = document.querySelector(".se-connecter");
const boutonSeDeConnecter = document.querySelector(".se-deconnecter");
// const idEmail = document.getElementById("id-mail");




function creationNavigation () {
	const laNavigation = document.getElementById("navigation");

	// Création de l'élément HTML li
	const liNavigationPorfolio = document.createElement("li");
	const liNavigationContact = document.createElement("li");
	const liNavigationConnexion = document.createElement("li");
	const liNavigationDeConnexion = document.createElement("li");
	const liNavigationInsta = document.createElement("li");
	
	// Création de l'élément HTML a
	const aNavigationPorfolio = document.createElement("a");
	const aNavigationContact = document.createElement("a");
	const aNavigationConnexion = document.createElement("a");
	const aNavigationDeConnexion = document.createElement("a");
	const aNavigationInsta = document.createElement("a");
	const imgNavigationInsta = document.createElement("img");


	 // Création des attibuts et Ajout du contenu 
	 aNavigationPorfolio.setAttribute('href', './index.html#porfolio');
	 aNavigationPorfolio.textContent = "projets";

	 aNavigationContact.setAttribute('href', './index.html#contact');
	 aNavigationContact.textContent = "contact";
	 
	 aNavigationConnexion.setAttribute('href', './login.html');
	 aNavigationDeConnexion.setAttribute('href', './logout');
	 aNavigationConnexion.textContent = "LogIn";
	 aNavigationDeConnexion.textContent = "LogOut";
	//  aNavigationConnexion.setAttribute('id', 'se-connecter');

	 aNavigationConnexion.setAttribute('class', 'se-connecter');
	 aNavigationDeConnexion.setAttribute('class', 'se-deconnecter');


	//  aNavigationDeConnexion.setAttribute('id', 'se-deconnecter');

	 aNavigationInsta.setAttribute('href', '#');
	 imgNavigationInsta.setAttribute('src', './assets/icons/instagram.png');
	 imgNavigationInsta.setAttribute('alt', '.Instagram');

	 liNavigationPorfolio.append(aNavigationPorfolio);
	 liNavigationContact.append(aNavigationContact);
	 liNavigationConnexion.append(aNavigationConnexion);
	 liNavigationDeConnexion.append(aNavigationDeConnexion);
	 aNavigationInsta.append(imgNavigationInsta);
	 liNavigationInsta.append(aNavigationInsta);

	
  
	if (token !== null) {
			
			laNavigation.appendChild(
				liNavigationPorfolio,
				liNavigationContact,
				liNavigationDeConnexion,
				liNavigationInsta
			);	
			window.location.href = 'index.html';
	} else {
		laNavigation.appendChild(
			liNavigationPorfolio,
			liNavigationContact,
			liNavigationConnexion,
			liNavigationInsta
		);	
		window.location.href = 'index.html';
	}
}

creationNavigation ()










// boutonsConnexion()

boutonSeConnecter.addEventListener('submit', function(event) {
    event.preventDefault();

    const loginEmail = document.getElementById("id-email");
    const loginPassword = document.getElementById("id-password");

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
            const token = data.token;
            localStorage.setItem('token', token);
            // Redirigez vers la page d'accueil ou autre
            window.location.href = 'index.html';
        }
    })
    .catch(error => {
        console.error('Erreur lors de la connexion:', error);
        messageErreur.textContent = 'Une erreur est survenue. Veuillez réessayer.';
    });
});

function laDeconnexion() {
	boutonSeDeconnecter.addEventListener('click', function() {
		// Déconnectez-vous en détruisant le jeton de session
		localStorage.removeItem('token');
	
		// Redirigez vers la page de connexion ou autre
		window.location.href = 'index.html';
	});

} 





















