
import userController from './controllers/user.config.js';

var web
let webTitle = document.title

window.onload =  () => {
    this.dispatchEvent(new CustomEvent('changeWebTitle'));
    if (document.readyState == "complete") {
        web = new userController;
    }
}

window.addEventListener('changeWebTitle', () => {
    window.addEventListener('blur', () => {
        webTitle = document.title
        document.title = 'Suas Finanças 😭😭😭'
    })
    window.addEventListener('focus', () => {
        document.title = webTitle;
    })
})