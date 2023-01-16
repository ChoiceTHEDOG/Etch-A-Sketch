const mainContainer = document.querySelector("div");
mainContainer.textContent = " ";

// creation of the grid container
const gridDivContainer = document.createElement("div");
gridDivContainer.setAttribute("id", "gridContainerDiv");
mainContainer.appendChild(gridDivContainer)

function getGridSize(){
    prompt("Enter a number between 1-100 to set the grid size")
}

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

createGridItem(16);

// function hoverOn(){
//     item.classList.add("hoverOn");
// }