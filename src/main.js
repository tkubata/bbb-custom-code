let transitionTrigger = document.querySelector('.transition-trigger')
let transition = document.querySelector('.transition')

window.addEventListener('load', () => {
  if (sessionStorage.length === 0) {
    console.log('hello')
    sessionStorage.setItem('Loaded', 'True')
  } else {
    console.log('Goodbye')
  }
})
