/* ==== DOM Functions ==== */

const toggleHiddenElement = (domElement) => {
  if(domElement.style.display === 'none'){
    domElement.style.display = 'block';
  } else {
    domElement.style.display = 'none';
  }
} // End of toggleHiddenElement

const changeToFunkyColor = (domElement) => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    domElement.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

export { toggleHiddenElement, changeToFunkyColor };