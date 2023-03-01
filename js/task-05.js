const inputEl = document.querySelector('#name-input');

const nameEl = document.querySelector('#name-output');

inputEl.addEventListener('input', (event) => {
    if (event.target.value.trim() === "") {
        nameEl.textContent = 'Anonymous';
    } else {
        nameEl.textContent = event.target.value;
    };
});