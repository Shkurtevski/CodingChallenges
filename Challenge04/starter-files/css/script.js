const contentImgs = document.querySelectorAll(".content-img");
contentImgs.forEach((contentImg) => {
  const img = contentImg.querySelector("img");
  const text = document.createElement("div");
  text.classList.add("text");
  text.innerText = "culpa qui officia deserunt mollit";
  contentImg.appendChild(text);

  contentImg.addEventListener("mouseenter", () => {
    img.style.opacity = 0;
    text.style.opacity = 1;
  });

  contentImg.addEventListener("mouseleave", () => {
    img.style.opacity = 1;
    text.style.opacity = 0;
  });
});