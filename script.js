function addRow() {
    let grid = document.querySelector('.container');
    let newRow = document.createElement('div');
    let getRow = document.getElementsByClassName('row');
    let getCol = document.querySelectorAll('.col');
    
    console.log(getCol);
    newRow.classList.add('row');

    if (getRow.length == 0) {
        let newCol = document.createElement('div');
        newCol.classList.add('col');
        newCol.textContent = "Column"
        newRow.appendChild(newCol);
        grid.appendChild(newCol);
    }
    else {
        for (let i = 0; i < getCol.length / getRow.length; i++) {
            let newCol = document.createElement('div');
            newCol.classList.add('col');
            newCol.textContent = "Column"
            newRow.appendChild(newCol);
        }
    }

    grid.appendChild(newRow);

    console.log(grid)
}


function deleteRow() {
    let grid = document.querySelector('.container');
    let rows = document.getElementsByClassName('row');
    
    if(rows.length > 0)
        rows[rows.length - 1].remove();

    console.log(grid);
}

function addColumn() {
    let grid = document.querySelector('.container');
    let rows = document.getElementsByClassName('row');
    let col = document.getElementsByClassName('col');
    let newRow = document.createElement('div');
    
    if(col.length == 0) {
        newRow.classList.add('row');
        let newCol = document.createElement('div');
        newCol.classList.add('col');
        newCol.textContent = "Column"
        newRow.appendChild(newCol);
        grid.appendChild(newRow);
    } else {
        for (let i = 0; i < rows.length; i++) {
            let newCol = document.createElement('div');
            newCol.classList.add('col');
            newCol.textContent = "Column";
            rows[i].appendChild(newCol);
        }
    }

    console.log(grid);
}

function removeColumn() {
    let grid = document.querySelector('.container');
    let rows = document.getElementsByClassName('row');

    if (rows.length > 0) {
        for (let i = 0; i < rows.length; i++) {
            let col = rows[i].getElementsByClassName('col');
    
            if(col.length > 0) {
                col[col.length - 1].remove();
            }
        }
    } else {

    }

    console.log(grid)
}

function clickChange() {
    let colorSelect = document.getElementById('colorOption')[0].selectedIndex = 0;
    let colorSelect2 = document.getElementById('colorOption')[0].selectedIndex = 1;
    let colorSelect3 = document.getElementById('colorOption')[0].selectedIndex = 2;
    let col = document.getElementsByClassName('col');
    
    console.log(colorSelect2);
    console.log(colorSelect3);

    if (colorSelect == 0)
        col = document.body.style.backgroundColor = "red";
}