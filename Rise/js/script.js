const hamburger = document.getElementById ('hamburger');
const navigacia = document.getElementById('navigacia');

hamburger.addEventListener('click', () => {
    navigacia.classList.toggle('show');
});