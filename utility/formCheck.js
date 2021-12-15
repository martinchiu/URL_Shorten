const form = document.querySelector('#url-form')
const inputValue = document.querySelector('#form-input').value

form.addEventListener('submit', (event) => {
  event.preventDefault()
  event.stopPropagation()
  console.log(inputValue)
})