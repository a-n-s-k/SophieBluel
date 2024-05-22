
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
  
  loginElement.appendChild(formElement);
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


































                    
















