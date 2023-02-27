const inputEl = document.querySelector('#validation-input');
const atribyte = inputEl.getAttribute('data-length');
console.log(atribyte)
const invalidEl = document.querySelector('#validation-input.invalid');

const validation = (event) => {
    const lengthValue = event.target.value.length;
    if (lengthValue === 0) {
        event.target.classList.remove('invalid');
        event.target.classList.remove('valid');
    }
    else if (lengthValue < atribyte || lengthValue > atribyte ) {
        event.target.classList.add('invalid');
        event.target.classList.remove('valid');
    } else {
    event.target.classList.add('valid');
    event.target.classList.remove('invalid');}
    
};
inputEl.addEventListener('blur', validation);

