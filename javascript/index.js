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
  printSeconds();  
  printMinutes();
}

function printMinutes() {
  var minutes = chronometer.getMinutes();
  var twoDigitsMin = chronometer.twoDigitsNumber(minutes);
  minDec.innerHTML = twoDigitsMin[0];
  minUni.innerHTML = twoDigitsMin[1];
}

function printSeconds() {
  var seconds = chronometer.getSeconds();
  var twoDigitsSec = chronometer.twoDigitsNumber(seconds);
  secDec.innerHTML = twoDigitsSec[0];
  secUni.innerHTML = twoDigitsSec[1];
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
  //btnLeft.classList.toggle("stop");
  btnLeft.setAttribute("class", "btn stop");
  btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
  btnRight.classList.toggle("Split");
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  //btnLeft.classList.remove("stop");
  btnLeft.setAttribute("class", "btn start");
  btnLeft.innerHTML = "START";
}

function setResetBtn() {
  btnRight.classList.remove("Split");
  btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.className === "btn start") {
    chronometer.startClick(printTime);
    setStopBtn();
  } else {
    setStartBtn();
    chronometer.stopClick(printTime);
  }
});

// APPUIE START > lance le chrono, imprime minute et seconds, affiche STOP
// APPUIE STOP > arrête de chrono, imprime minute et seconds, affiche START



// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.className === "btn reset") {
    setSplitBtn();
  } else {
    setResetBtn();
  }
});
