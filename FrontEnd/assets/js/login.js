import {statutPromesse, jsonPromesse} from "./mon-module.js";

const loginEmail = document.getElementById("email");
const loginPassword = document.getElementById("password");

function laConnexion () {
  fetch('http://localhost:5678/api/users/login', {
        method: "POST",
        credentials: "include",
        headers: {
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

  .then(console.log(data))
  .catch(function(error) {
  console.log("Il y a un problème. Status Code:", error);
  });
  return;
}
laConnexion ();
                    
















