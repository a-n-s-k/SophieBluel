const loginEmail = document.getElementById("email");
const loginPassword = document.getElementById("password");
// const auth = Buffer.from(`${loginEmail}:${loginPassword}`).toString("base64");
fetch('http://localhost:5678/api/users/login', {
  method: "POST",
  headers: {
    Authorization: "Basic " + btoa(`${loginEmail}:${loginPassword}`),
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
  body: JSON.stringify({
    email: loginEmail, 
    password: loginPassword, 
  }) 
})
  .then((response) => response.json())
  .then((response) => {
    console.log(response); //response.access_token is bearer token, response.expires_in is lifetime of token
  });
                    
















