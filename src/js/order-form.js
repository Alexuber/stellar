const steps = document.querySelectorAll('.step');
const paginationItems = document.querySelectorAll('.pagination-item');

paginationItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    steps.forEach(step => step.classList.remove('active'));
    paginationItems.forEach(paginationItem =>
      paginationItem.classList.remove('active')
    );

    steps[index].classList.add('active');
    paginationItems[index].classList.add('active');
  });
});

function nextStep() {
  const currentStep = document.querySelector('.step.active');
  const currentPaginationItem = document.querySelector(
    '.pagination-item.active'
  );

  if (currentStep.nextElementSibling) {
    currentStep.classList.remove('active');
    currentStep.nextElementSibling.classList.add('active');
  }

  if (currentPaginationItem.nextElementSibling) {
    currentPaginationItem.classList.remove('active');
    currentPaginationItem.nextElementSibling.classList.add('active');
    currentPaginationItem.querySelector(
      '.pagination-item-number'
    ).style.display = 'none';
    currentPaginationItem.classList.add('passed');
    currentPaginationItem.querySelector('.pagination-item-icon').style.display =
      'inline-block';
  }
}

function prevStep() {
  const currentStep = document.querySelector('.step.active');

  if (currentStep.previousElementSibling) {
    currentStep.classList.remove('active');
    currentStep.previousElementSibling.classList.add('active');
  }
}

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
