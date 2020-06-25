class Chronometer {

  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;

  }
  startClick(callback) {
    setInterval(() => {
      this.currentTime ++;
    }, 1000)
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return this.currentTime % 60;
  }
  twoDigitsNumber(value) {
  
    return ''.concat(value).length < 2 ?  '0'.concat(value) : ''.concat(value);
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