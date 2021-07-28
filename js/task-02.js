const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listIngredients = document.querySelector('#ingredients')
const liPlusIngredient = ingredients.map(ingredient => {
const li = document.createElement('li')
      li.textContent = ingredient;
  return li
});

listIngredients.append(...liPlusIngredient)
