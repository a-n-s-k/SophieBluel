


export function setCookie(cname,cvalue) {
/* function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"; */
    document.cookie = `${cname}=${cvalue};SameSite=None; Secure; path=/`;
}

export function getCookie(name) {
    const cookies = document.cookie.split(';');
    for(let i = 0; i < cookies.length; i++) {
        let pair = cookies[i].trim().split('=');
        if(pair[0] == name){
            return pair[1];
        }      
    }
    // return null;
}





/* function getCookie(cname) {
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
         setCookie("username", user);
        //  setCookie("username", user, 30);
       }
    }
  }
 */











