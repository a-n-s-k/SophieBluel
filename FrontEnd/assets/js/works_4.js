
const myList = document.querySelector("div");
fetch('http://localhost:5678/api/works')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error, status = ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    for (const product of data) {
      const figureItem = document.createElement("figure");
      const imageItem = document.createElement("img");
      imageItem.src = product.imageUrl;
      imageItem.alt = product.title;
      const figcaptionItem = document.createElement("figcaption");
      figcaptionItem.textContent = product.title;



      const nameElement = document.createElement("strong");
      nameElement.textContent = product.Name;

/*             const priceElement = document.createElement("strong");
      priceElement.textContent = `£${product.Price}`; */

      figureItem.append(
          imageItem,
          figcaptionItem,
        `a pour catégorie: ${product.category.name}.`
      );
      myList.appendChild(figureItem);
    }
  })
  .catch((error) => {
    const p = document.createElement("p");
    p.appendChild(document.createTextNode(`Error: ${error.message}`));
    document.body.insertBefore(p, myList);
  });


  

  




