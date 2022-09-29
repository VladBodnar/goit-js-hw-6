const loginFormEll = document.querySelector('.login-form');

loginFormEll.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

if (email !== "" && password !== "") {
    const formData = {
             email,
             password
         } 
         console.log(formData);
    }
else {alert("Всі поля повинні бути заповнені!")}
}
