class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    // ... your code goes here
  }
  startClick(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => this.currentTime++, 1000);
  }
  getMinutes() {
    // ... your code goes here
    // currentTime = 69

    return Math.floor(this.currentTime / 60);
  }

  // getMinutes() = 1
  getSeconds() {
    // ... your code goes here
    // currentTime = 69

    return this.currentTime % 60;
  }
  // getSeconds() = 9

  twoDigitsNumber() {
    //
    let min = this.getMinutes();
    // min = 1
    let sec = this.getSeconds();
    // sec = 9

    if (min < 10) {
      min = `0${min}`;
    }

    if (sec < 10) {
      sec = `0${sec}`;
    }

    return `${min}:${sec}`;
  }
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0;
  }
  splitClick() {
    // ... your code goes here
  }
}
