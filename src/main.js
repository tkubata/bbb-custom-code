let transitionTrigger = document.querySelector('.transition-trigger')
let transition = document.querySelector('.transition')

window.addEventListener('load', () => {
  if (sessionStorage.length === 0) {
    transition.style.display = 'flex'
    transitionTrigger.click()
    sessionStorage.setItem('Loaded', 'True')
  } else {
  }
})
