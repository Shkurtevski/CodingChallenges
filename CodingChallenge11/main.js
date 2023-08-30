"use strict";

const textarea = document.querySelector("textarea");
const btn = document.querySelectorAll(".btn");
const deleteButton = document.querySelector(".delete");
const shiftButton = document.querySelector(".shift");
const spaceButton = document.querySelector(".space");
const buttons = document.querySelectorAll(".keyboard button, .shift, .delete");

let isShiftActive = false;

btn.forEach((button) => {
  button.addEventListener("click", () => {
    appendText(button.textContent);
  });
});

deleteButton.addEventListener("click", () => {
  deleteLastCharacter();
});

shiftButton.addEventListener("click", () => {
  toggleShift();
});

spaceButton.addEventListener("click", () => {
  appendText(" ");
});

document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();

  if (key === "shift") {
    event.preventDefault();
    toggleShift();
  } else if (key === "backspace") {
    deleteLastCharacter();
  } else if (key === " ") {
    appendText(" ");
  } else if (/^[a-z0-9]$/.test(key)) {
    event.preventDefault();

    let character = key;
    if (isShiftActive) {
      character = key.toUpperCase();
      toggleShift();
    }

    appendText(character);
  }
});

document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();

  if (/^[a-z0-9]$/.test(key)) {
    const button = [...buttons].find(
      (button) => button.textContent.toLowerCase() === key
    );

    if (button) {
      button.classList.add("hover");
    }
  }
});

document.addEventListener("keyup", (event) => {
  const key = event.key.toLowerCase();

  if (/^[a-z0-9]$/.test(key)) {
    const button = [...buttons].find(
      (button) => button.textContent.toLowerCase() === key
    );

    if (button) {
      button.classList.remove("hover");
    }
  }
});

function appendText(text) {
  textarea.value += text;
}

function deleteLastCharacter() {
  textarea.value = textarea.value.slice(0, -1);
}

function toggleShift() {
  isShiftActive = !isShiftActive;

  shiftButton.classList.toggle("active");

  btn.forEach((button) => {
    const buttonText = button.textContent;
    button.textContent = isShiftActive
      ? buttonText.toUpperCase()
      : buttonText.toLowerCase();
  });
}
