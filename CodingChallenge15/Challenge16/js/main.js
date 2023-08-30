/*////////////////////////////////////////
-----------------------------------------
-----> VANILLA JAVASCRIPT SOLUTION <-----
-----------------------------------------
//////////////////////////////////////// */
/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
-----> Due to project work, we were told by instructor Ognen that we can work with either jQuery or vanilla javascript. I chose vanilla js because it's easier for me, maybe it's not perfect in terms of styles, but because of the extensive project we have, I decided to do this challenge faster so that I have more time for the project. <------------------
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
fetch("https://challenges.brainster.tech/ajax_data/data.json")
  .then((response) => response.json())
  .then((data) => {
    const products = data.products;

    renderAllCards(products);

    updateCounts(products);

    showAllProducts.addEventListener("click", () => {
      renderAllCards(products);
      updateCounts(products);
    });

    showMaleProducts.addEventListener(
      "click",
      createFilterEventListener(
        products,
        (product) => product.gender === "MALE"
      )
    );

    showFemaleProducts.addEventListener(
      "click",
      createFilterEventListener(
        products,
        (product) => product.gender === "FEMALE"
      )
    );

    showLeGrandBikes.addEventListener(
      "click",
      createFilterEventListener(
        products,
        (product) => product.brand === "LE GRAND BIKES"
      )
    );

    showKrossBikes.addEventListener(
      "click",
      createFilterEventListener(
        products,
        (product) => product.brand === "KROSS"
      )
    );

    showExplorerBikes.addEventListener(
      "click",
      createFilterEventListener(
        products,
        (product) => product.brand === "EXPLORER"
      )
    );

    showVisitorBikes.addEventListener(
      "click",
      createFilterEventListener(
        products,
        (product) => product.brand === "VISITOR"
      )
    );

    showPonyBikes.addEventListener(
      "click",
      createFilterEventListener(products, (product) => product.brand === "PONY")
    );

    showForceBikes.addEventListener(
      "click",
      createFilterEventListener(
        products,
        (product) => product.brand === "FORCE"
      )
    );

    showEbikes.addEventListener(
      "click",
      createFilterEventListener(
        products,
        (product) => product.brand === "E-BIKES"
      )
    );
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// FUNCTIONS
function renderAllCards(products) {
  cardWrapper.innerHTML = "";
  products.forEach((product) => {
    const imgUrl = `./images/${product.image}.png`;
    renderCard(product, imgUrl);
  });
}

function applyFilter(products, filterCriteria) {
  const filteredProducts = products.filter(filterCriteria);
  cardWrapper.innerHTML = "";
  filteredProducts.forEach((product) => {
    const imgUrl = `./images/${product.image}.png`;
    renderCard(product, imgUrl);
  });
}

function createFilterEventListener(products, filterCriteria) {
  return function () {
    applyFilter(products, filterCriteria);
    updateCounts(products);
  };
}

function renderCard(product, imgUrl) {
  const card = document.createElement("div");
  const img = document.createElement("img");
  const cardBody = document.createElement("div");
  const h5Element = document.createElement("h5");
  const paraTwo = document.createElement("p");

  card.classList.add("card");
  img.classList.add("card-img-top");
  cardBody.classList.add("card-body");
  h5Element.classList.add("card-title");

  h5Element.textContent = product.brand;
  paraTwo.textContent = `${product.price} $`;

  img.src = imgUrl;

  cardWrapper.appendChild(card);
  card.append(img, cardBody);
  cardBody.append(h5Element, paraTwo);

  return card;
}

function updateCounts(products) {
  allProductsCount.textContent = products.length;
  maleProductsCount.textContent = getFilteredCount(
    products,
    (product) => product.gender === "MALE"
  );
  femaleProductsCount.textContent = getFilteredCount(
    products,
    (product) => product.gender === "FEMALE"
  );
  leGrandBikesCount.textContent = getFilteredCount(
    products,
    (product) => product.brand === "LE GRAND BIKES"
  );
  krossBikesCount.textContent = getFilteredCount(
    products,
    (product) => product.brand === "KROSS"
  );
  explorerBikesCount.textContent = getFilteredCount(
    products,
    (product) => product.brand === "EXPLORER"
  );
  visitorBikesCount.textContent = getFilteredCount(
    products,
    (product) => product.brand === "VISITOR"
  );
  ponyBikesCount.textContent = getFilteredCount(
    products,
    (product) => product.brand === "PONY"
  );
  forceBikesCount.textContent = getFilteredCount(
    products,
    (product) => product.brand === "FORCE"
  );
  eBikesCount.textContent = getFilteredCount(
    products,
    (product) => product.brand === "E-BIKES"
  );
}

function getFilteredCount(products, filterCriteria) {
  const filteredProducts = products.filter(filterCriteria);
  return filteredProducts.length;
}
