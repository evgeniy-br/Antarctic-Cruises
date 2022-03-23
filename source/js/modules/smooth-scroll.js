const anchors = document.querySelectorAll('header a[href*="#"]');

for (let anchor of anchors) {
  if (anchor) {
    anchor.addEventListener('click', (evt) => {
      evt.preventDefault();
      const blockID = anchor.getAttribute('href');
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
}
