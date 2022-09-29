
let counterValueJS = 0;

 const counterValue = document.querySelector('#value');

const counterBlock = document.querySelector('#counter');

const buttMinus = counterBlock.firstElementChild;
 buttMinus.addEventListener('click', () => {
 counterValueJS -= 1;
 counterValue.textContent = counterValueJS;
});

const buttPlus = counterBlock.lastElementChild;
buttPlus.addEventListener('click', () => {
   counterValueJS += 1;
   counterValue.textContent = counterValueJS;  
  });
  
