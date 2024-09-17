// Establece la fecha de fin (3 semanas desde ahora)
const endDate = new Date();
endDate.setDate(endDate.getDate() + 21); // 3 semanas (21 días)

function updateCountdown() {
    const now = new Date();
    const timeRemaining = endDate - now;

    // Calcula los días, horas, minutos y segundos restantes
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Formatea los números para que siempre tengan dos dígitos
    const formattedTime = `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // Actualiza el contador en la página
    document.getElementById('counter').textContent = formattedTime;

    // Si el tiempo se acaba, muestra 00:00:00:00
    if (timeRemaining < 0) {
        document.getElementById('counter').textContent = '00:00:00:00';
    }
}

// Actualiza el contador cada segundo
setInterval(updateCountdown, 1000);

// Inicializa la cuenta atrás al cargar la página
updateCountdown();
