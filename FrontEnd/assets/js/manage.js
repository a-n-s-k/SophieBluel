



/* DEBUT - Fonction Vérification du status de la réponse API */
export function statutPromesse (response) {
  if (response.status >= 200 && response.status < 300) {
  return Promise.resolve(response)
  } else {
  return Promise.reject(new Error(response.statusText))
  }
}
/* FIN - Fonction Vérification du status de la réponse API */

/* DEBUT - Transformation de la réponse API en objet JavaScript*/
export function jsonPromesse (response) {
  return response.json()
}
/* FIN - Transformation de la réponse API en objet JavaScript*/

/* DEBUT - Affichage des Erreurs*/
export function affichageErreurs (error) {
    return  `Il y a un problème. Status Code: ${error}`;
  }
/* FIN - Affichage des Erreurs*/




























































