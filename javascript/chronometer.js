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
    
  }
  twoDigitsNumber() {
    // ... your code goes here
  }
  stopClick() {
    // ... your code goes here
  }
  resetClick() {
    // ... your code goes here
  }
  splitClick() {
    // ... your code goes here
  }
}
