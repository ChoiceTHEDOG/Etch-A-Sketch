const mainContainer = document.querySelector("div");

// creation of the grid container
const gridDivContainer = document.createElement("div");
gridDivContainer.setAttribute("id", "gridContainerDiv");
mainContainer.appendChild(gridDivContainer)

// size button creation
const sizeButton = document.createElement("button");
sizeButton.setAttribute("id", "sizeButton");
sizeButton.textContent = "set size"
mainContainer.insertBefore(sizeButton, gridDivContainer);

let userInputSize;


sizeButton.addEventListener("click", () => {
    userInputSize = prompt("Enter a number between 1-100 to set the grid size by side");
    if(userInputSize >= 1 && userInputSize <= 100){
        createGridItem(userInputSize)
    } else {
        alert("Invalid value, please enter a number between 1-100");
    }
});


function createGridItem(size){
    gridDivContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for(let i = 0; i < size * size; i++){
        const item = document.createElement("div");
        item.classList.add("cell");
        item.addEventListener("mouseenter", () => {
            item.classList.add("hoverOn");
        });
        gridDivContainer.appendChild(item);
    }
}