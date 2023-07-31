const container = document.querySelector('.container');
const resetBtn = document.querySelector('.resetBtn');

function changeColor(e) {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}

// Create initial 16x16 grid
// Makes the rows
for (i=0; i<16; i++) {
  const gridRow = document.createElement('div');
  gridRow.classList.add('gridRow');

  // And makes the columns
  for (j=0; j<16; j++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('gridItem');
    gridItem.addEventListener('mouseover', changeColor);
    gridRow.appendChild(gridItem);
  }
  container.appendChild(gridRow);
}

resetBtn.addEventListener('click', function () {
  const size = parseInt(prompt('How many spaces wide and tall'));

  // Deletes old grid
  while (container.firstChild) {
    container.removeChild(container.lastChild);
  }

  // Makes new grid based on user input
  // Makes the rows
  for (i=0; i<size; i++) {
  const gridRow = document.createElement('div');
  gridRow.classList.add('gridRow');

  // And makes the columns
  for (j=0; j<size; j++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('gridItem');
    gridItem.addEventListener('mouseover', changeColor);
    gridRow.appendChild(gridItem);
  }
  container.appendChild(gridRow);
  }
});
