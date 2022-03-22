const navigation = document.querySelector('.main-nav');
const menuToggle = document.querySelector('.main-nav__toggle');
const aboutHeader = document.querySelector('.about__header');

navigation.classList.remove('main-nav--nojs');
navigation.classList.remove('main-nav--opened');
navigation.classList.add('main-nav--closed');

menuToggle.addEventListener('click', () => {
  aboutHeader.classList.toggle('about__header--opened-menu');
  navigation.classList.toggle('main-nav--opened');
  navigation.classList.toggle('main-nav--closed');
})
