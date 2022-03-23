const color = document.querySelectorAll('.palette-color');
const brushColor = document.querySelector('.current-brush');
let canvasSquares;
let currentColor;
let mouseDown = false;
createGrid(10);

function createGrid(width) {
  const canvas = document.querySelector('.canvas');
  canvas.innerHTML = '';
  const gridWidth = width;
  let count = 0;
  while (count <= gridWidth * gridWidth) {
    const div = document.createElement('div');
    div.className = 'square color-5';
    canvas.appendChild(div);
    count++;
  }
  canvasSquares = document.querySelectorAll('.square');

  canvas.style.gridTemplateRows = `repeat(${width},1fr)`
  canvas.style.gridTemplateColumns = `repeat(${width},1fr)`
  addListeners();
};

function addListeners(){
color.forEach(x => x.addEventListener('click', function () {
  currentColor = x.classList[1];
  brushColor.classList.replace(brushColor.classList[1], currentColor);
}));

canvasSquares.forEach(x => x.addEventListener('click', function () {
  x.classList.replace(x.classList[1], currentColor);
}));

canvasSquares.forEach(x => x.addEventListener('mouseenter', function () {
  if (mouseDown === true) x.classList.replace(x.classList[1], currentColor);
}));
};

window.addEventListener('mousedown', function () {
  mouseDown = true;
});

window.addEventListener('mouseup', function () {
  mouseDown = false;
});

const slider = document.getElementById("myRange");
const output = document.querySelectorAll('.slidevalue');
output.forEach(x => x.innerText = slider.value);

slider.oninput = function () {
  output.forEach(x => x.innerText = slider.value);
  createGrid(slider.value)
};