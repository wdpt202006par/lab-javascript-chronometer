const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');



function printTime() {
  setInterval(function () {
    printMinutes();
    printSeconds();
  }, 1000);
}

function printMinutes() {
  var minutes = chronometer.getMinutes();
  var twoDigitsMin = chronometer.twoDigitsNumber(minutes);
  twoDigitsMin.innerHTML = twoDigitsMin[0];
  twoDigitsMin.innerHTML = twoDigitsMin[1];
}

function printSeconds() {
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
  btnLeft.classList.toggle("stop");
  btnLeft.innerHTML = "Stop";
}

function setSplitBtn() {
  btnRight.classList.toggle("Split");
  btnRight.innerHTML = "Split";
}

function setStartBtn() {
  btnLeft.classList.remove("stop");
  btnLeft.innerHTML = "Start";
}

function setResetBtn() {
  btnRight.classList.remove("Split");
  btnRight.innerHTML = "Reset";
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.className === "btn start") {
    setStopBtn();
  } else {
    setStartBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
});
