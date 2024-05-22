function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
         setCookie("username", user, 30);
       }
    }
  }









// Debut - Déclaration et affectatiopn de la variable cookiename
const cookiename = "cookieSophieBluel";
// Fin - Déclaration et affectatiopn de la variable cookiename

// Debut - Fonction de recupération du cookie
export function getCookie(cookiename) {
    const cookies = document.cookie.split(";");
    cookievalue = cookies
    .find(c => c.startsWith(cookiename + "="))
    ?.split("=")[1];
    if (cookievalue === undefined) {
        return null;
    }
    return decodeURIComponent(cookievalue);
}
// Fin - Fonction de recupération du cookie

// Debut - Fonction de création du cookie
export function setCookie() {
    // Debut - Construction de la valeur à affecter au cookie
    const array = new Uint32Array(1);
    self.crypto.getRandomValues(array);
    for (const num of array) {
        const cookievalue = num;
        document.cookie = `${cookiename}=${cookievalue};SameSite=None; Secure; path=/`;
    }
    // Fin - Construction de la valeur à affecter au cookie
    // document.cookie = `${cookiename}=${cookievalue};SameSite=None; Secure; path=/`
}
// Fin - Fonction de création du cookie


