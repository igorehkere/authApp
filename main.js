const log = document.getElementById('log');
const reg = document.getElementById('reg');
const container = document.querySelector('.container');
const eye = document.querySelectorAll('#eye');
const pas = document.querySelectorAll('.pas');

container.addEventListener('mousedown', (event) => {
    if (!event.target.dataset.action) return
    const inpPas = event.target.previousElementSibling;
    inpPas.setAttribute('type', 'text');
})
container.addEventListener('mouseup', (event) => {
    if (!event.target.dataset.action) return
    const inpPas = event.target.previousElementSibling;
    inpPas.setAttribute('type', 'password');
})
reg.addEventListener('click', () => {
    container.classList.add('show-register');
})

log.addEventListener('click', () => {
    container.classList.remove('show-register');
})