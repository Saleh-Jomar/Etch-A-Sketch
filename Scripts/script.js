window.addEventListener('load',drawGrid)

let pixelSize

const slider = document.getElementById("slider");
const output = document.getElementById("slider-value");
const create = document.getElementById('create');
output.innerHTML = slider.value;
pixelSize = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
    pixelSize = this.value;
}

function drawGrid(){
    const gridContainer = document.querySelector('.grid-container');
    gridContainer.setAttribute('style', `grid-template-columns: repeat(${pixelSize}, 1fr); grid-template-rows: repeat(${pixelSize}, 1fr);`);
    for (let i=0; i < (pixelSize*pixelSize); i++){
        const grid = document.createElement('div');
        grid.classList.add('grid');
        gridContainer.appendChild(grid);
    }
    const grids = document.querySelectorAll('.grid');
    grids.forEach(div => {
        div.addEventListener('mouseover',color);
    });
}

create.onclick = () => {
    const grids = document.querySelectorAll('.grid');
    const gridContainer = document.querySelector('.grid-container');
    grids.forEach(div => {
        gridContainer.removeChild(div);
    });
    drawGrid()
}
function color(e){
    this.setAttribute('style', 'background-color: black;')
}