const textInput = document.querySelector('#name-input');

const texOutput = document.querySelector("#name-output");

textInput.addEventListener("input", function(event) { 
    if (event.currentTarget.value.length !== 0)
    {texOutput.textContent = event.currentTarget.value}
    else {texOutput.textContent = "Anonymous"}});

