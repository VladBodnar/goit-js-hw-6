const policyInput = document.querySelector('input');

const validBorderStyle = 'valid';
const invalidBorderStyle = 'invalid';

  const  policyDetect = policyInput.addEventListener("blur", () => {
    if (policyInput.value.length === Number(policyInput.dataset.length))
    {policyInput.classList.add(validBorderStyle)}
    else {policyInput.classList.add(invalidBorderStyle)}
  });