function addRow() {
    let grid = document.querySelector('.container');
    let newRow = document.createElement('div');
    let getRow = document.getElementsByClassName('row');
    let getCol = document.querySelectorAll('.col');
    
    console.log(getCol);
    //Gives the new row a class name
    newRow.classList.add('row');

    //Appends a new row to container when length is 0
    if (getRow.length == 0) {
        let newCol = document.createElement('div');
        newCol.classList.add('col');
        newCol.textContent = "Column"
        newCol.setAttribute('onclick', 'clickChange(this)')
        newRow.appendChild(newCol);
        grid.appendChild(newCol);
    }
    //Adds a new row when rows length is not equal to 0
    else {
        for (let i = 0; i < getCol.length / getRow.length; i++) {
            let newCol = document.createElement('div');
            newCol.classList.add('col');
            newCol.setAttribute('onclick', 'clickChange(this)')
            newCol.textContent = "Column"
            newRow.appendChild(newCol);
        }
    }

    //Appends new row to grid
    grid.appendChild(newRow);

    console.log(grid)
}


function deleteRow() {
    let grid = document.querySelector('.container');
    let rows = document.getElementsByClassName('row');
    
    //Removes a row from the grid
    if(rows.length > 0)
        rows[rows.length - 1].remove();

    console.log(grid);
}

function addColumn() {
    let grid = document.querySelector('.container');
    let rows = document.getElementsByClassName('row');
    let col = document.getElementsByClassName('col');
    let newRow = document.createElement('div');
    
    //Adds a new column when column length is 0
    if(col.length == 0) {
        newRow.classList.add('row');
        let newCol = document.createElement('div');
        newCol.classList.add('col');
        newCol.setAttribute('onclick', 'clickChange(this)')
        newCol.textContent = "Column"
        newRow.appendChild(newCol);
        grid.appendChild(newRow);
    }
    //Adds new cell to each row 
    else {
        for (let i = 0; i < rows.length; i++) {
            let newCol = document.createElement('div');
            newCol.classList.add('col');
            newCol.setAttribute('onclick', 'clickChange(this)')
            newCol.textContent = "Column";
            rows[i].appendChild(newCol);
        }
    }

    console.log(grid);
}

function removeColumn() {
    let grid = document.querySelector('.container');
    let rows = document.getElementsByClassName('row');

    //Removes a cell from each row
    if (rows.length > 0) {
        for (let i = 0; i < rows.length; i++) {
            let col = rows[i].getElementsByClassName('col');
            if(col.length > 0) {
                col[col.length - 1].remove();
            } 
        }
    }

    console.log(grid)
}

function clickChange(clickColor) {
    let selectColor = document.getElementById('colorOption');
    let cellColor = selectColor.options[selectColor.selectedIndex].value;
    let getCol = document.querySelector('.col');

    console.log(selectColor);
    console.log(cellColor);

    //Changes color of cell based on selected index
    clickColor.style.backgroundColor = cellColor;
}

function fillWhite() {
    let getCol = document.querySelectorAll('.col');
    let selectColor = document.getElementById('colorOption2');
    let cellColor = selectColor.options[selectColor.selectedIndex].value;

    //Changes background color of cell if background color is not set
    for (let i = 0; i < getCol.length; i++) {
        if(getCol[i].style.backgroundColor == "") {
            getCol[i].style.backgroundColor = cellColor;
            console.log(getCol[i]);
        }   //Continues if cell has a background color 
        else
            continue;
    }
}

function fillColor() {
    let getCol = document.querySelectorAll('.col');
    let selectColor = document.getElementById('colorOption3');
    let cellColor = selectColor.options[selectColor.selectedIndex].value;

    console.log(cellColor);

    //Iterates through each cell to add a background color
    for (let i = 0; i < getCol.length; i++) {
        getCol[i].style.backgroundColor = cellColor;
        console.log(getCol[i]);
    }
}