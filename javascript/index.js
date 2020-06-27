const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
let splits = document.getElementById("splits");

function printTime() {
  let min = chronometer.getMinutes();
  let sec = chronometre.getSeconds();

  let minString = chronometre.twoDigitsNumber(min);
  let secString = chronometre.twoDigitsNumber(sec);
  // ... your code goes here
}
function printMinutes() {
  let min = chronometer.getMinutes();
  let minString = chronometre.twoDigitsNumber(min);
  let minHTML = document.querySelector("#minDec");
  minHTML.innerHTML = minString;

  // ... your code goes here
}

function printSeconds() {
  chronometre.getSeconds();
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  // ... your code goes here
  if (chronometer.currentTime === 0) {
    let btnLeft = document.querySelector("#btnLeft");
    btnLeft.innerHTML = "STOP";
    btnLeft.className = "btn stop";
    chronometre.startClick();
  } else {
    let btnLeft = document.querySelector("#btnLeft");
    btnLeft.innerHTML = "START";
    btnLeft.className = "btn start";
    chronometre.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  // ... your code goes here
  if (chronometer.currentTime === 0) {
    let btnRight = document.querySelector("#btnRight");
    btnRight.innerHTML = "SPLIT";
    btnRight.className = "btn split";
  } else {
    let btnRight = document.querySelector("#btnRight");
    btnRight.innerHTML = "RESET";
    btnRight.className = "btn reset";
  }
});
