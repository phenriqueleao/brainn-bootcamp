const form = document.querySelector('[data-js="cars-form"]')
const table = document.querySelector('[data-js="table"]')

const getFormElement = (event) => (elementName) => {
  return event.target.elements[elementName]
}

const elementTypes = {
  image: createImage,
  text: createText,
  color: createColor
}

function createImage (value) {
  const td = document.createElement('td')
  const img = document.createElement('img')
  img.src = value
  img.width = '100px'
  td.appendChild(img)
  return td
}

function createText (value) {
  const td = document.createElement('td')
  td.textContent = value
  return td
}

function createColor (value) {
  const td = document.createElement('td')
  const div = document.createElement('div')
  div.style.width = '100px'
  div.style.height = '100px'
  div.style.background = value
  td.appendChild(img)
  return td
}


form.addEventListener('submit', (e) => {
  e.preventDefault()
  const getElement = getFormElement(e)
  const image = getElement('image')
  const brandModel = getElement('brand-model')
  const year = getElement('year')
  const plate = getElement('plate')
  const color = getElement('color')

  const elements = [
    { type: 'image', value: image.value },
    { type: 'brandModel', value: brandModel.value },
    { type: 'year', value: year.value },
    { type: 'plate', value: plate.value },
    { type: 'color', value: color.value },
  ]

  const tr = document.createElement('tr')
  elements.forEach(element => {
    const td = elementTypes[element.type](element.value)
    tr.appendChild(td)
  })

  table.appendChild(tr)

  e.target.reset()
  image.focus()
})
