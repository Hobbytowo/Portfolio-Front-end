const buttonScrollUp = document.querySelector('.fa-angle-double-up')
const buttonScrollDown = document.querySelector('.fa-angle-double-down')
const projectsSection = document.querySelector('.projects')

buttonScrollUp.addEventListener('click', e => {
  e.preventDefault()

  window.scrollBy({
    top: -window.pageYOffset,
    behavior: 'smooth'
  })
})

buttonScrollDown.addEventListener('click', () => {
  const heightToScroll = projectsSection.offsetTop - window.pageYOffset

  window.scrollBy({
    top: heightToScroll,
    behavior: 'smooth'
  })
})
