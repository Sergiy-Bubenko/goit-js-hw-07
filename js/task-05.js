const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

nameInputRef.addEventListener('input', eventInput);

function eventInput(event) {
  event.target.value.trim() === '' ? nameOutputRef.textContent = 'незнакомец' :
  nameOutputRef.textContent = event.target.value;
};



