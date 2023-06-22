function highlight(table) {
  const TABLE = table.querySelector('tbody');
  for (let row of TABLE.rows) {
    if (row.cells[3].getAttribute("data-available") === "true") {
      row.classList.add('available');
    } else if (row.cells[3].getAttribute("data-available") === "false") {
      row.classList.add('unavailable');
    } else {
      row.hidden = true;
    }
    if (row.cells[2].textContent === "m") {
      row.classList.add('male');
    } else if (row.cells[2].textContent === "f") {
      row.classList.add('female');}
    if (row.cells[1].textContent < 18) {
      row.style.setProperty("text-decoration", "line-through");
    }

  }


}
