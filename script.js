//functions
function createGrid(n) {
  for (let i = 1; i <= n; i++) {
    const divColumn = document.createElement('div');
    divColumn.classList.add('divColumn');
    sketch.appendChild(divColumn);

   for (let j = 1; j <= n; j++) {
      if (j === n) {
        for (let i = 1; i <= n; i++) {
          const newPixel = document.createElement('div');
          newPixel.classList.add('sketchPixel');
          divColumn.appendChild(newPixel);
        }
      }
    }
    
  }
}

const sketch = document.querySelector('.sketch');

createGrid(16);

// must come after createGrid so there actually are sketchPixels
const pixels = document.querySelectorAll('.sketchPixel');

// highlight the mouseover target
pixels.forEach((pixel) => {
  pixel.addEventListener(
    "mouseover",
    (event) => {
      event.target.style.backgroundColor = "black";
    },
    false,
  );
});
