// main declaration of elements 

let userInputSize;
const mainContainer = document.querySelector("div");

// creation of the grid container
const gridDivContainer = document.createElement("div");
gridDivContainer.setAttribute("id", "gridContainerDiv");
mainContainer.appendChild(gridDivContainer);

// button div container
const buttonContainer = document.createElement("div");
buttonContainer.setAttribute("id", "buttonContainer");
mainContainer.insertBefore(buttonContainer, gridDivContainer);

// size button creation
const sizeButton = document.createElement("button");
sizeButton.setAttribute("id", "sizeButton");
sizeButton.textContent = "Set grid size";
sizeButton.classList.add("button");
buttonContainer.appendChild(sizeButton);

// clear grid button
const clearButton = document.createElement("button");
clearButton.setAttribute("id", "clearButton");
clearButton.textContent = "Clear grid";
clearButton.classList.add("button");
buttonContainer.appendChild(clearButton);

// removing all the painted cells from the grid 
clearButton.addEventListener("click", () => {
    gridDivContainer.childNodes.forEach((div) => {
        div.classList.remove("hoverOn");
    })
});

// The user can input the size and tbe grid will generate in that size
sizeButton.addEventListener("click", () => {
    userInputSize = prompt("Enter a number between 1-100 to set the grid size by side");
    if(userInputSize >= 1 && userInputSize <= 100){
        createGrid(userInputSize)
    } else {
        alert("Invalid value, please enter a number between 1-100");
    }
});

// Create the grid, default size of 16x16, using css grid and repeat.

function createGrid(size){
    deleteGrid();
    deleteGrid();
    deleteGrid(); 
    deleteGrid();
    deleteGrid();   // For some reason this need to be run 9 times or the grid will bug
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

// removes the elements created in the function above
// "cleans" the parent div by removing all the generated divs

function deleteGrid(){
    gridDivContainer.childNodes.forEach((div) => {
        div.remove()
    })
}