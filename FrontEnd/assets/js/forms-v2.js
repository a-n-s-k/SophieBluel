
function createLoginForm() {
  const loginElement = document.getElementById('login');
  const formElement = document.createElement("form");

  const labelEmailElement = document.createElement("label");
  const labelPasswordElement = document.createElement("label");

  const inputEmailElement = document.createElement("input");
  const inputPasswordElement = document.createElement("input");

  const buttonElement = document.createElement("button");
  const spanEmailElement = document.createElement("span");
  const spanPasswordElement = document.createElement("span");
  
  formElement.setAttribute('id', 'id-login');
  formElement.setAttribute('action', 'index.html');
  formElement.setAttribute('method', 'post');

  labelEmailElement.setAttribute('for', 'id-email');
  inputEmailElement.setAttribute('type', 'email');
  inputEmailElement.setAttribute('name', 'name-email');
  inputEmailElement.setAttribute('id', 'id-email');
  inputEmailElement.setAttribute('oninput', 'validateEmailInput()');
 
  labelPasswordElement.setAttribute('for', 'id-password');
  inputPasswordElement.setAttribute('type', 'password');
  inputPasswordElement.setAttribute('name', 'name-password');
  inputPasswordElement.setAttribute('id', 'id-password');
  inputPasswordElement.setAttribute('oninput', 'validateEmailInput()');

  spanEmailElement.setAttribute('class', 'email-err');

  buttonElement.setAttribute('type', 'submit');
  buttonElement.setAttribute('id', 'id-connexion');
  buttonElement.setAttribute('value', 'connexion');

  const buttonElementContent = document.createTextNode("Se connecter");
  buttonElement.appendChild(buttonElementContent);

 
  formElement.append(
    labelEmailElement,
    inputEmailElement,
    spanEmailElement,
    labelPasswordElement,
    inputPasswordElement,
    buttonElement
  );
  
// Create Elements for message

const messagedivElement = document.createElement("div");

// const messageElement = document.getElementById('message');
const messageh3Element = document.createElement("h3");
const messagepIdLetterElement = document.createElement("p");
const messagepIdCapitalElement = document.createElement("p");
const messagepIdNumberElement = document.createElement("p");
const messagepIdLengthElement = document.createElement("p");

messagedivElement.setAttribute('id', 'message');
messagepIdLetterElement.setAttribute('id', 'letter');
messagepIdLetterElement.setAttribute('class', 'invalid');
messagepIdCapitalElement.setAttribute('id', 'capital');
messagepIdCapitalElement.setAttribute('class', 'invalid');
messagepIdNumberElement.setAttribute('id', 'number');
messagepIdNumberElement.setAttribute('class', 'invalid');
messagepIdLengthElement.setAttribute('id', 'length');
messagepIdLengthElement.setAttribute('class', 'invalid');


const messageh3ElementContent = document.createTextNode("Le mot de passe doit contenir les éléments suivants :");
messageh3Element.appendChild(messageh3ElementContent);
const messagepIdLetterElementContent = document.createTextNode("Minimun une lettre minuscule");
messagepIdLetterElement.appendChild(messagepIdLetterElementContent);
const messagepIdCapitalElementContent = document.createTextNode("Minimum une lettre majuscule");
messagepIdCapitalElement.appendChild(messagepIdCapitalElementContent);
const messagepIdNumberElementContent = document.createTextNode("Minimum un chiffre");
messagepIdNumberElement.appendChild(messagepIdNumberElementContent);
const messagepIdLengthElementContent = document.createTextNode("Un minimum de 5 caractères");
messagepIdLengthElement.appendChild(messagepIdLengthElementContent);

messagedivElement.append(
    messageh3Element,
    messagepIdLetterElement,
    messagepIdCapitalElement,
    messagepIdNumberElement,
    messagepIdLengthElement
);

loginElement.appendChild(formElement);
loginElement.appendChild(messagedivElement);
}
createLoginForm()


function validateEmailInput() {
  const idEmail = document.getElementById('id-email');
  const emailErr = document.querySelector('span.email-err');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(idEmail.value)) {
    emailErr.textContent = "La valeur saisie doit être une adresse e-mail valide.";
  } else {
    emailVal.textContent = "L'Email est valide.";
  }
}





// var myInput = document.getElementById("id-password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

// When the user clicks on the password field, show the message box
document.getElementById("id-password").onfocus = function() {
  document.getElementById("message").style.display = "flex";
}

// When the user clicks outside of the password field, hide the message box
document.getElementById("id-password").onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
document.getElementById("id-password").onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(document.getElementById("id-password").value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(document.getElementById("id-password").value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(document.getElementById("id-password").value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(document.getElementById("id-password").value.length >= 5) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}































                    
















