const continueButton = document.querySelector('.finish-form-btn');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const emailInput = document.getElementById('email');

continueButton.addEventListener('click', validateForm);

const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const namePattern = /^[A-Za-zА-Яа-яЁё\s]+$/;
const phonePattern = /^\+?[0-9]{1,}$/;

function validateForm() {
  console.log('valid -->');

  const isValidEmail = emailPattern.test(emailInput.value);
  const isValidName = namePattern.test(nameInput.value);
  const isValidPhone = phonePattern.test(phoneInput.value);

  let isValid = true;

  if (nameInput.value.trim() === '' || !isValidName) {
    nameInput.classList.add('invalid');
    isValid = false;
  } else {
    nameInput.classList.remove('invalid');
  }

  if (phoneInput.value.trim() === '' || !isValidPhone) {
    phoneInput.classList.add('invalid');
    isValid = false;
  } else {
    phoneInput.classList.remove('invalid');
  }

  if (emailInput.value.trim() === '' || !isValidEmail) {
    emailInput.classList.add('invalid');
    isValid = false;
  } else {
    emailInput.classList.remove('invalid');
  }

  if (isValid) {
    console.log('Форма валидна');
  }
}
