const mainContainer = document.querySelector("div");

// creation of the grid container
const gridDivContainer = document.createElement("div");
gridDivContainer.setAttribute("id", "gridContainerDiv");
mainContainer.appendChild(gridDivContainer);

// size button creation
const sizeButton = document.createElement("button");
sizeButton.setAttribute("id", "sizeButton");
sizeButton.textContent = "set size";
sizeButton.classList.add("button");
mainContainer.insertBefore(sizeButton, gridDivContainer);

// clear grid button
const clearButton = document.createElement("button");
clearButton.setAttribute("id", "clearButton");
clearButton.textContent = "Clear";
clearButton.classList.add("button");
mainContainer.insertBefore(clearButton, gridDivContainer);

clearButton.addEventListener("click", () => {
    gridDivContainer.childNodes.forEach((div) => {
        div.classList.remove("hoverOn");
    })
});

let userInputSize;


sizeButton.addEventListener("click", () => {
    userInputSize = prompt("Enter a number between 1-100 to set the grid size by side");
    if(userInputSize >= 1 && userInputSize <= 100){
        createGrid(userInputSize)
    } else {
        alert("Invalid value, please enter a number between 1-100");
    }
});


function createGrid(size){
    deleteGrid();
    deleteGrid();
    deleteGrid();
    deleteGrid();
    deleteGrid();
    deleteGrid();
    deleteGrid();
    deleteGrid();
    deleteGrid();
    gridDivContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridDivContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for (let x = 0; x < (size * size); x++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener("mouseenter", () => {
            cell.classList.add("hoverOn");
        })        
        gridDivContainer.appendChild(cell);
    }
}
createGrid(16);

function deleteGrid(){
    gridDivContainer.childNodes.forEach((div) => {
        div.remove()
    })
}