function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColorBtn = document.querySelector(".change-color");
const changeColorBody = document.querySelector('body');
const changeColorText = document.querySelector('.color');
changeColorBtn.addEventListener("click",  () => {  
  changeColorBody.style.background = getRandomHexColor();
  changeColorText.textContent = getRandomHexColor();
});

