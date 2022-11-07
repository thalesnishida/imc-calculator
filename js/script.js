import { Modal } from './modal.js';
import { AlertError } from './alert-error.js'
import { notNumber, calculateIMC } from './utils.js';

const formDocument = document.querySelector('form');
const weightDocument = document.querySelector('#weight');
const heightDocument = document.querySelector('#height');

weightDocument.oninput = () => AlertError.close();
heightDocument.oninput = () => AlertError.close();

formDocument.onsubmit = (event) => {
  event.preventDefault();
  
  const weight = Number(weightDocument.value);
  const height = Number(heightDocument.value);

  const wieghtOrHeightIsNumber = notNumber(weight) || notNumber(height);

  if(wieghtOrHeightIsNumber == true){
    AlertError.open()
    return
  }

  AlertError.close()

  const result = calculateIMC(weight,height);
  displayResultMessage(result);

} 

function displayResultMessage(result){
  const message = `O seu IMC é ${result}`;
  
  Modal.message.innerHTML = message;
  Modal.open();
}
