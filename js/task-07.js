const fontSizeControlRef = document.querySelector('#font-size-control');
const spanTextRef = document.querySelector('#text');

const onFontSizeControlTarget = addEventListener('input', fontSizeControl);
function fontSizeControl(event) {
  spanTextRef.style.fontSize = `${event.target.value}px`;
};