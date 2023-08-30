"use strict";

const tableContainerDiv = document.querySelector(".table-container");

function createBooksTable(books) {
  const table = document.createElement("table");
  const tHead = document.createElement("thead");
  const tHeadRow = document.createElement("tr");
  const tHeadDataTitle = document.createElement("th");
  const tHeadDataAuthor = document.createElement("th");
  const tHeadDataMaxPages = document.createElement("th");
  const tHeadDataOnPage = document.createElement("th");
  const tHeadDataProgress = document.createElement("th");
  const tBody = document.createElement("tbody");

  tHeadDataTitle.textContent = "Title";
  tHeadDataAuthor.textContent = "Author";
  tHeadDataMaxPages.textContent = "Max Pages";
  tHeadDataOnPage.textContent = "On Page";
  tHeadDataProgress.textContent = "Progress";

  tHeadRow.append(
    tHeadDataTitle,
    tHeadDataAuthor,
    tHeadDataMaxPages,
    tHeadDataOnPage,
    tHeadDataProgress
  );
  tHead.append(tHeadRow);
  table.append(tHead);

  const fragment = document.createDocumentFragment();

  books.forEach((book) => {
    const tRow = document.createElement("tr");
    const tDataTitle = document.createElement("td");
    const tDataAuthor = document.createElement("td");
    const tDataMaxPages = document.createElement("td");
    const tDataOnPage = document.createElement("td");

    const progress = (book.onPage / book.maxPages) * 100;
    const tDataProgress = document.createElement("div");
    const progressFill = document.createElement("div");

    progressFill.classList.add("progress-fill");

    const progressText = document.createElement("div");

    progressText.classList.add("progress-text");
    progressText.textContent = `${progress.toFixed(2)}%`;
    progressFill.append(progressText);
    tDataProgress.classList.add("progress-bar");
    tDataProgress.append(progressFill);

    if (progress < 100) {
      progressFill.style.backgroundColor = "red";
    } else {
      progressFill.backgroundColor = "green";
    }

    progressFill.style.width = `${progress}%`;

    tDataTitle.textContent = book.title;
    tDataAuthor.textContent = book.author;
    tDataMaxPages.textContent = book.maxPages;
    tDataOnPage.textContent = book.onPage;

    tRow.append(
      tDataTitle,
      tDataAuthor,
      tDataMaxPages,
      tDataOnPage,
      tDataProgress
    );
    fragment.append(tRow);
  });

  tBody.append(fragment);
  table.append(tBody);

  return table;
}

const booksTable = createBooksTable(books);
tableContainerDiv.append(booksTable);
