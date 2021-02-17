window.addEventListener('load',drawGrid)

let pixelSize
let color
let mouseHold

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
        grid.setAttribute('style', 'background-color: white;')
        gridContainer.appendChild(grid);
    }
    const grids = document.querySelectorAll('.grid');
    grids.forEach(div => {
        div.addEventListener('mouseover',colorGrid);
    });
}

create.onclick = () => {
    gridContainer.innerHTML = '';
    drawGrid()
}

window.addEventListener('mousedown',()=>{
    mouseHold = true;
});
window.addEventListener('mouseup',()=>{
    mouseHold = false;
});

function colorGrid(e){
    if (mouseHold==true){
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
            case 'grayscale':
                currentColor = this.getAttribute('style');
                currentColorSub = currentColor.substr(0,28);
                if (currentColorSub != 'background-color: rgba(0,0,0'){
                    this.setAttribute('style',`background-color: rgba(0,0,0,0.1);`)
                    return;
                }
                currentColorAlpha = currentColor.substr(29).slice(0,-2);
                if (+currentColorAlpha<1){
                    newAlpha = +currentColorAlpha+0.1;
                    newAlpha = Math.round(newAlpha*10)/10;
                    this.setAttribute('style', `background-color: rgba(0,0,0,${newAlpha});`);
                }
        }    
    }
}   