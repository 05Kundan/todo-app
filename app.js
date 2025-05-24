let sno = 1;

function addTask() {
  // console.log("testing button clicked");

  const input = document.querySelector("input");
  let inputList = input.value;
  console.log(inputList);

  // 1. get the table element body
  const myTable = document.getElementById("table").querySelector("tbody");

  // 2. create a new row
  const newRow = document.createElement("tr");
  // console.log(myTable.ariaRowCount)

  let newRowLength = myTable.rows.length;
  
  // 3. create and insert cells in the row
  let cell1 = document.createElement("td");
  cell1.textContent = newRowLength + 1;

  const cell2 = document.createElement("td");
  cell2.textContent = inputList;

  const cell3 = document.createElement("td");
  cell3.textContent = "in process";

  const cell4 = document.createElement("td");
  let btnDelete = document.createElement("button");
  let btnFinished = document.createElement("button");

  btnFinished.textContent = "FINISHED";
  btnDelete.textContent = "DELETE";

  btnDelete.className = "btn btn-danger";
  btnFinished.className = "btn btn-success";
  cell4.appendChild(btnDelete);
  cell4.appendChild(btnFinished);

  // 4. append to the cells row
  newRow.appendChild(cell1);
  newRow.appendChild(cell2);
  newRow.appendChild(cell3);
  newRow.appendChild(cell4);
  myTable.appendChild(newRow);

  // 5. append row to the table body
  myTable.appendChild(newRow);
  input.value = "";

  // btnFinished
  btnFinished.addEventListener("click", () => {
    cell1.style.textDecoration = "line-through";
    cell2.style.textDecoration = "line-through";
    cell3.style.textDecoration = "line-through";
  });

  
  // // delete finished
  btnDelete.addEventListener("click", () => {
    let row = btnDelete.closest('tr');
    myTable.removeChild(row);

    // update sno
    const rows = myTable.querySelectorAll("tr");
    rows.forEach((r, i) => {
      r.cells[0].textContent = i+1;
    });
  });
 
}

// Enter key
document.addEventListener("keydown", (event) => {
  if (event.key == "Enter") addTask();
});
