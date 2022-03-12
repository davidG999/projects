const source = document.querySelectorAll('.source')
const projectsPreviews = document.querySelectorAll('.project__preview')

let uniqueGHLink = '',
  uniqueTryItLink = '',
  uniqueEmoji = '',
  uniqueTitle = '';

const projectInfo = `
  <div class="project__info">
    <h2>${uniqueTitle}</h2>
    <div class="project__source" data-default>
      <a href="https://github.com/davidG999/${uniqueGHLink}" class="source" target="_blank">View source code
        <img data-gh-icon src="github-icons/GitHub-Mark-Light-32px.png" alt="GitHub icon">
      </a>
    </div>
    <div class="project__try-it" data-default>
      <a href="${uniqueTryItLink}" class="try-it" target="_blank">Try it out yourself! ${uniqueEmoji}</a>
    </div>
  </div>
  `;

source.forEach(e => e.addEventListener('mouseenter', e => {
  e.target.querySelector('[data-gh-icon]').style.filter = 'invert(100%)'
}))

source.forEach(e => e.addEventListener('mouseleave', e => {
  e.target.querySelector('[data-gh-icon]').style.filter = 'invert(0%)'
}))



if (document.body.clientWidth <= 995) {
  document.querySelectorAll('[data-default]').forEach(i => i.style.display = 'none')
  document.querySelectorAll('[data-responsive]').forEach(h => h.style.display = 'block')
  projectsPreviews.forEach(p => p.insertAdjacentHTML('afterend', insertUniqueProjectInfo(p)))
}

