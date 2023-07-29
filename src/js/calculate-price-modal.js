(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-calculate-modal-open]'),
    closeModalBtn: document.querySelector('[data-calculate-modal-close]'),
    modal: document.querySelector('[data-calculate-modal]'),
  };

  refs.openModalBtns.forEach(btn => btn.addEventListener('click', toggleModal));
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('backdrop--is-hidden');
  }
})();
