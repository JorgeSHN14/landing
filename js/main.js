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
        if (emailText.length === 0) {
            emailElement.focus();
        }
        const keyframes = [
            { transform: 'translateX(0)' },
            { transform: 'translateX(50px)' },
            { transform: 'translateY(-50px)' },
            { transform: 'translateY(0px)' },
        ];
        const timing = {
            duration: 400, // in milliseconds
            iterations: 1, // repeat indefinitely
        };
        const animation = new KeyframeEffect(emailElement, keyframes, timing);
        const animationPlayer = new Animation(animation);
        animationPlayer.play();
    })
}
window.addEventListener("DOMContentLoaded", ready);
window.addEventListener("load", loaded)