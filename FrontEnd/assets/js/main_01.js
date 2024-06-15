
// Clean LocalStorage Function
function cleanLocalStorage() {
  for(const key in localStorage) {
      delete localStorage[key];
  }
}
// cleanLocalStorage();

// Works API URL and LocalStorage key
const urlWorks = 'http://localhost:5678/api/works';
const clefLocalStorageWorks = 'ls-works'

// Categories API URL and LocalStorage key
const urlCategories = 'http://localhost:5678/api/categories';
const clefLocalStorageCategories = 'ls-categories'

// Get Element by class gallery
const selectDivGallery = document.querySelector(".gallery");
// const selectDivGallery = document.getElementsByName('.gallery');
console.log(selectDivGallery);



// Async Function For Fetch Data and Save To LocalStorage
async function fetchDataAndSaveToLocalStorage(url, key) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erreur de requête : ${response.status}`);
    }
    const data = await response.json();



    const storedData = localStorage.getItem(key)
    if (!storedData) {
      // const userData = JSON.parse(storedData)
      localStorage.setItem(key, JSON.stringify(data));
      return data;

    } else if (storedData.length !== data.length ){
      localStorage.setItem(key, JSON.stringify(data));
      return data;
      // console.log('User data not found in local storage')
    } else {
      const worksData = JSON.parse(storedData)
      return worksData;
    }





/*     localStorage.setItem(key, JSON.stringify(data));
    return data; */
  } catch (error) {
    console.error(error);
    return null;
  }
}


// LocalStorage Works
const donneesWorks = fetchDataAndSaveToLocalStorage(urlWorks, clefLocalStorageWorks);
// Valeur LocalStorage Works
const valeurLocalStorageWorks = localStorage[clefLocalStorageWorks];
console.log(valeurLocalStorageWorks);
// Longueur Valeur LocalStorage Works
const longueurValeurLocalStorageWorks = valeurLocalStorageWorks.length;
console.log(longueurValeurLocalStorageWorks);



// LocalStorage Catgories
const donneesCategories = fetchDataAndSaveToLocalStorage(urlCategories, clefLocalStorageCategories);
// Valeur LocalStorage Works
const valeurLocalStorageCategories = localStorage[clefLocalStorageCategories];
console.log(valeurLocalStorageCategories);
// Longueur Valeur LocalStorage Works
const longueurValeurLocalStorageCategories = valeurLocalStorageCategories.length;
console.log(longueurValeurLocalStorageCategories);



// DEBUT Boucle sur les clés
/* for (let i=0; i< localStorage.length; i++) {
  let clef = localStorage.key(i);
  let valeur = localStorage[clef];
  console.log(`localStorage ${clef}:  ${valeur}`);
} */
// FIN Boucle sur les clés





export function createElementsWorks(data, targetElement) {
  // Ensure targetElement exists and is a valid element
  if (!targetElement || !targetElement.nodeType === 1) {
    console.error('Invalid target element provided. Please provide a valid DOM element.');
    return;
  }

  // Fragment for efficient DOM manipulation
  const fragment = document.createDocumentFragment();

  for (const work of data) {
    console.log(work);
    const figure = document.createElement("figure");
    figure.classList.add("cat-filter", work.categoryId);

    const image = document.createElement("img");
    image.src = work.imageUrl;
    image.alt = work.title;

    const figcaption = document.createElement("figcaption");
    figcaption.textContent = work.title;

    figure.append(image, figcaption);
    fragment.appendChild(figure);
  }

  // Append all elements at once
  targetElement.appendChild(fragment);
}





createElementsWorks(valeurLocalStorageWorks, selectDivGallery);















