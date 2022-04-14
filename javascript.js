const btn = document.getElementById('dd-btn')
const menu = document.getElementById('menu')

function ddToggle() {
   menu.classList.toggle('hidden')
   document.body.classList.toggle('no-scroll')
}

btn.addEventListener('click', ddToggle)