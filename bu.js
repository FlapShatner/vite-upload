Array.from(cartDrawerCloseElements).forEach(function (element) {
  element.addEventListener('click', (event) => {
    cartDrawer.classList.remove('sd-sidebar--visible')
    document.querySelector('body').classList.remove('no-scroll')
  })
})

