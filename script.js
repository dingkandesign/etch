const sketch = document.querySelector('.sketch');



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

createGrid(16);

const pixels = document.querySelectorAll('.sketchPixel');
pixels.forEach((pixel) => {
  pixel.addEventListener(
    "mouseover",
    (event) => {
      // highlight the mouseover target
      event.target.style.backgroundColor = "black";
    },
    false,
  );
});
