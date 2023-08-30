const namesArray = [
  ["Antonio", true, 5],
  ["Marija", false],
  ["Darko", true, 3],
];

function findNameAndPrintDetails() {
  const name = prompt("Please enter a name:");
  let foundPerson = null;

  for (let i = 0; i < namesArray.length; i++) {
    if (namesArray[i][0] === name) {
      foundPerson = namesArray[i];
      break;
    }
  }

  if (foundPerson) {
    const [name, hasVoted, grade] = foundPerson;
    const votingStatus = hasVoted ? "Voted!" : "Didn't vote";
    const gradeString = grade ? grade.toString() : "";

    const nameElem = document.createElement("span");
    nameElem.textContent = name;
    const votingStatusElem = document.createElement("span");
    votingStatusElem.textContent = votingStatus;
    const gradeElem = document.createElement("span");
    gradeElem.textContent = gradeString;

    const outputRow = document.createElement("div");
    outputRow.classList.add("output-row");
    outputRow.appendChild(nameElem);
    outputRow.appendChild(votingStatusElem);
    outputRow.appendChild(gradeElem);

    const outputDiv = document.getElementById("output");
    outputDiv.appendChild(outputRow);
  } else {
    alert("Person not found in array.");
  }
}

findNameAndPrintDetails();
