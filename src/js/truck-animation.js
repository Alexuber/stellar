function animateCounter(element, duration) {
  let currentCount = 0;
  const finalCount = parseInt(element.innerText, 10);
  const increment = finalCount / 20;
  const timer = setInterval(() => {
    currentCount += increment;
    if (currentCount >= finalCount) {
      element.innerText = finalCount;
      clearInterval(timer);
      hideTrucksCraneAndMain();
      stopIconAnimation();
    } else {
      element.innerText = Math.floor(currentCount);
    }
  }, 500);
}

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;

  return rect.top < windowHeight && rect.bottom > 0;
}

function hideTrucksCraneAndMain() {
  const trucksCrane = document.querySelector('.trucks__crane');
  const trucksMain = document.querySelector('.trucks__main img');

  trucksCrane.style.animation = 'hide-crane-animation 2s forwards';
  trucksMain.style.animation = 'hide-main-animation 2s forwards';
  setTimeout(moveUpElements, 0);
}

function moveUpElements() {
  const loadingBlock = document.querySelector('.loading');
  const trucksCategories = document.querySelector('.trucks__categoties');
  const truckAnimationBlock = document.querySelector('.truck-animation');
  loadingBlock.style.animation = 'moveUp 1s forwards';

  setTimeout(() => {
    trucksCategories.style.animation = 'moveUp 1s forwards';
  }, 500);

  truckAnimationBlock.style.animation = 'moveUpAndFadeOut 2s forwards';
}

function stopIconAnimation() {
  const loadingIcon = document.querySelector('.loading-icon');
  loadingIcon.style.animation = 'none';
}

let animationStarted = false;

function startTrucksAnimation() {
  const trucksSection = document.querySelector('.trucks');
  const loadingPercentage = document.querySelector('.loading-percentage');

  if (isElementInViewport(trucksSection) && !animationStarted) {
    console.log('in view -->');

    animationStarted = true;
    trucksSection.classList.add('animated');
    animateCounter(loadingPercentage, 5000);
  }
}

window.addEventListener('scroll', () => {
  startTrucksAnimation();
});
