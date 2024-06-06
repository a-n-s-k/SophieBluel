





/* DEBUT Création des Eléments des catégories */
export function filterCategory () {
    const categoryButtons = document.querySelectorAll('.cat-button');
    const galleryFigures = document.querySelectorAll('.gallery figure');
    
    categoryButtons.forEach(button => {
      button.addEventListener('click', () => {
        //  const selectedCategoryId = button.id;
         const selectCatButton = document.getElementsByClassName('cat-button');
         const selectCatButtonId = selectCatButton.getAttribute("id");
  
    
        // Reset all figures
        galleryFigures.forEach(figure => figure.classList.remove('hidden'));
    
        // Filter figures based on category
        if (selectCatButtonId !== '0') { // '0' is for "Tous" (All) button
          galleryFigures.forEach(figure => {
            const figureCategoryId = figure.classList.contains(`cat-filter ${selectCatButtonId}`);
            if (!figureCategoryId) {
              figure.classList.add('hidden');
            }
          });
        }
    
        // Update active class for button styling
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
      });
    });
}
