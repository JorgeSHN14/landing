const databaseURL = 'https://landing-331ab-default-rtdb.firebaseio.com/data.json'; 

let sendData = () => {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    data['saved'] = new Date().toLocaleString('es-CO', { timeZone: 'America/Guayaquil' })
    fetch(databaseURL, {
        method: 'POST', // Método de la solicitud
        headers: {
            'Content-Type': 'application/json' // Especifica que los datos están en formato JSON
        },
        body: JSON.stringify(data) // Convierte los datos a JSON
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.statusText}`);
        }
        return response.json(); // Procesa la respuesta como JSON
    })
    .then(result => {
        alert('Agradeciendo tu preferencia, nos mantenemos actualizados y enfocados en atenderte como mereces'); // Maneja la respuesta con un mensaje
        form.reset()
    })
    .catch(error => {
        alert('Hemos experimentado un error. ¡Vuelve pronto!'); // Maneja el error con un mensaje
    });
}

let ready = () => {
    console.log('DOM is ready');
}

let loaded = () => {
    console.log('Iframes and Images Loaded');
    let myform = document.getElementById('form');
    console.log(myform);
    myform.addEventListener('submit', (eventSubmit) => {
        eventSubmit.preventDefault();
        let formElements = document.getElementsByClassName('form-control-lg');
        let nameElement = formElements[0];
        let nameText = nameElement.value;
        let emailElement = formElements[1];
        let emailText = emailElement.value;
        
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
        
        function animationAndFocus(elementToAnimate, keyframes, timing) {
            const animation = new KeyframeEffect(elementToAnimate, keyframes, timing);
            const animationPlayer = new Animation(animation);
            animationPlayer.play();
            elementToAnimate.focus();
        }
        if (nameText.length === 0 ) {
            animationAndFocus(nameElement, keyframes, timing);
            return;
        }
        if (emailText.length === 0 ) {
            animationAndFocus(emailElement, keyframes, timing);
            return;
        }
        sendData();
    })
}
window.addEventListener("DOMContentLoaded", ready);
window.addEventListener("load", loaded)