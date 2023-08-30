"use strict";

const submitButton = document.querySelector("#submit");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const inputTitle = document.querySelector("#input-title");
  const inputAuthor = document.querySelector("#input-author");
  const inputMaxPages = document.querySelector("#input-maxpages");
  const inputOnPage = document.querySelector("#input-onpage");

  const newBook = {
    title: inputTitle.value,
    author: inputAuthor.value,
    maxPages: inputMaxPages.value,
    onPage: inputOnPage.value,
  };

  books.push(newBook);

  const updatedBooksTable = createBooksTable(books);
  tableContainerDiv.innerHTML = "";
  tableContainerDiv.append(updatedBooksTable);
  showAllBooks(newBook);
  readingProgress(newBook);

  inputTitle.value = "";
  inputAuthor.value = "";
  inputOnPage.value = "";
  inputMaxPages.value = "";
});
