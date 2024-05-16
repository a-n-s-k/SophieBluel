import {setCookie} from "./set-get-check-cookies.js";

const array = new Uint32Array(1);
self.crypto.getRandomValues(array);
for (const num of array) {
  value = num;
}
const cookievalue = value;
// alert(cookievalue);
// console.log(cookievalue);

/* let getActive = browser.tabs.query({ active: true, currentWindow: true });
getActive.then(setCookie);

function setCookie(tabs) {
  browser.cookies.set({
    url: tabs[0].url,
    name: loginEmail,
    value: cookievalue,
  });
}
console.log(setCookie(tabs)); */

const loginEmail = document.getElementById("email");
const loginPassword = document.getElementById("password");
let auth = btoa(`${loginEmail}:${loginPassword}`);
fetch('http://localhost:5678/api/users/login', {
  method: "POST",
	headers: {
		'Authorization': `Basic ${auth}`
	}
})
.then(function (response) {
	if (response.ok) {
		return response.json();
	}
	throw response;
})
.then( 
  `setCookie(loginEmail, cookievalue),
  document.location.replace("./index.html")`
)
.catch(function (error) {
	console.warn(error);
});



                    
















