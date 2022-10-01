const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulListIngr = document.querySelector('ul#ingredients');
const liArray = [];

const liListIngr = ingredients.forEach(function (ingredient) {
  const liList = document.createElement("li");
  liList.textContent = ingredient;
  liList.classList.add("item");
  liArray.push(liList);
});

 ulListIngr.append(...liArray);