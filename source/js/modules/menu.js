const navigation = document.querySelector('.main-nav');
const menuToggle = document.querySelector('.main-nav__toggle');
const aboutHeader = document.querySelector('.about__header');
const pageBody= document.querySelector('.page__body');
const overlay = document.querySelector('.page__body-overlay');

navigation.classList.remove('main-nav--nojs');
navigation.classList.remove('main-nav--opened');
navigation.classList.add('main-nav--closed');

menuToggle.addEventListener('click', () => {
  aboutHeader.classList.toggle('about__header--opened-menu');
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
    aboutHeader.classList.remove('about__header--opened-menu'); // удаляем класс скрывающий содержимое хедера при открытой навигации
  }
})
