const swiper = new Swiper('.mySwiper', {
  pagination: {
    el: '.swiper-pagination',
  },
  loop: true,
  width: 320,
  spaceBetween: 8,
  navigation: {
    enabled: true,
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Form order
// Получаем все шаги формы
const steps = document.querySelectorAll('.step');
const paginationItems = document.querySelectorAll('.pagination-item');

// Переключение на следующий шаг
function nextStep() {
  // Находим текущий активный шаг
  const currentStep = document.querySelector('.step.active');
  const currentPaginationItem = document.querySelector(
    '.pagination-item.active'
  );

  // Проверяем, есть ли следующий шаг
  if (currentStep.nextElementSibling) {
    // Скрываем текущий шаг и показываем следующий шаг
    currentStep.classList.remove('active');
    currentStep.nextElementSibling.classList.add('active');
  }

  if (currentPaginationItem.nextElementSibling) {
    // Скрываем текущий шаг и показываем следующий шаг
    currentPaginationItem.classList.remove('active');
    currentPaginationItem.nextElementSibling.classList.add('active');
  }
}

// Переключение на предыдущий шаг
function prevStep() {
  // Находим текущий активный шаг
  const currentStep = document.querySelector('.step.active');

  // Проверяем, есть ли предыдущий шаг
  if (currentStep.previousElementSibling) {
    // Скрываем текущий шаг и показываем предыдущий шаг
    currentStep.classList.remove('active');
    currentStep.previousElementSibling.classList.add('active');
  }
}

// Обработчик события для кнопок "Далее"
const nextButtons = document.querySelectorAll('.next-button');
nextButtons.forEach(button => {
  button.addEventListener('click', nextStep);
});

const checkboxButtons = document.querySelectorAll('.checkbox-button');

checkboxButtons.forEach(button => {
  const checkbox = button.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      button.classList.add('selected');
    } else {
      button.classList.remove('selected');
    }
  });
});
