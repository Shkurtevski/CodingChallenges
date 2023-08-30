$(function () {
  counterDiv.hide();
  finishFlag.hide();

  let counter = 4;
  let randomOne = Math.floor(Math.random() * 1500);
  let randomTwo = Math.floor(Math.random() * 1500);
  let raceInProgress = false;

  function carPlaceComparison(firstValue, secondValue) {
    if (firstValue < secondValue) {
      return "first";
    } else {
      return "second";
    }
  }

  function animateCar(car, time) {
    const maxWidth = $(window).width() - carOne.width() - 20;
    car.animate(
      {
        marginLeft: maxWidth,
      },
      time,
      function () {
        finishFlag.show();
        btnStartRace.prop("disabled", false);
        btnRaceStartOver.prop("disabled", false);
      }
    );

    setTimeout(function () {
      carResult(car, time);
    }, time);
  }

  function carResult(car, time) {
    const place = carPlaceComparison(time, randomTwo);
    const color = place === "first" ? "#ffebf7" : "#ba0000";
    const carResultElement =
      car.attr("id") === "car-one" ? carOneResult : carTwoResult;

    carResultElement.prepend(
      `<p>Finished in: <span style="color:${color}; font-weight:bold;">${place}</span> place with a time of: <span style="color:${color}; font-weight:bold;">${time}</span> milliseconds!</p>`
    );
  }

  function stopCountDown(interval) {
    clearInterval(interval);
    return false;
  }

  btnStartRace.on("click", function () {
    if (!raceInProgress) {
      raceInProgress = true;
      btnStartRace.prop("disabled", true);
      btnRaceStartOver.prop("disabled", true);
      counterDiv.show();

      const interval = setInterval(function () {
        counter--;
        counterDiv.text(counter);

        if (counter === 0) {
          stopCountDown(interval);
          counterDiv.hide();
          animateCar(carOne, randomOne);
          animateCar(carTwo, randomTwo);
        }

        localStorage.setItem(
          "resultOne",
          carPlaceComparison(randomOne, randomTwo)
        );
        localStorage.setItem("timingOne", randomOne);
        localStorage.setItem(
          "resultTwo",
          carPlaceComparison(randomTwo, randomOne)
        );
        localStorage.setItem("timingTwo", randomTwo);
      }, 1000);
    }
  });

  btnRaceStartOver.on("click", function () {
    if (raceInProgress) {
      finishFlag.hide();
      carOne.stop().css("margin-left", "0px");
      carTwo.stop().css("margin-left", "0px");
      counterDiv.text("");
      counter = 4;
      randomOne = Math.floor(Math.random() * 1500);
      randomTwo = Math.floor(Math.random() * 1500);
      raceInProgress = false;
      btnStartRace.prop("disabled", false);
    }
  });

  const prevResultOne = localStorage.getItem("resultOne");
  const prevTimingOne = localStorage.getItem("timingOne");
  const prevResultTwo = localStorage.getItem("resultTwo");
  const prevTimingTwo = localStorage.getItem("timingTwo");

  if (prevResultOne && prevTimingOne && prevResultTwo && prevTimingTwo) {
    previousResults.html(`
      <h3>Results from the previous time you played this game:</h3>
      <p class="text-white previous-result-p-one">
        <span class="white-span">Car1</span> finished in <span class="white-span">${prevResultOne}</span> place, with a time of 
        <span class="white-span">${prevTimingOne}</span> milliseconds!
      </p>
      <p class="text-white previous-result-p-two">
        <span class="red-span">Car2</span> finished in <span class="red-span">${prevResultTwo}</span> place, with a time of 
        <span class="red-span">${prevTimingTwo}</span> milliseconds!
      </p>
    `);
  }
});
