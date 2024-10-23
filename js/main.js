let ready = () => {
    console.log('DOM is ready');
}
let loaded = () => {
    console.log('Iframes and Images Loaded');
    let myform = document.getElementById('form');
    console.log(myform);
    myform.addEventListener('submit', (eventSubmit) => {
        eventSubmit.preventDefault();
        let emailElement = document.querySelector('.form-control-lg');
        let emailText = emailElement.value;
        if(emailText.length === 0){
            emailElement.focus();
        }
    })
}
window.addEventListener("DOMContentLoaded", ready);
window.addEventListener("load", loaded)