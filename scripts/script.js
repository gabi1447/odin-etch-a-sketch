const container = document.querySelector(".container");
const dimensionsButton = document.querySelector("#dimensions");
let grid_width = 100;
let grid_height = 100;

function createSquareDiv(divWidth, divHeight) {
    const div = document.createElement('div');
    div.style.width = `${divWidth}px`;
    div.style.height = `${divHeight}px`;
    div.style.border = "1px solid black";
    return div;
}

function createGrid(gridWidth, gridHeight) {
    const divWidth = container.clientWidth / gridWidth;
    const divHeight = container.clientHeight / gridHeight;
    for (let i = 0; i < gridWidth; i++) {
        for (let j = 0; j < gridHeight; j++) {
            const div = createSquareDiv(divWidth, divHeight);
            container.appendChild(div);
        }
    }
}

window.addEventListener("resize", () => {
    const divWidth = container.clientWidth / grid_width;
    const divHeight = container.clientHeight / grid_height;
    for (let i of container.childNodes) {
        i.style.width = `${divWidth}px`;
        i.style.height = `${divHeight}px`;
    }
});

container.addEventListener("mouseover", event => {
    if (event.target === event.currentTarget) {
        return;
    }
    event.target.classList.add("black");
});

dimensionsButton.addEventListener("click", () => {
    const gridDimensions = prompt("Enter a number to represent the dimensions of your grid", "e.g. Enter 16 to generate a 16x16 grid");

    if (gridDimensions < 0 || gridDimensions > 100) {
        alert("Enter a valid number");
        return;
    }

    grid_width = +gridDimensions 
    grid_height = +gridDimensions;
    container.textContent = '';
    createGrid(grid_width, grid_height);
});

createGrid(grid_width, grid_height);