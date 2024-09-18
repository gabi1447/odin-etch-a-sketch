const container = document.querySelector(".container");
const GENERAL_WIDTH = 16;
const GENERAL_HEIGHT = 16;

function createSquareDiv(width, height) {
    const div = document.createElement('div');
    div.style.width = `${width}px`;
    div.style.height = `${height}px`;
    div.style.border = "1px solid black";
    return div;
}

function createGrid() {
    const divWidth = container.clientWidth / GENERAL_WIDTH;
    const divHeight = container.clientHeight / GENERAL_HEIGHT;
    for (let i = 0; i < GENERAL_WIDTH; i++) {
        for (let j = 0; j < GENERAL_HEIGHT; j++) {
            const div = createSquareDiv(divWidth, divHeight);
            container.appendChild(div);
        }
    }
}

window.addEventListener("resize", () => {
    const divWidth = container.clientWidth / GENERAL_WIDTH;
    const divHeight = container.clientHeight / GENERAL_HEIGHT;
    for (let i of container.childNodes) {
        i.style.width = `${divWidth}px`;
        i.style.height = `${divHeight}px`;
    }
})

container.addEventListener("mouseover", event => {
    event.target.classList.add("black");
});

/* container.addEventListener("mouseout", event => {
    setTimeout(() => {
        event.target.style.backgroundColor = "white";
    }, 1000);
}) */

/* container.addEventListener("mousedown", event => {
    event.target.style.backgroundColor = "black";
}) */

createGrid();