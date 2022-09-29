const textInput = document.querySelector('#name-input');
console.log(textInput.placeholder);

const texOutput = document.querySelector("#name-output");
console.log(texOutput);


textInput.addEventListener("input", event => {texOutput.textContent = event.currentTarget.value});

textInput.addEventListener("blur", () => { texOutput.textContent = "Anonymous" });
