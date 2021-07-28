const inputRef = document.querySelector('#validation-input');
const dataRef = inputRef.getAttribute('data-length');
const onInputTarget = addEventListener('change', inputValidation);

function inputValidation(event) {
  console.log(event.target.value.length);
  if (event.target.value.length === Number(dataRef)) {
    inputRef.classList.add('valid');
    inputRef.classList.remove('invalid');
  } else {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid')
  }
};