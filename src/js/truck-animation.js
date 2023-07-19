// Функция для анимации отсчета
function animateCounter(element, duration) {
  let currentCount = 0;
  const finalCount = parseInt(element.innerText, 10);
  const increment = finalCount / (duration / 500); // Изменено для отсчета каждые 500 мс

  const timer = setInterval(() => {
    currentCount += increment;
    if (currentCount >= finalCount) {
      element.innerText = finalCount;
      clearInterval(timer);
      hideTrucksCrane(); // Скрытие элемента .trucks__crane
      stopIconAnimation(); // Остановка анимации иконки
    } else {
      element.innerText = Math.floor(currentCount);
    }
  }, 500); // Изменено для отсчета каждые 500 мс
}

// Проверка видимости элемента при прокрутке страницы
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;

  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= windowHeight;
}
// Функция для скрытия элемента .trucks__crane
function hideTrucksCrane() {
  const trucksCrane = document.querySelector('.trucks__crane');
  trucksCrane.style.animation = 'hide-crane-animation 1s forwards';
}
function stopIconAnimation() {
  const loadingIcon = document.querySelector('.loading-icon');
  loadingIcon.style.animation = 'none'; // Установка анимации в "none"
}

// Обработчик события прокрутки страницы
window.addEventListener('scroll', () => {
  const trucksSection = document.querySelector('.trucks');
  const loadingPercentage = document.querySelector('.loading-percentage');

  if (
    isElementInViewport(trucksSection) &&
    !trucksSection.classList.contains('animated')
  ) {
    // Запуск анимации только при первом появлении секции на экране
    trucksSection.classList.add('animated');
    animateCounter(loadingPercentage, 5000); // Измените значение 5000 на 500 для отсчета каждые 500 мс
  }
});

// Проверка видимости элемента при загрузке страницы
window.addEventListener('DOMContentLoaded', () => {
  const trucksSection = document.querySelector('.trucks');
  const loadingPercentage = document.querySelector('.loading-percentage');

  //   if (
  //     isElementInViewport(trucksSection) &&
  //     !trucksSection.classList.contains('animated')
  //   ) {
  trucksSection.classList.add('animated');
  animateCounter(loadingPercentage, 5000); // Измените значение 5000 на 500 для отсчета каждые 500 мс
  //   }
});
