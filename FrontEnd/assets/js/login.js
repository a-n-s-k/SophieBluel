
// Validation formulaire sur la page de connexion avant soumission.
// Pour l'addresse email
const idEmail = document.getElementById("id-mail");
idEmail.addEventListener("input", (event) => {
  if (idEmail.validity.typeMismatch) {
    idEmail.setCustomValidity("On attend une adresse email !");
  } else {
    idEmail.setCustomValidity("");
  }
});















function seConnecter () {
	const boutonSeConnecter = document.querySelector("#se-connecter");
	boutonSeConnecter.addEventListener("click", function () {
	  window.localStorage.setItem(`${loginEmail},${loginPassword}`);
	  window.location.href('http://127.0.0.1:5501/index.html');
	});
}

const loginEmail = document.getElementById("email");
const loginPassword = document.getElementById("password");
// let auth = btoa(`${loginEmail}:${loginPassword}`);
function laConnexion () {
	fetch('http://localhost:5678/api/users/login', {
		  method: "POST",
		  credentials: "include",
		  headers: {
			// 'Authorization': `Basic ${auth}`,
			"Content-Type": "application/json",
			"Accept": "application/json",
		  },
		  body: JSON.stringify({
			email: loginEmail, 
			password: loginPassword, 
		  }) 
		})
	.then(statutPromesse)
	.then(jsonPromesse)
	.then(seConnecter)
	.catch(function(error) {
	console.log("Il y a un problème. Status Code:", error);
	});
  }
  laConnexion ();







                    
















