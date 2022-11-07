export const Modal = {
  
  wrapper: document.querySelector('.modal-wrapper'),
  buttonClose: document.querySelector('.modal button.close'),
  message: document.querySelector('.modal .title span'),

  open() {
    Modal.wrapper.classList.add('open');

  },
  close() {
    Modal.wrapper.classList.remove('open')
  }
}

Modal.buttonClose.onclick = () => Modal.close()

window.addEventListener('keydown', handleDown);

function handleDown (event) {
  if(event.key === 'Escape'){
    Modal.close()
  }
}