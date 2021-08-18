import './style.css'

document.querySelector('[data-js="app"]').innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`
const link = document.querySelector('[data-js="link"]')

let isHidden = false;

link.addEventListener('click', (event) => {
  event.preventDefault()
  isHidden = !isHidden
  document.querySelector('[data-js="app"]').hidden = isHidden
})
