function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

const spinButton = document.getElementById("spinButton");
spinButton.addEventListener("click", function(){
spinButton.classList.toggle("spin");
});