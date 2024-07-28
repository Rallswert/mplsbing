const startButton = document.getElementById('start-button');
const nextButton = document.getElementById('next-button');
const mainMenu = document.getElementById('main-menu');
const notificationContainer = document.getElementById('notification-container');
const modeMenu = document.getElementById('mode-menu');

startButton.addEventListener('click', () => {
    mainMenu.classList.add('hidden');
    notificationContainer.classList.remove('hidden');
});

nextButton.addEventListener('click', () => {
    notificationContainer.classList.add('hidden');
    modeMenu.classList.remove('hidden');
});

document.querySelectorAll('.mode-button').forEach(button => {
    button.addEventListener('click', () => {
        const mode = button.dataset.mode;
        window.location.href = `${mode}.html`;
    });
});
