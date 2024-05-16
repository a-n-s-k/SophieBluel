import {statutPromesse, jsonPromesse} from "./mon-module.js";
// import {getCookie, setCookie} from "./recuperer-cookie.js";

/* const array = new Uint32Array(1);
self.crypto.getRandomValues(array); */

export const cookievalue = (cv => {
  const array = new Uint32Array(1);
  self.crypto.getRandomValues(array);
  for (const num of array) {
    cv = num;
  }
});


/* const form = document.getElementById("form");
const submitter = document.querySelector("button[value=connexion]");
const formData = new FormData(form, submitter); */


export const loginEmail = document.getElementById("email");
const loginPassword = document.getElementById("password");


// document.getElementById("seconnecter").onclick = function () {
//   location.href = "www.yoursite.com";
// };
/* export function seconnecter() {
  location.href = "./index.html";
} */
/* function seConnecter() {
  if (Response.status === 200)
  location.replace("./index.html")
} */
export function laConnexion () {
  fetch('http://localhost:5678/api/users/login', {
        method: "POST",
        mode: 'no-cors',
        credentials: "same-origin",
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
  .then(window.location.host('127.0.0.1:5501/index.html'))
  .catch(function(error) {
  console.log("Il y a un problème. Status Code:", error);
  });
  return;
}
laConnexion ();
                    
















