const people = [
  {
    name: "Antonio",
    voted: true,
    grade: 5,
    lowercaseName: "antonio",
  },
  {
    name: "Marija",
    voted: false,
    lowercaseName: "marija",
  },
  {
    name: "Darko",
    voted: true,
    grade: 3,
    lowercaseName: "darko",
  },
  {
    name: "Nenad",
    voted: false,
    lowercaseName: "nenad",
  },
  {
    name: "Ana",
    voted: true,
    grade: 4,
    lowercaseName: "ana",
  },
];

// CREATE A LOWERCASE VERSION OF THE NAME PROPERTY FOR EACH OBJECT IN THE ARRAY
people.forEach((person) => {
  person.lowercaseName = person.name.toLowerCase();
});

// GET THE INPUT AND BUTTON ELEMENTS
const nameInput = document.getElementById("name-enter");
const searchButton = document.getElementById("search-button");

// ADD A CLICK EVENT LISTENER TO THE SEARCH BUTTON
searchButton.addEventListener("click", function () {
  // GET THE ENTERED NAME FROM INPUT AND CONVERT IT TO LOWERCASE
  let enteredName = nameInput.value.toLowerCase();

  // CALL THE SEARCH FOR NAME FUNCTION WITH THE ENTERED NAME AND THE ARRAY OF OBJECTS
  searchForName(enteredName, people);
});

// ADD A KEYDOWN EVENT LISTENER TO THE NAME INPUT FIELD
nameInput.addEventListener("keydown", function (event) {
  // CHECK IF THE KEY PRESSED WAS THE ENTER KEY (KEY CODE 13)
  if (event.keyCode === 13) {
    // TRIGGER A CLICK EVENT ON THE SEARCH BUTTON
    searchButton.click();
  }
});

// DEFINE THE SEARCH NAME FUNCTION THAT SEARCHES FOR THE ENTERED NAME IN THE ARRAY OF OBJECTS
function searchForName(name, peopleArray) {
  // FIND THE PERSON NAME IN THE ARRAY THAT MATCHES THE ENTERED NAME
  let person = peopleArray.find(function (item) {
    return item.lowercaseName === name;
  });

  // GET THE RESULT DIV ELEMENT
  let resultDiv = document.getElementById("result");

  // CHECK IF PERSON OBJECT WAS FOUND IN THE ARRAY
  if (person) {
    // IF THE PERSON VOTED
    if (person.voted) {
      resultDiv.textContent = `${person.name}, Voted!, ${person.grade}`;
      resultDiv.style.color = "green";
    }
    // IF THE PERSON DIDN'T VOTE
    else {
      resultDiv.textContent = `${person.name}, Didn't vote`;
      resultDiv.style.color = "red";
    }
  }
  // IF THE PERSON WASN'T FOUND
  else {
    resultDiv.textContent = "Name not found in array";
    resultDiv.style.color = "red";
  }
}
