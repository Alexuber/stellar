const languageSwitcher = document.querySelector('.language-switcher');
const languageSwitcherMob = document.querySelector('.language-switcher-mob');

const languageItems = languageSwitcher.querySelectorAll('li');
const languageItemsMob = languageSwitcherMob.querySelectorAll('li');

languageItems.forEach(item => {
  item.addEventListener('click', () => {
    languageItems.forEach(item => item.classList.remove('active'));
    item.classList.add('active');
  });
});

languageItemsMob.forEach(item => {
  item.addEventListener('click', () => {
    languageItemsMob.forEach(item => item.classList.remove('active'));
    item.classList.add('active');
  });
});
