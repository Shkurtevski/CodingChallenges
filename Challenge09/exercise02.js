function checkEvenDivisible() {
  let resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  for (let i = 10; i <= 100; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      let message = `The number ${i} is even and divisible by 3`;
      console.log(message);
      resultDiv.innerHTML += `<p>${message}</p>`;
    }
  }
}
