let loaderTrigger = document.querySelector('.loader__trigger')
let loaderWrapper = document.querySelector('.loader__wrapper')

window.addEventListener('load', () => {
  if (sessionStorage.length === 0) {
    loaderWrapper.style.display = 'block'
    transitionTrigger.click()
    sessionStorage.setItem('Loaded', 'True')
  } else { }
})
