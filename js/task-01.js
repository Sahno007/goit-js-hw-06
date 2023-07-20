const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.children;

console.log(`Number of categories: ${categoryItems.length}`);

Array.from(categoryItems).forEach((item) => {
  const titleElement = item.firstElementChild;
  const itemList = titleElement.nextElementSibling.children;
  const itemCount = itemList.length;

  console.log(`Category: ${titleElement.textContent}`);
  console.log(`Elements: ${itemCount}`);
});