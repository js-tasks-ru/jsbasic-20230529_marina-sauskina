function makeDiagonalRed(table) {
  let i = 0;
  for (let row of table.rows) {
    row.cells[i].style.setProperty("background-color",'red');
    i++;
  }

}
