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
  printMinutes()
  printSeconds()
}

function printMinutes() {
  let minute = chronometer.twoDigitsNumber(chronometer.getMinutes());
  // this.minDec = minute[0];
  // this.minUni = minute[1];
  minDec.innerHTML = minute[0]
  minUni.innerHTML = minute[1]
  // console.log( `${this.minDec}${this.minUni}`)
  // return `${this.minDec}${this.minUni}`
}

function printSeconds() {
  let second = chronometer.twoDigitsNumber(chronometer.getSeconds());
  // this.secDec = second[0];
  // this.secUni = second[1];
  secDec.innerHTML = second[0]
  secUni.innerHTML = second[1]
  // return `${this.secDec}${this.secUni}`

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
btnLeft.addEventListener('click', () => {
  if (btnLeft.className === 'btn start') {
    btnLeft.innerHTML = 'STOP';
    btnLeft.className = 'btn stop';
    btnRight.innerHTML = 'SPLIT';
    btnRight.className = 'btn split';
    chronometer.startClick(printTime)
  } else {
    btnLeft.innerHTML = 'START';
    btnLeft.className = 'btn start';
    btnRight.innerHTML = 'RESET';
    btnRight.className = 'btn reset';
    chronometer.stopClick();
  }

});


// Reset/Split Button
btnRight.addEventListener('click', () => {
  chronometer.resetClick();
});