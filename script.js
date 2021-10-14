let numRows = 0;
let numCols = 0;
let colorSelected; 

// change color 
function changeColor() {
    this.style.backgroundColor = colorSelected
}

//Add a row
function addR() {
    // get reference to grid
    let grid = document.getElementById("grid")

    // create row aka table row aka tr
    let row = document.createElement("tr")

    // for each column
    for(let i = 0; i < numCols; ++i) {
        // create table cell aka table definition aka td
        let cell = document.createElement("td")
        
        // to allow color fill
        cell.addEventListener("click", changeColor)

        // attach cell to row  
        row.appendChild(cell)
    }
    // attach row to grid
    grid.appendChild(row)
    numRows++
}
//Add a column
function addC() {
    // get reference to grid
    let grid = document.getElementById("grid")

    // loop through all rows
    for(let i = 0; i < numRows; ++i) {
        // get child at i aka row
        let row = grid.children[i]

        // create table cell aka table definition aka td
        let cell = document.createElement("td")

        // to allow color fill
        cell.addEventListener("click", changeColor)
        
        // attach cell to row  
        row.appendChild(cell)
    }

    numCols++
}

//Remove a row
function removeR() {

    // get reference to grid
    let grid = document.getElementById("grid")

    // get the last row in grid
    let row = grid.children[numRows - 1]

    // remove the row
    row.remove()
    
    numRows--
}
//Remove a column
function removeC() {

    // get reference to grid
    let grid = document.getElementById("grid")

    // loop through all rows
    for(let i = 0; i < numRows; ++i) {
        // retrieve child at i which is a row
        let row = grid.children[i]

        // get the last child in row
        let cell = row.children[numCols - 1]
        
        // remove cell from row  
        cell.remove()
    }

    numCols--
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    // Stop running the function if no cells exist
    if (numRows <= 0 || numCols <= 0) {
        return
    }

    // get reference to grid
    let grid = document.getElementById("grid")

    // loop through all rows
    for(let i = 0; i < numRows; ++i) {
        // retrieve child at i which is a row
        let row = grid.children[i]

        // loop through all cells
        for(let j = 0; j < numCols; ++j) {
            // get the last child in the row
            let cell = row.children[j]
            
            // color cell
            cell.style.backgroundColor = colorSelected
        }
    }
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}