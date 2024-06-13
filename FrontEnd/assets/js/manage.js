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





// Function for Set Local Storage
export function setLocalStorage(key, value) {
	// Check if local storage is available
	if (typeof localStorage !== "undefined") {
	  // Convert value to string if not already
	  if (typeof value !== "string") {
		value = JSON.stringify(value);
	  }
	
	  localStorage.setItem(key, value);
	} else {
	  // Handle error if local storage is not supported
	  console.error("Local storage is not supported by this browser.");
	}
  }

  
  
// Funtion for Remove from Local Storage
  export function removeFromLocalStorage(key) {
	// Check if local storage is available
	if (typeof localStorage !== "undefined") {
	  localStorage.removeItem(key);
	} else {
	  // Handle error if local storage is not supported
	  console.error("Local storage is not supported by this browser.");
	}
  }

























































