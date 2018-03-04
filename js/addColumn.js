function addColumn() {
    let tblHeadObj = document.getElementById('myTable').tHead; //table head
    let myTable = document.getElementById("myTable");

    console.log(tblHeadObj.rows.length);
    for (let h=0; h < tblHeadObj.rows.length; h++) {
        let tblBodyObj = document.getElementsByTagName('tr'); //table body
        if(h == 0) {
            let newTH = document.createElement('th');
            tblHeadObj.rows[0].appendChild(newTH); //append ne th to table
            newTH.innerHTML = columnHead[tblHeadObj.rows[0].cells.length - 2]; //append th content to th
        }else if(h > 0)
        {
            let newTD = document.createElement('td');
            tblBodyObj.item(h).insertCell(myTable.rows.length - 1);
            //tblBodyObj.rows[h].insertCell();
            //let cell = tblBodyObj.rows[h].insertCell(h);
            //cell.id = columnHead[tblHeadObj.rows[0].cells.length - 2]+rowCount;
            console.log(columnHead[tblHeadObj.rows[h].cells.length - 2]+h);
            newTD.id = columnHead[tblHeadObj.rows[h].cells.length - 2]+h;
            newTD.contentEditable = 'true';
            //console.log("column id "+(myTableHead[i+1])+rowCount);
            //console.log("Head id "+(columnHead[tblHeadObj.rows[h].cells.length - 2].innerHTML));
            console.log("Head cell id "+newTD.getAttribute('id'));
        }
    }
}