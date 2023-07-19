const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.querySelectorAll('.item');

console.log(`Total categories: ${categoryItems.length}`);

categoryItems.forEach((item) => {
  const title = item.querySelector('h2').textContent;
  const itemList = item.querySelectorAll('li');
  const itemCount = itemList.length;

  console.log(`Category: ${title}`);
  console.log(`Items count: ${itemCount}`);
});