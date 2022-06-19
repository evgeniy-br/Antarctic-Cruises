const inputContainerPhone = document.querySelector('.booking__form-input-container--phone');
const inputPhone = inputContainerPhone.querySelector('input');

inputPhone.addEventListener('input', () => {
  inputPhone.value = inputPhone.value.replace(/[^\d\+]/g,'');
})
