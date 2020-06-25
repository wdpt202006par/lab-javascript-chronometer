class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
  
    var int = setInterval (() => {
     this.currentTime++;
     console.log(this.currentTime); 
    },1000)
  }
  getMinutes() {
    // 30 -> 0
    // 60 -> 1
    // 70 -> 1
    // 150 -> 2 150/60 -> 2.5 -> trunc
var intMinute = Math.floor(this.currentTime / 60);
return (intMinute)
  }
  getSeconds() {
    var intSecond = Math.round(this.currentTime % 60);
    return (intSecond);
  }
  twoDigitsNumber(number) {
    //if currentTime is 36 seconds, returns 00 min 36 seconds
    //if currentTime is 5 min and 43 sec, returns 05 min 43 sec
    // ... your code goes here
    //var digitNumber= this.getMinutes+ this.getSeconds;
    //return digitNumber; 
    if (number <10 ) {
      return "0" + number;
    } else {
      return number;
    }

    if (number.toString().length === 1) {
      return `0${number}`
    } else {
      return number.toString();
    }

  }
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0;

  }
  splitClick(min, sec) {
    // ... your code goes here
    let minutes = this.getMinutes(min);
    let seconds = this.getSeconds(sec)
    return `${this.twoDigitsNumber(minutes)}:${this.twoDigitsNumber(seconds)}`;
  }
}

