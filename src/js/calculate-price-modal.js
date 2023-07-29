(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-calculate-modal-open]'),
    closeModalBtn: document.querySelector('[data-calculate-modal-close]'),
    modal: document.querySelector('[data-calculate-modal]'),
    backdrop: document.querySelector('.backdrop'),
  };

  refs.openModalBtns.forEach(btn => btn.addEventListener('click', toggleModal));
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.backdrop.addEventListener('click', handleBackdropClick);

  function toggleModal() {
    refs.modal.classList.toggle('backdrop--is-hidden');
  }

  function handleBackdropClick(event) {
    if (
      event.target === refs.backdrop ||
      refs.backdrop.contains(event.target)
    ) {
      toggleModal();
    }
  }

  function validateForm() {}
})();
