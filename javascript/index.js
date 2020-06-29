const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');


const btnRight = document.getElementById('btnRight');



// get the DOM elements that will serve us to display the time:



let splits = document.getElementById('splits');

function printTime() {
    printMinutes();
    printSeconds();
    printMilliseconds();
}

function printMinutes() {
  let minDec = document.getElementById('minDec');
  let minUni = document.getElementById('minUni');
  let minutes = chronometer.getMinutes();
  let minutesAsString = chronometer.twoDigitsNumber(minutes); // "05"

  let dec = minutesAsString.substring(0,1); // "0"
  let uni = minutesAsString.substring(1,2); // "5"

  minDec.textContent = dec; // Pour afficher sur ma page web
  minUni.textContent = uni;

  
}

function printSeconds() {
  let secDec = document.getElementById('secDec');
  let secUni = document.getElementById('secUni');
  let seconds = chronometer.getSeconds();
  let secondsAsString = chronometer.twoDigitsNumber(seconds); // "05"
  
  
  let dec = secondsAsString.substring(0,1); // "0"
  let uni = secondsAsString.substring(1,2); // "5"

  secDec.textContent = dec; // Pour afficher sur ma page web
  secUni.textContent = uni;
  
}

// ==> BONUS
function printMilliseconds() {
  let milDec = document.getElementById('milDec');
  let milUni = document.getElementById('milUni');
  let millis = chronometer.getMilliseconds();
  let millisAsString = chronometer.twoDigitsNumber(millis);

  let dec = millisAsString.substring(0,1);
  let uni = millisAsString.substring(1,2);

  milDec.textContent = dec;
  milUni.textContent = uni;
}

function printSplit() {
    let ol = document.getElementById('splits');
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(chronometer.splitClick()));
    ol.appendChild(li);
}

function clearSplits() {
  chronometer.currentTimeInMillis = 0;
  printTime();
  let li = document.getElementById('splits');
  li.innerHTML = "";
}

function setStopBtn() {
  btnLeft.setAttribute('class', 'btn stop');
  btnLeft.innerHTML = 'STOP';

}

function setSplitBtn() {
  btnRight.setAttribute('class','btn split');
  btnRight.innerHTML = 'SPLIT';
}

function setStartBtn() {
  btnLeft.setAttribute('class','btn start');
  btnLeft.innerHTML = 'START';
}

function setResetBtn() {
  btnRight.setAttribute('class','btn reset');
  btnRight.innerHTML = 'RESET';
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if(btnLeft.className === 'btn start') {
    setSplitBtn();
    setStopBtn();
    chronometer.startClick(); 
  }else {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.className === 'btn reset') {
    chronometer.resetClick();
    clearSplits();
  }else {
    chronometer.splitClick();
    printSplit();
  }
});
