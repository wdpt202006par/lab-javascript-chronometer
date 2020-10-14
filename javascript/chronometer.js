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

  twoDigitsNumber(number) {
    if (number < 10) {
      return `0${number}`;
    } else return number;
  }
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0;
  }
  splitClick(minute, seconde) {
    let min = this.getMinutes(minute);
    // min = 1
    let sec = this.getSeconds(seconde);
    return `${this.twoDigitsNumber(min)}:${this.twoDigitsNumber(sec)}`;
    // ... your code goes here
  }
}