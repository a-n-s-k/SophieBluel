import {statutPromesse, jsonPromesse} from "./mon-module.js";
import {lesCategories, donneesCategories} from "./categories.js";
import {affichageProjets} from "./projets.js";




function lesProjets () {
  fetch('http://localhost:5678/api/works')
  .then(statutPromesse)
  .then(jsonPromesse)
  .then(affichageProjets)
  .catch(function(error) {
  console.log("Il y a un problème. Status Code:", error);
  });
  return;
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

