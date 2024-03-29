(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-truck-modal-open]'),
    closeModalBtn: document.querySelector('[data-truck-modal-close]'),
    orderModal: document.querySelector('[data-truck-modal]'),
  };

  refs.openModalBtns.forEach(btn => btn.addEventListener('click', toggleModal));
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.orderModal.classList.toggle('backdrop--is-hidden');
  }
})();
