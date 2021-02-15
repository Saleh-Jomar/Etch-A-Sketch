window.addEventListener('load',drawGrid)

let pixelSize
let color

const slider = document.getElementById("slider");
const output = document.getElementById("slider-value");
const create = document.getElementById('create');
const colorButton = document.querySelectorAll('.color-button')
const gridContainer = document.querySelector('.grid-container');
const colorpicker = document.getElementById('color-picker');
output.innerHTML = slider.value;
pixelSize = slider.value;
color = 'black';

slider.oninput = function() {
    output.innerHTML = this.value;
    pixelSize = this.value;
}

colorButton.forEach(button => {
    button.onclick = () => {
        color = button.value;
    };
})

function drawGrid(){
    gridContainer.setAttribute('style', `grid-template-columns: repeat(${pixelSize}, 1fr); grid-template-rows: repeat(${pixelSize}, 1fr);`);
    for (let i=0; i < (pixelSize*pixelSize); i++){
        const grid = document.createElement('div');
        grid.classList.add('grid');
        gridContainer.appendChild(grid);
    }
    const grids = document.querySelectorAll('.grid');
    grids.forEach(div => {
        div.addEventListener('mouseover',colorGrid);
    });
}

create.onclick = () => {
    const grids = document.querySelectorAll('.grid');
    grids.forEach(div => {
        gridContainer.removeChild(div);
    });
    drawGrid()
}
function colorGrid(e){
    switch(color){
        case 'black':
            this.setAttribute('style', 'background-color: black;');
            break;
        case 'eraser':
            this.setAttribute('style', 'background-color: white;');
            break;
        case 'rainbow':
            let rainbow = `hsl(${Math.random() * 360}, 100%, 50%)`;
            this.setAttribute('style', `background-color: ${rainbow};`);
            break;
        case 'pick':
            colorpick = colorpicker.value
            this.setAttribute('style', `background-color: ${colorpick};`)
            break;
    }    
}