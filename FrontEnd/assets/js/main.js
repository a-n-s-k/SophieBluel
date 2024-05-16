import {statutPromesse, jsonPromesse} from "./mon-module.js";
import {lesCategories, donneesCategories} from "./categories.js";
import {affichageProjets} from "./projets.js";
// import {laConnexion} from "./login.js";
// import {getCookie} from "./set-get-check-cookies.js";
// import {loginEmail, cookievalue} from "./login.js";


/* const cookiename = "cookieSophieBluel";
const cookievalue = "hhuu58gtdcv46662"; */
// const cookiedays = 2;


/* let x = document.cookie;
alert(x);
console.log(x); */

/* const array = new Uint32Array(1);
self.crypto.getRandomValues(array);
const cookievalue = for (const num of array) {
  console.log(num);
  alert(num);
} */

// setCookie(cookiename, cookievalue);

/* if (typeof cookiename !== 'undefined') {
  console.log(getCookie(cookiename));
} else {
  console.log(setCookie(cookiename, cookievalue, cookiedays));
} */

function lesProjets () {
  fetch('http://localhost:5678/api/works')
  .then(statutPromesse)
  .then(jsonPromesse)
  .then(affichageProjets)
  .catch(function(error) {
  console.log("Il y a un problème. Status Code:", error);
  });
}
lesProjets ();



lesCategories;
function touteslesCategories () {
    fetch('http://localhost:5678/api/categories')
    .then(statutPromesse)
    .then(jsonPromesse)
    .then(donneesCategories)
    .catch(function(error) {
    console.log("Il y a un problème. Status Code:", error);
    });
  }
touteslesCategories ();

/* alert(getCookie()); */

let getCookies = function(){
  let pairs = document.cookie.split(";");
  let cookies = {};
  for (let i=0; i<pairs.length; i++){
    let pair = pairs[i].split("=");
    cookies[(pair[0]+'').trim()] = unescape(pair.slice(1).join('='));
  }
  return cookies;
}
var myCookies = getCookies();
alert(myCookies.secret); // "do not tell you"