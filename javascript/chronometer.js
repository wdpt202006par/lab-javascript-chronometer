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
    //115 = 55 -> 60 + 55
    //15 = 15
    return Math.floor(this.currentTime % 60)
  }

  twoDigitsNumber(number) {
    if (number < 10) {
      return "0" + number;
    } else {
      return number;
    }

  }
  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime = 0;
  }

  splitClick(min, sec) {
    var minutes = this.getMinutes(min);
    var seconds = this.getSeconds(sec);
    return `${this.twoDigitsNumber(minutes)}:${this.twoDigitsNumber(seconds)}`;
  }
}