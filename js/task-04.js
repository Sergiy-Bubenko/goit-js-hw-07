const decrementRef = document.querySelector('#counter button[data-action="decrement"]');
const incrementRef = document.querySelector('#counter button[data-action="increment"]');
const counterRef = document.querySelector('#value');
let counterValue = Number(counterRef.textContent);

const decrement = () => {
  counterValue = counterValue - 1;
  counterRef.textContent = counterValue;
};

const increment = () => {
  counterValue = counterValue + 1;
  counterRef.textContent = counterValue;
};

decrementRef.addEventListener('click', decrement);
incrementRef.addEventListener('click', increment);