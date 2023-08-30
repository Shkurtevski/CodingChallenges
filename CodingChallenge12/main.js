"use strict";

const booksDiv = document.querySelector(".books");
const booksProgressDiv = document.querySelector(".books-progress");

books.forEach((book) => {
  showAllBooks(book);
  readingProgress(book);
});

function showAllBooks(book) {
  const ul = document.createElement("ul");
  const li = document.createElement("li");

  li.innerText = `${book.title} by ${book.author}`;

  booksDiv.appendChild(ul);
  ul.appendChild(li);
}

function readingProgress(book) {
  const progressUl = document.createElement("ul");
  const progressLi = document.createElement("li");

  if (book.onPage !== book.maxPages) {
    progressLi.innerText = `You still need to read ${book.title} by ${book.author}`;
    progressLi.style.color = "red";
  } else {
    progressLi.innerText = `You already have read ${book.title} by ${book.author}`;
    progressLi.style.color = "green";
  }

  progressUl.appendChild(progressLi);
  booksProgressDiv.appendChild(progressUl);
}
