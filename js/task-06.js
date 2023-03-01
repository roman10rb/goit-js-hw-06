const inputEl = document.querySelector('#validation-input');
const atribyte = inputEl.getAttribute('data-length');
const invalidEl = document.querySelector('#validation-input.invalid');

const validation = (event) => {
    const lengthValue = event.target.value.length;
    if (lengthValue === Number(atribyte)) {
        event.target.classList.remove('invalid');
        event.target.classList.add('valid');
    }
    else if (lengthValue !== Number(atribyte) ) {
        event.target.classList.add('invalid');
        event.target.classList.remove('valid');
    } else {
    event.target.classList.remove('valid');
    event.target.classList.remove('invalid');}
    
};
inputEl.addEventListener('blur', validation);

