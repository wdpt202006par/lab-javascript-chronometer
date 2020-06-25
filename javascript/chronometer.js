class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    // let i = 1;
    const intervalId = setInterval(() => { // Use setInterval 
      // console.log(Chronometer.currentTime);
      this.currentTime += 1; // faire + 1 sur currentTime
      // if (stopClick) {
      //   clearInterval(intervalId);
      // }
    }, 1000);
  }
  getMinutes() {
    // ... your code goes here
  }
  getSeconds() {
    // ... your code goes here
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