const input = document.querySelector('#controls input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createButton.addEventListener('click', handleCreate);
destroyButton.addEventListener('click', handleDestroy);

function handleCreate() {
  const amount = parseInt(input.value);
  if (amount < parseInt(input.min) || amount > parseInt(input.max)) {
    alert(`Please enter a value between ${input.min} and ${input.max}`);
    return;
  }
  createBoxes(amount);
  clearInput();
}

function handleDestroy() {
  destroyBoxes();
  clearInput();
}

function createBoxes(amount) {
  destroyBoxes();

  let size = 30;
  const step = 10;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i += step) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(box);
    size += step;
  }

  boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

function clearInput() {
  input.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
