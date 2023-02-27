const formEl = document.querySelector('.login-form');
// console.log(formEl);

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
   
   
    const formElementmail = event.currentTarget.elements.email;
    const formElementPassword = event.currentTarget.elements.password;
    if (formElementmail.value === '' || formElementPassword.value === '') {
        alert('Всі поля повинні бути заповнені !!!');
    };
    console.log(`Логін: ${formElementmail.value}, Пароль: ${formElementPassword.value}`);
    event.currentTarget.reset();

};


