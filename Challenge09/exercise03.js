function findMinMaxAndCheckPrime() {
  let number1 = parseInt(document.getElementById("number-1").value);
  let number2 = parseInt(document.getElementById("number-2").value);
  let number3 = parseInt(document.getElementById("number-3").value);

  let smallest = Math.min(number1, number2, number3);
  let largest = Math.max(number1, number2, number3);

  let isSmallestPrime = true;
  let isLargestPrime = true;

  // SMALLEST-PRIME
  if (smallest <= 1) {
    isSmallestPrime = false;
  } else {
    for (let i = 2; i <= Math.sqrt(smallest); i++) {
      if (smallest % i === 0) {
        isSmallestPrime = false;
        break;
      }
    }
  }

  // LARGEST-PRIME
  if (largest <= 1) {
    isLargestPrime = false;
  } else {
    for (let i = 2; i <= Math.sqrt(largest); i++) {
      if (largest % i === 0) {
        isLargestPrime = false;
        break;
      }
    }
  }

  // RESULT
  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `<p>Smallest - ${smallest}, Largest - ${largest}</p>`;

  if (isSmallestPrime) {
    resultDiv.innerHTML += `<p>The smallest number ${smallest} is prime.</p>`;
  } else {
    resultDiv.innerHTML += `<p>The largest number ${largest} is prime.</p>`;
  }

  if (isLargestPrime) {
    resultDiv.innerHTML += `<p>The largest number ${largest} is prime.</p>`;
  } else {
    resultDiv.innerHTML += `<p>The largest number ${largest} is not prime.</p>`;
  }
}
