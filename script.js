const sketch = document.querySelector('.sketch');

function createPixel(n) {
  for (let i = 1; i <= n; i++) {
    const newPixel = document.createElement('div');
    newPixel.classList.add('sketchPixel');
    sketch.appendChild(newPixel);
  }
}

function createGrid(n) {
  for (let i = 1; i <= n; i++) {
    createPixel(n);
    for (let j = 1; j <= n; j++) {
      if (j === n) {
        //add br to get to next line
        const brInsert = document.createElement('br');
        sketch.appendChild(brInsert);
      }
    }
  }
}



createGrid(16);
