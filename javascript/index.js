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
  //retourner les minutes et secondes => twoDigitsNumber
  return Chronometer.twoDigitsNumber();
}

function printMinutes() {
  // ... your code goes here
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
  btnLeft.setAttribute('class','btn stop');
  btnLeft.innerHTML='STOP';
}

function setSplitBtn() {
  btnRight.setAttribute('class',`btn reset` );
  btnRight.innerHTML='RESET';
}

function setStartBtn() {
  // START => STOP
  // changer la couleur: vert -> rouge (classe)
  btnLeft.setAttribute('class','btn start');
  btnLeft.innerHTML='START';
}

function setResetBtn() {
  btnRight.setAttribute('class',`btn split`);
  btnRight.innerHTML='SPLIT';
}

// Start/Stop Button

btnLeft.addEventListener('click', () => {
  if (btnLeft.className === `btn start`){
    setStopBtn();
    printTime();
  } else {
    setStartBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.className === `btn reset`){
    setResetBtn();
  } else {
    setSplitBtn();
  }
});
