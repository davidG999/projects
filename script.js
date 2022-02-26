const source = document.querySelector('.source')

source.addEventListener('mouseenter', e => {
  source.querySelector('[data-gh-icon]').style.filter = 'invert(100%)'
})

source.addEventListener('mouseleave', e => {
  source.querySelector('[data-gh-icon]').style.filter = 'invert(0%)'
})