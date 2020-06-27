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
  printMinutes();
  printSeconds();
}

function printMinutes() {
  
}

function printSeconds() {
  //chronometer.getSeconds();
  //var num1= document.querySelector('#secDec').innerHTML = chronometer.getSeconds();
  //var num2= document.querySelector('#secUni').innerHTML = chronometer.getSeconds();
  var sec= chronometer.twoDigitsNumber(chronometer.getSeconds());
  secDec.innerHTML= sec[0];
  secUni.innerHTML= sec[1];
  

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

 if(btnLeft.innerHTML === 'START'){
  btnLeft.innerHTML = 'STOP';
  btnLeft.className = 'btn stop';
  chronometer.startClick(printTime);
  
 } else {
  btnLeft.innerHTML = 'START';
  btnLeft.className = 'btn start';
  chronometer.stopClick();
  
 }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  
  if(btnRight.innerHTML === 'SPLIT'){
    btnRight.innerHTML = 'RESET';
    btnRight.className = 'btn reset';
 } else {
  btnRight.innerHTML = 'SPLIT';
  btnRight.className = 'btn split';
 }
});
