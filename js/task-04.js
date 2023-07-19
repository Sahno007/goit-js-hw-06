const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counterValue = document.querySelector('#value');

let count = 0;

decrementBtn.addEventListener('click', () => {
  count -= 1;
  counterValue.textContent = count;
});

incrementBtn.addEventListener('click', () => {
  count += 1;
  counterValue.textContent = count;
});