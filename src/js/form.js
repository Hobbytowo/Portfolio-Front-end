// change subtitle text on mouseover 

const subtitle = document.querySelector('.subtitle')

subtitle.addEventListener('mouseover', () => {
  subtitle.style.opacity = 0
  window.setTimeout(() => {
    subtitle.textContent = 'Do you want to code with me?'
    subtitle.style.opacity = 1
    subtitle.style.color = '#00b740'
  }, 200)
})

subtitle.addEventListener('mouseout', () => {
  subtitle.style.opacity = 0
  window.setTimeout(() => {
    subtitle.textContent = 'Do you want to write to me?'
    subtitle.style.opacity = 1
    subtitle.style.color = '#f7ef5d'
  }, 200)
})
