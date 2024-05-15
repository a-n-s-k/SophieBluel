/**
* Pour recupérer les données associées à un coookie
* @param {string} name est la variable du nom du cookie à recupérer
* @return {string|null} le type de la valeur qui sera retournée
*/
function getCookie(name) {
    const cookies = document.cookie.split(";");
    const value = cookies
    .find(c => c.startsWith(name + "="))
    ?.split("=")[1];
    if (value === undefined) {
        return null;
    }
    return decodeURIComponent(value);

}


/**
* Pour créer ou modifier la valeur d'un cookie avec une durée spécifique
* @param {string} name est la variable du nom du cookie
* @param {string} value est la variable de la valeur du cookie
* @param {number} days est la durée de vie du cookie
*/
function setCookie(name, valie, days) {
    const days = new Date();
    date.setDate(date.getDate() + days);
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${date.toUTCString()};`
}
