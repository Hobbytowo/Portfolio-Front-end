// change subtitle text on mouseover

const title = document.querySelector('.title')

title.addEventListener('mouseover', () => {
  if (title.textContent === `Let's code!`) {
    return
  }

  title.style.opacity = 0
  window.setTimeout(() => {
    title.textContent = `Let's code!`
    title.style.opacity = 1
    title.style.color = '#00b740'
  }, 200)
})

title.addEventListener('mouseout', () => {
  title.style.opacity = 0
  window.setTimeout(() => {
    title.textContent = `Let's talk!`
    title.style.opacity = 1
    title.style.color = '#f7ef5d'
  }, 200)
})
