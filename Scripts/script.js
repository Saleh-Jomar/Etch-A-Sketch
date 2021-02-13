let pixelSize
const slider = document.getElementById("slider");
const output = document.getElementById("slider-value");
output.innerHTML = slider.value;
pixelSize = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
    pixelSize = this.value;
}