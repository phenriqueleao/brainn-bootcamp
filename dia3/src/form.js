const input = document.querySelector('[data-js="username"]')

const dontChange = ['da', 'das', 'de', 'do', 'dos']

input.addEventListener('input', (e) => {
  const valueAsArray = e.target.value.split(' ')
  console.log('valueAsArray:', valueAsArray);
  e.target.value = valueAsArray.map((word) => {
    return dontChange.includes(word.toLowerCase())
    ? word.toLowerCase()
    : fixCase(word)
  }).join(' ')
})

function fixCase(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}

const form = document.querySelector('[data-js="form"]')
const select = document.createElement('select')
const colors = ['#687280', '#EF4444', '#F59e0B', '#10B981', '#3882F6']
const colorsContainer = document.createElement('div')
colorsContainer.style.display = 'flex'

colors.forEach(color => {
  const option = document.createElement('option')
  option.value = color
  option.textContent = color
  select.appendChild(option)
})

select.addEventListener('change', (e) => {
  colorsContainer.innerHTML = ''

  Array.from(e.target.selectedOptions).forEach(option => {
    const div = document.createElement('div')
    div.style.width = '100px'
    div.style.height = '100px'
    div.style.background = option.value
    colorsContainer.appendChild(div)
  })
})

select.setAttribute('multiple', '')
form.appendChild(select)
document.body.appendChild(colorsContainer)
