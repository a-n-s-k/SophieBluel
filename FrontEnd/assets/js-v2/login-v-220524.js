// const formulaireConnexion = document.getElementById('formulaireConnexion');
const boutonSeConnecter = document.querySelector("#se-connecter");

// const idEmail = document.getElementById("id-mail");


const boutonSeDeconnecter = document.getElementById('se-deconnecter');
const messageErreur = document.getElementById('message-erreur');

// Vérifier si un jeton de session est stocké
const token = localStorage.getItem('token');
if (token) {
    // Utilisateur déjà connecté, redirigez vers la page d'accueil ou autre
    window.location.href = 'index.html';
    
}

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

boutonSeDeconnecter.addEventListener('click', function() {
    // Déconnectez-vous en détruisant le jeton de session
    localStorage.removeItem('token');

    // Redirigez vers la page de connexion ou autre
    window.location.href = 'index.html';
});





















