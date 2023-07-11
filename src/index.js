const slider = document.querySelector('.slider');
const cards = document.querySelectorAll('.card');
const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');

let currentIndex = 0;
cards[currentIndex].classList.add('active');

function showCard(index) {
  cards[currentIndex].classList.remove('active');
  currentIndex = (index + cards.length) % cards.length;
  cards[currentIndex].classList.add('active');
}

function prevCard() {
  showCard(currentIndex - 1);
}

function nextCard() {
  showCard(currentIndex + 1);
}

prevButton.addEventListener('click', prevCard);
nextButton.addEventListener('click', nextCard);
