const mainContainer = document.querySelector("div");
mainContainer.textContent = " ";

const gridDivContainer = document.createElement("div");
gridDivContainer.setAttribute("id", "gridContainerDiv");
mainContainer.appendChild(gridDivContainer)

function createGridItem(size){
    gridDivContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    for(let i = 0; i < size * size; i++){
        const item = document.createElement("div");
        item.classList.add("cell");
        gridDivContainer.appendChild(item);
    }
}

createGridItem(16);