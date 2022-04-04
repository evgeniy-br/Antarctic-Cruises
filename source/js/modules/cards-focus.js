const cardsCruises = document.querySelectorAll('.upcoming-cruises__item');

cardsCruises.forEach((cardCruise) => {
  const cardCruiseButton = cardCruise.querySelector('.upcoming-cruises__description-button');
  const cruiseDescription = cardCruise.querySelector('.upcoming-cruises__description');

  cardCruise.addEventListener('focus', () => {
    cruiseDescription.classList.toggle('upcoming-cruises__description--focused');
    cardCruise.classList.toggle('upcoming-cruises__item--focused');
    cardCruiseButton.focus();
  })

  cardCruiseButton.addEventListener('blur', () => {
    cruiseDescription.classList.toggle('upcoming-cruises__description--focused');
    cardCruise.classList.toggle('upcoming-cruises__item--focused');
  })
})
