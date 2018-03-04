var columnHead = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Q', 'Y', 'Z',
    'AA', 'AB', 'AC', 'AD', 'AE', 'AF', 'AG', 'AH', 'AI', 'AJ', 'AK', 'AL', 'AM', 'AN', 'AO', 'AP', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AV', 'AW', 'AX', 'AY', 'AZ',
    'BA', 'BB', 'BC', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BK', 'BL', 'BM', 'BN', 'BO', 'BP', 'BQ', 'BR', 'BS', 'BT', 'BU', 'BV', 'BW', 'BQ', 'BY', 'BZ',
    'CA', 'CB', 'CC', 'CD', 'CE', 'CF', 'CG', 'CH', 'CI', 'CJ', 'CK', 'CL', 'CM', 'CN', 'CO', 'CP', 'CQ', 'CR', 'CS', 'CT', 'CU', 'CV', 'CW', 'CX', 'CY', 'CZ',
    'DA', 'DB', 'DC', 'DD', 'DE', 'DF', 'DG', 'DH', 'DI', 'DJ', 'DK', 'DL', 'DM', 'DN', 'DO', 'DP', 'DQ', 'DR', 'DS', 'DT', 'DU', 'DV', 'DW', 'DX', 'DY', 'DZ',
    'EA', 'EB', 'EC', 'ED', 'EE', 'EF', 'EG', 'EH', 'EI', 'EJ', 'EK', 'EL', 'EM', 'EN', 'EO', 'EP', 'EQ', 'ER', 'ES', 'ET', 'EU', 'EV', 'EW', 'EX', 'EY', 'EZ',
    'FA', 'FB', 'FC', 'FD', 'FE', 'FF', 'FG', 'FH', 'FI', 'FJ', 'FK', 'FL', 'FM', 'FN', 'FO', 'FP', 'FQ', 'FR', 'FS', 'FT', 'FU', 'FV', 'FW', 'FX', 'FY', 'FZ'];

function addRow()
{
    let myTable = document.getElementById("myTable");
    let myTableHead = document.querySelectorAll("th");
    let columnCount = myTable.rows[0].cells.length;
    //let columnHead = myTable.rows[0].cells;

    let addRow = myTable.insertRow(myTable.rows.length);
    let rowCount = myTable.rows.length - 1;
    for(let i = 0; i < columnCount; i++)
    {
        let cell = addRow.insertCell(i);
        cell.id = (myTableHead[i+1].innerHTML)+rowCount;
        //cell.id = (myTableHead[i+1].innerHTML)+rowCount;
        cell.contentEditable = 'true';
        //console.log("column id "+(myTableHead[i+1])+rowCount);
        //console.log("cell id "+(myTableHead[i+1].innerHTML)+rowCount);
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





