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