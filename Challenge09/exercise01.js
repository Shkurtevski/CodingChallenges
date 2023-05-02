function checkEvenness() {
  let numberInput = document.getElementById("number-input");
  let number = parseInt(numberInput.value);
  let resultDiv = document.getElementById("result");

  if (isNaN(number)) {
    resultDiv.innerHTML = "Invalid Input";
    console.log("Invalid input: " + number);
  } else if (number % 2 === 0) {
    resultDiv.innerHTML = `The number ${number} is even`;
    console.log(number + " is even");
  } else {
    resultDiv.innerHTML = `The number ${number} is not even`;
    console.log(number + " is not even");
  }
}
