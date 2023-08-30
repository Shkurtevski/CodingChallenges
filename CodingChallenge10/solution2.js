const name = prompt("Enter name:");

const arr = [
  ["Antonio", true, 5],
  ["Marija", false],
  ["Darko", true, 3],
];

function findName(arr, name) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === name) {
      return arr[i];
    }
  }
  return null;
}

const result = findName(arr, name);

if (result) {
  const table = document.createElement("table");
  const row = table.insertRow();
  const cell1 = row.insertCell();
  const cell2 = row.insertCell();
  const cell3 = row.insertCell();
  cell1.innerHTML = result[0];
  cell2.innerHTML = result[1] ? "Voted!" : "Didn't vote";
  if (result[1]) {
    cell3.innerHTML = result[2];
  }
  document.body.appendChild(table);
} else {
  alert("Name not found in array!");
}
