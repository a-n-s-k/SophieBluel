
// Validation formulaire sur la page de connexion avant soumission.
// Pour l'addresse email
/* const idEmail = document.getElementById("id-mail");
idEmail.addEventListener("input", (event) => {
  if (idEmail.validity.typeMismatch) {
    idEmail.setCustomValidity("On attend une adresse email !");
  } else {
    idEmail.setCustomValidity("");
  }
}); */





// There are many ways to pick a DOM node; here we get the form itself and the email
// input box, as well as the span element into which we will place the error message.
const elForm = document.querySelector("form");
const idEmail = document.getElementById("id-email");
const emailError = document.querySelector("#id-email + span.error");

idEmail.addEventListener("input", (event) => {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (!idEmail.validity.valid) {
    // If there is still an error, show the correct error
    showError();
  } else {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.textContent = ""; // Reset the content of the message
    emailError.className = "error"; // Reset the visual state of the message
  }
});

elForm.addEventListener("submit", (event) => {
  // if the email field is valid, we let the form submit
  if (!idEmail.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
});


function showError() {
  if (idEmail.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = "Vous devez saisir une adresse e-mail.";
  } else if (idEmail.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = "La valeur saisie doit être une adresse e-mail.";
  } else if (idEmail.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    emailError.textContent = `L'e-mail doit être au moins ${idEmail.minLength} caractères et au plus ${idEmail.maxLength}; vous avez entré ${idEmail.value.length}.`;
  } else if (idEmail.validity.patternMismatch) {
    emailError.textContent = "La valeur saisie doit être une adresse e-mail valide.";
  } 
  
  // Set the styling appropriately
  emailError.className = "error active";
}
















                    
















