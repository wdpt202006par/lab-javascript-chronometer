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
  var seconds = chronometer.getSeconds();
  var twoDigitsSec = chronometer.twoDigitsNumber(seconds);
  twoDigitsSec.innerHTML = twoDigitsSec[0];
  twoDigitsSec.innerHTML = twoDigitsSec[1];
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
  btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
  btnRight.classList.toggle("Split");
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  btnLeft.classList.remove("stop");
  btnLeft.innerHTML = "START";
}

function setResetBtn() {
  btnRight.classList.remove("Split");
  btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.className === "btn start") {
    setStopBtn();
    //chronometer.startClick();
    //printTime();
  } else {
    setStartBtn();
  }
});

// APPUIE START > lance le chrono, imprime minute et seconds, STOP
// APPUIE STOP > arrête de chrono, imprime minute et seconds, START



// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.className === "btn reset") {
    setSplitBtn();
  } else {
    setResetBtn();
  }
});
