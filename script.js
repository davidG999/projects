const source = document.querySelectorAll('.source')
const hoverPreview = document.querySelector('[data-hover-preview]')
const previews = document.querySelectorAll('[data-lazy]')
const projects = document.querySelectorAll('.project')

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

projects.forEach((p) => {
  p.insertAdjacentHTML('afterend', `
    <div class="separator"></div>
  `)
})

const lazyLoad = target => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const preview = entry.target
        const src = preview.getAttribute('data-lazy')

        if (preview.tagName === 'VIDEO') {
          preview.insertAdjacentHTML('afterbegin', `
            <source src="${src}.mp4" type="video/mp4">
            <source src="${src}.webm" type="video/webm">
            Your browser does not support the HTML5 video element.
          `)
        } else {
          preview.setAttribute('src', src)
        }

        if (src === 'preview/warning.png') {
          preview.nextElementSibling.style.display = 'block'
        }

        preview.classList.add('fade')
        observer.disconnect()
      }
    })
  })

  io.observe(target)
}

previews.forEach(lazyLoad)