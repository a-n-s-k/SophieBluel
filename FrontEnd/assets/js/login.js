/* DEBUT - Création formulaire de connexion à l"administration du site */
const selectSectionLogin = document.getElementById("login");
async function loginElements() {
	const formElement = document.createElement("form");
	formElement.setAttribute("id", "id-login");
	formElement.setAttribute("method", "post");

	const labelEmailElement = document.createElement("label");
	labelEmailElement.setAttribute("for", "id-email");
	labelEmailElement.setAttribute("value", "E-mail");
	labelEmailElement.textContent = "E-mail";

	const inputEmailElement = document.createElement("input");
	inputEmailElement.setAttribute("type", "email");
	inputEmailElement.setAttribute("name", "name-email");
	inputEmailElement.setAttribute("id", "id-email");

	const labelPasswordElement = document.createElement("label");
	labelPasswordElement.setAttribute("value", "Mot de passe");
	labelPasswordElement.textContent = "Mot de passe";
	labelPasswordElement.setAttribute("for", "id-password");

	const inputPasswordElement = document.createElement("input");
	inputPasswordElement.setAttribute("type", "password");
	inputPasswordElement.setAttribute("name", "name-password");
	inputPasswordElement.setAttribute("id", "id-password");
	  
	const buttonElement = document.createElement("button");
	buttonElement.setAttribute("type", "submit");
	buttonElement.setAttribute("id", "id-connexion");
	buttonElement.setAttribute("value", "connexion");
	
	const buttonElementContent = document.createTextNode("Se connecter");
	buttonElement.appendChild(buttonElementContent);

	const motDePasseOublie = document.createElement("a");
	motDePasseOublie.setAttribute("href", "#");
	motDePasseOublie.textContent = "Mot de passe oublié";
	formElement.append(
		labelEmailElement,
		inputEmailElement,
		labelPasswordElement,
		inputPasswordElement,
		buttonElement,
		motDePasseOublie
	);
	selectSectionLogin.appendChild(formElement);
}
loginElements();
/* FIN - Création formulaire de connexion à l"administration du site */

const selectButtonConnexion = document.getElementById("id-login");
selectButtonConnexion.addEventListener("submit", function(event) {
    event.preventDefault();
    const loginEmail = document.getElementById("id-email").value;
    const loginPassword = document.getElementById("id-password").value;
    // Envoyez les informations d"identification à l"API distante
    fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
		 	email: loginEmail, 
		 	password: loginPassword,
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.userId === 1) {
			 // Connexion réussie, enregistrez le token de session
			 const loginSessionToken = data.token;
			 sessionStorage.setItem("tokenKey", loginSessionToken);
			 // Redirigez vers la page d"accueil ou autre
			 window.location.href = "index.html";			
        } else {
		   alert("Votre email ou mot de passe est incorrect.");			
        }
    }); 
});