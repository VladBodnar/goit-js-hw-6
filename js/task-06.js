const policyInput = document.querySelector('input');

  const  policyDetect = policyInput.addEventListener("blur", () => {
    if (policyInput.value.length == Number(policyInput.dataset.length))
    {policyInput.classList.remove('invalid'),
      policyInput.classList.add('valid')
    }
    else {policyInput.classList.remove('valid'),
      policyInput.classList.add('invalid')
      }
  });