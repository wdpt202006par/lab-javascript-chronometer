class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    const intervalId = setInterval(() => { // Use setInterval 
      this.currentTime += 1; // faire + 1 sur currentTime
    }, 1000);
  }

  getMinutes() {
    // 65 -> 1
    // 150 -> 2
    return Math.floor(this.currentTime / 60)
  }

  getSeconds() {
    //115 = 55
    //15 = 15
    return Math.floor(this.currentTime)
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