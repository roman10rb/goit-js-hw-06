const controlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
textEl.style.fontSize = controlEl.value + 'px';

function handleChange(e) {
  return  textEl.style.fontSize = e.currentTarget.value + 'px';
}

controlEl.addEventListener('input', handleChange);
