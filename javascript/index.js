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

// if (btnLeft.querySelector('.start')) {
//   chronometer.startClick(callback);
// } else {
//   chronometer.stopClick();
// };

function printTime() {
  //setInterval(function () {
  // zonetexte.innerHTML ("résultat de la fonction de callback")
  // text.innerHTML(time);
  printMinutes();
  printSeconds();
  //}, 1000)
}

function printMinutes() {
  // appeller chronometer.twoDigitNumber(chronometer.getMinutes()) pour récupérer les minutes ?
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.innerHTML = minutes[0];
  minUni.innerHTML = minutes[1];
}

function printSeconds() {
  // appeler chronometer.twoDigitNumber(chronometer.getSeconds()) pour récupérer les secondes ?
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML = seconds[0];
  secUni.innerHTML = seconds[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  

  const saveSplit = document.getElementById('splits');
  var newLi = document.createElement('li');
  newLi.innerHTML = nameToChange;
  saveSplit.appendChild(newLi);
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeft.innerHTML = 'STOP';
  btnLeft.className = 'btn stop';
}

function setSplitBtn() {
  btnRight.innerHTML = 'SPLIT';
  btnRight.className = 'btn split';
}

function setStartBtn() {
  btnLeft.innerHTML = 'START';
  btnLeft.className = 'btn start';
}

function setResetBtn() {
  btnRight.innerHTML = 'RESET';
  btnRight.className = 'btn reset';
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerHTML === "START") {
    setStopBtn();
    chronometer.startClick();
  } else {
    setStartBtn();
    chronometer.stopClick();
  }
});


// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.innerHTML === "RESET") {
    setSplitBtn();
  } else {
    setResetBtn();
  }
});