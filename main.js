// const reg = document.getElementById('butLog');
// console.log(reg)
// const container = document.querySelector('.container')
// console.log(container)
// reg.addEventListener('click', (e) => {
//     container.classList.add('show-register');
// });

const log = document.getElementById('log');
const reg = document.getElementById('reg');
const container = document.querySelector('.container');
const eye = document.querySelectorAll('#eye');
const pas = document.querySelectorAll('.pas');
console.log(eye)
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
// eye.addEventListener('mousedown', () => {
//     pas.setAttribute('type', 'text');
// })
// eye.addEventListener('mouseup', () => {
//     pas.setAttribute('type', 'password');
// })
reg.addEventListener('click', () => {
    container.classList.add('show-register');
})

log.addEventListener('click', () => {
    container.classList.remove('show-register');
})