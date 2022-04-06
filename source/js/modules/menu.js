const navigation = document.querySelector('.main-nav');
const menuToggle = document.querySelector('.main-nav__toggle');
const pageAbout = document.querySelector('.page__about');
const pageBody= document.querySelector('.page__body');
const overlay = document.querySelector('.page__body-overlay');
const menuItems = document.querySelectorAll('.main-nav__link');

navigation.classList.remove('main-nav--nojs');
navigation.classList.remove('main-nav--opened');
navigation.classList.add('main-nav--closed');

menuToggle.addEventListener('click', () => {
  pageAbout.classList.toggle('page__about--opened-menu');
  pageBody.classList.toggle('page__body-overlay');
  navigation.classList.toggle('main-nav--opened');
  navigation.classList.toggle('main-nav--closed');
});

window.addEventListener('click', (evt) => { // при клике в любом месте окна браузера
  const target = evt.target // находим элемент, на котором был клик
  if (!target.closest('.main-nav') && !target.closest('.main-nav__toggle')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
    navigation.classList.remove('main-nav--opened') // добавляем класс открытого состояния навигации
    pageBody.classList.remove('page__body-overlay'); // убираем оверлей
    navigation.classList.add('main-nav--closed'); // добавляем класс закрытого состояния навигации
    pageAbout.classList.remove('page__about--opened-menu'); // удаляем класс скрывающий содержимое хедера при открытой навигации
  }
})

menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', () => {
    if (navigation.classList.contains('main-nav--opened')) {
      navigation.classList.remove('main-nav--opened');
    }

    if (!navigation.classList.contains('main-nav--closed')) {
      navigation.classList.add('main-nav--closed');
    }

    if (pageBody.classList.contains('page__body-overlay')) {
      pageBody.classList.remove('page__body-overlay');
    }

    if (pageAbout.classList.contains('page__about--opened-menu')) {
      pageAbout.classList.remove('page__about--opened-menu');
    }
  })
})
