const formEl = document.querySelector('.login-form');
// console.log(formEl);

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
   
    const formElementmail = event.currentTarget.elements.email;
    const formElementPassword = event.currentTarget.elements.password;
 const obj = {
        [formElementmail.name]: formElementmail.value,
        [formElementPassword.name]: formElementPassword.value,
    };
    if (formElementmail.value === '' || formElementPassword.value === '') {
        alert('Всі поля повинні бути заповнені !!!');
    } else {
        console.log(obj)
    }
   
    

  
    event.currentTarget.reset();
};


