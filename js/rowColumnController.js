
var columnHead = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'Q', 'Y', 'Z',
    'AA', 'AB', 'AC', 'AD', 'AE', 'AF', 'AG', 'AH', 'AI', 'AJ', 'AK', 'AL', 'AM', 'AN', 'AO', 'AP', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AV', 'AW', 'AX', 'AY', 'AZ',
    'BA', 'BB', 'BC', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BK', 'BL', 'BM', 'BN', 'BO', 'BP', 'BQ', 'BR', 'BS', 'BT', 'BU', 'BV', 'BW', 'BQ', 'BY', 'BZ',
    'CA', 'CB', 'CC', 'CD', 'CE', 'CF', 'CG', 'CH', 'CI', 'CJ', 'CK', 'CL', 'CM', 'CN', 'CO', 'CP', 'CQ', 'CR', 'CS', 'CT', 'CU', 'CV', 'CW', 'CX', 'CY', 'CZ',
    'DA', 'DB', 'DC', 'DD', 'DE', 'DF', 'DG', 'DH', 'DI', 'DJ', 'DK', 'DL', 'DM', 'DN', 'DO', 'DP', 'DQ', 'DR', 'DS', 'DT', 'DU', 'DV', 'DW', 'DX', 'DY', 'DZ',
    'EA', 'EB', 'EC', 'ED', 'EE', 'EF', 'EG', 'EH', 'EI', 'EJ', 'EK', 'EL', 'EM', 'EN', 'EO', 'EP', 'EQ', 'ER', 'ES', 'ET', 'EU', 'EV', 'EW', 'EX', 'EY', 'EZ',
    'FA', 'FB', 'FC', 'FD', 'FE', 'FF', 'FG', 'FH', 'FI', 'FJ', 'FK', 'FL', 'FM', 'FN', 'FO', 'FP', 'FQ', 'FR', 'FS', 'FT', 'FU', 'FV', 'FW', 'FX', 'FY', 'FZ'];

var arithmeticOperations = [];

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
        }else if(i > 0)
        {
            cell.id = (myTableHead[i].innerHTML)+rowCount;
            cell.contentEditable = 'true';
            cell.onclick = function () {
                selectedCell((myTableHead[i].innerHTML)+rowCount);
            }
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
    }else
    {
        alert('cannot delete the head');
    }
}

function selectedCell(id)
{
    //alert(document.getElementById(id).innerHTML);
    document.getElementById(id)
        .addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                //alert(id);
                //document.getElementById("id_of_button").click();
                //alert('Enter Clicked & value is : '+document.getElementById(id).innerHTML);

                if(document.getElementById(id).textContent) {
                    let text = document.getElementById(id).textContent.trim();
                    text = text.substring(2);
                    text = text.substring(0, text.length - 1);
                    let result = 0;
                    console.log(text);
                    console.log(text.indexOf('+'));

                    if (text.indexOf('+') > -1) {
                        let addArray = [];
                        addArray = text.split('+');
                        result = parseInt(document.getElementById(addArray[0]).textContent, 10);//getting 1st value
                        for (let x = 1; x < addArray.length; x++) {
                            result += parseInt(document.getElementById(addArray[x]).textContent, 10);
                        }
                        arithmeticOperations.push(document.getElementById(id).textContent);
                        document.getElementById(id).innerText = result;
                        //alert('Enter Clicked & value is : '+text);


                    } else if (text.indexOf("-") > -1) {
                        let subArray = [];
                        subArray = text.split('-');
                        result = parseInt(document.getElementById(subArray[0]).textContent, 10);//getting 1st value
                        for (let x = 1; x < subArray.length; x++) {
                            result -= parseInt(document.getElementById(subArray[x]).textContent, 10);
                        }
                        arithmeticOperations.push(document.getElementById(id).textContent);
                        document.getElementById(id).innerText = result;
                        //alert('Enter Clicked & value is : ' + text);


                    }else if (text.indexOf("*") > -1) {
                        let mulArray = [];
                        mulArray = text.split('*');
                        result = parseInt(document.getElementById(mulArray[0]).textContent, 10);//getting 1st value
                        for (let x = 1; x < mulArray.length; x++) {
                            result *= parseInt(document.getElementById(mulArray[x]).textContent, 10);
                        }
                        arithmeticOperations.push(document.getElementById(id).textContent);
                        document.getElementById(id).innerText = result;
                        //alert('Enter Clicked & value is : ' + text);


                    }else if (text.indexOf("/") > -1) {
                        let divArray = [];
                        divArray = text.split('/');
                        result = parseInt(document.getElementById(divArray[0]).textContent, 10);//getting 1st value
                        for (let x = 1; x < divArray.length; x++) {
                            result /= parseInt(document.getElementById(divArray[x]).textContent, 10);
                        }
                        arithmeticOperations.push(document.getElementById(id).textContent);
                        document.getElementById(id).innerText = result;

                        //alert('Enter Clicked & value is : ' + text);
                    }
                }
        }
    });
}

/*
//// Enter click function
document.getElementById("id_of_textbox")
    .addEventListener("keyup", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("id_of_button").click();
        }
    });
*/


function addColumn() {
    let tblHeadObj = document.getElementById('myTable').tHead; //table head
    let myTable = document.getElementById("myTable");

    console.log(tblHeadObj.rows.length);
    for (let h=0; h < tblHeadObj.rows.length; h++) {
        let tblBodyObj = document.getElementsByTagName('tr'); //table body
        if(h == 0) {
            let newTH = document.createElement('th');
            newTH.contentEditable = 'true';
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

function removeColumn()
{
    var tbl = document.getElementById('myTable'), // table reference
        lastCol = tbl.rows[0].cells.length - 1,    // set the last column index
        i, j;
    console.log('Table row: '+tbl.rows.length);
    console.log('Table lastcol: '+lastCol);
    if(lastCol >= 1){
        // delete cells with index greater then 0 (for each row)
        for (i = 0; i < tbl.rows.length; i++) {
            //for (j = lastCol; j > 0; j--) {
                tbl.rows[i].deleteCell(lastCol);
            //}
        }
    }else {
        alert('cannot delete first column');
    }
}

function generateCSV(filename) {
    let csv = [];
    let rows = document.querySelectorAll("table tr");

    for (let i = 1; i < rows.length; i++) {
        let row = [], cols = rows[i].querySelectorAll("td, th");

        for (let j = 1; j < cols.length; j++)
            row.push(cols[j].innerText);

        csv.push(row.join(","));
    }

    // Download CSV file
    downloadCSVFile(csv.join("\n"), filename);
}

function downloadCSVFile(csv, filename) {
    let csvFile;
    let downloadLink;

    // CSV file
    csvFile = new Blob([csv], {type: "text/csv"});

    // Download link
    downloadLink = document.createElement("a");

    // File name
    downloadLink.download = filename;

    // Create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);

    // Hide download link
    downloadLink.style.display = "none";

    // Add the link to DOM
    document.body.appendChild(downloadLink);

    // Click download link
    downloadLink.click();
}










