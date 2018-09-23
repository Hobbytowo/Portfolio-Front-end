const buttonScroll = document.querySelector('.fa-angle-double-up')

const scrollToTop = () => {
  const scrollTop = document.documentElement.scrollTop
  if (scrollTop > 0) {
    window.scrollTo(0, scrollTop - scrollTop / 6)
    window.requestAnimationFrame(scrollToTop)
  }
}

buttonScroll.addEventListener('click', e => {
  e.preventDefault()

  scrollToTop()
})
