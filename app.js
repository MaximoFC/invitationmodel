// Fecha del evento
const eventDate = new Date('Feb 17, 2024 22:00:00');

function countdown(){
    // Fecha actual
    let now = new Date();

    // Restar la fecha del evento con la actual
    const timeDifference = eventDate - now;

    if(timeDifference <= 0){
        document.getElementById('countdown').innerHTML = 'Ya se llegó a la fecha';
    }else{
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // Asignar el valor a cada elemento HTML
        document.getElementById('dias').innerHTML = days;
        document.getElementById('horas').innerHTML = hours;
        document.getElementById('minutos').innerHTML = minutes;
        document.getElementById('segundos').innerHTML = seconds;
    }
}

// Repetir la función cada segundo
setInterval(countdown, 1000);
countdown();