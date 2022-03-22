const source = document.querySelectorAll('.source')
const hoverPreview = document.querySelector('[data-hover-preview]')

source.forEach(e => e.addEventListener('mouseenter', e => {
  e.target.querySelector('[data-gh-icon]').style.filter = 'invert(100%)'
}))

source.forEach(e => e.addEventListener('mouseleave', e => {
  e.target.querySelector('[data-gh-icon]').style.filter = 'invert(0%)'
}))

hoverPreview.querySelector('[data-confirmation]').addEventListener('click', function () {
  hoverPreview.firstElementChild.remove()
  hoverPreview.lastElementChild.style.display = 'block'
})