// Configuración de la fecha de fin (3 semanas desde ahora)
const endDate = new Date();
endDate.setDate(endDate.getDate() + 21); // 3 semanas

function updateCountdown() {
    const now = new Date();
    const timeRemaining = endDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    updateFlip('days', days);
    updateFlip('hours', hours);
    updateFlip('minutes', minutes);
    updateFlip('seconds', seconds);

    if (timeRemaining < 0) {
        clearInterval(countdownInterval);
        document.querySelectorAll('.flip').forEach(el => el.textContent = '00');
    }
}

function updateFlip(id, value) {
    const element = document.getElementById(id);
    const currentValue = element.getAttribute('data-value');
    if (currentValue !== String(value).padStart(2, '0')) {
        element.setAttribute('data-value', String(value).padStart(2, '0'));
        element.textContent = String(value).padStart(2, '0');
        element.classList.add('flip-animation');
        setTimeout(() => element.classList.remove('flip-animation'), 600);
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
