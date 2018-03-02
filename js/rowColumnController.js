function addRow()
{
    let myTable = document.getElementById("myTable");
    let myTableHead = document.querySelectorAll("th");
    let columnCount = myTable.rows[0].cells.length;
    var columnHead = myTable.rows[0].cells;

    let addRow = myTable.insertRow(myTable.rows.length);
    let rowCount = myTable.rows.length - 1;
    for(let i = 0; i < columnCount; i++)
    {
        let cell = addRow.insertCell(i);
        cell.id = (myTableHead[i+1].innerHTML)+rowCount;
        cell.contentEditable = 'true';
        console.log("column id "+(myTableHead[i+1].innerHTML)+rowCount);
        //console.log("Head id "+(myTableHead[i+1].innerHTML));
        //table.rows[1].cells[i].headers
        if(i == 0)
        {
            //cell.id = columnHead[i+1]+rowCount;
            cell.contentEditable = 'false';
            cell.innerHTML = rowCount.toString();
            cell.style.textAlign = 'center';
            //console.log("column id "+(myTableHead[i+1].innerHTML)+rowCount);
         }
    }
    //alert("Row count: "+myTable.rows.length);
}

function removeRow()
{
    let myTable = document.getElementById("myTable");
    //let columnCount = myTable.rows[0].cells.length;
    //let columnHead = myTable.rows[0].cells;
    if(myTable.rows.length > 1) {
        myTable.deleteRow(myTable.rows.length - 1);
    }

}
