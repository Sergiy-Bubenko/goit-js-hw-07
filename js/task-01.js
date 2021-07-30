const numberOfCategories = document.querySelectorAll('.item');
console.log(`В списке ${numberOfCategories.length} категорий.`);

numberOfCategories.forEach(category => {
  console.log(`Категория: ${category.querySelector('h2').textContent}.`);
  console.log(`Количество элементов: ${category.querySelectorAll('li').length}.`);
});


