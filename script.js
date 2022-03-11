const source = document.querySelectorAll('.source')
const projectsPreviews = document.querySelectorAll('.project__preview')

let uniqueGHLink = '',
  uniqueTryItLink = '',
  uniqueEmoji = '',
  uniqueTitle = ''

source.forEach(e => e.addEventListener('mouseenter', e => {
  e.target.querySelector('[data-gh-icon]').style.filter = 'invert(100%)'
}))

source.forEach(e => e.addEventListener('mouseleave', e => {
  e.target.querySelector('[data-gh-icon]').style.filter = 'invert(0%)'
}))

const sourceResponsive = `
  <div class="project__source" data-responsive>
    <a href="https://github.com/davidG999/hover-board" class="source" target="_blank">View source code
      <img data-gh-icon src="github-icons/GitHub-Mark-Light-32px.png" alt="GitHub icon">
    </a>
  </div>
  `
const tryItResponsive = `
  <div class="project__try-it" data-responsive>
    <a href="https://davidg999.github.io/hover-board" class="try-it" target="_blank">Try it out yourself! 🎨</a>
  </div>
  `

if (document.body.clientWidth <= 995) {
  projectsPreviews.forEach(p => p.insertAdjacentHTML('afterend', `${sourceResponsive} ${tryItResponsive}`))
  document.querySelectorAll('[data-default]').forEach(e => e.style.display = 'none')
}

