let numRows = 0;
let numCols = 0;
let colorSelected; 

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

    // loop through all the rows
    for(let i = 0; i < numRows; ++i) {
        // retrieve child at i aka row
        let row = grid.children[i]

        // create table cell aka table definition aka td
        let cell = document.createElement("td")
        
        // attach cell to row  
        row.appendChild(cell)
    }

    numCols++
}

//Remove a row
function removeR() {
    alert("Clicked Remove Row")
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}