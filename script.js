function addRow() {
    let grid = document.querySelector('.container');
    let newRow = document.createElement('div');
    let getRow = document.querySelector('.row');
    
    console.log(getRow);
    newRow.classList.add('row');

    for (let i = 0; i < getRow.length; i++) {
        let newCol = document.createElement('div');
        newCol.classList.add('col');
        newRow.appendChild(newCol);
    }

    grid.appendChild(newRow);

    console.log(grid)
}


function deleteRow() {
    let rows = document.getElementsByClassName('row');
    
    if(rows.length > 0)
        rows[rows.length - 1].remove();
}

function addColumn() {
    let grid = document.getElementsByClassName('container');
    let rows = document.getElementsByClassName('row');

    for (let i = 0; i < rows.length; i++) {
        let newCol = document.createElement('div');
        newCol.classList.add('col');
        rows[i].appendChild(newCol);
    }

    console.log(grid);
}

function removeColumn() {
    let rows = document.getElementsByClassName('row');

    if (rows.length > 0) {
        for (let i = 0; i < rows.length; i++) {
            let col = rows[i].getElementsByClassName('col');
    
            if(col.length > 0) {
                col[col.length - 1].remove();
            }
        }
    }
}

function clickChange() {

}