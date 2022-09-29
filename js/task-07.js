const fontSizeControl = document.querySelector('input');
const spanText = document.querySelector('#text');
fontSizeControl.addEventListener("input", event => {spanText.style.fontSize = event.currentTarget.value + "px";});
