const buttonScrollUp = document.querySelector('.fa-angle-double-up')
const buttonScrollDown = document.querySelector('.fa-angle-double-down')

const scrollUp = () => {
  const scroll = document.documentElement.scrollTop
  if (scroll > 0) {
    window.scrollTo(0, scroll - scroll / 6)
    window.requestAnimationFrame(scrollUp)
  }
}

const scrollDown = () => {
  const scroll = document.documentElement.scrollTop
  const scrollTo = 250

  if (scroll < scrollTo) {
    window.scrollTo(0, scroll + scrollTo / 10)
    window.requestAnimationFrame(scrollDown)
  }
}

buttonScrollUp.addEventListener('click', e => {
  e.preventDefault()

  scrollUp()
})

buttonScrollDown.addEventListener('click', () => {
  console.log('click')
  scrollDown()
})
