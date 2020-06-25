class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    setInterval(() => {
      this.currentTime++;
    },1000)
    };

  getMinutes() {
    return Math.trunc(this.currentTime/60);
  }
  getSeconds() {
    return this.currentTime % 60; 
  }
  twoDigitsNumber(num) {
    if (num < 10) {
      return `0${num}`;
    }
    return `${num}`;
  }
  stopClick() {
    clearInterval();
  }
  resetClick() {
    this.currentTime =0;
  }
  splitClick() {
    let num1 = this.getMinutes();
    let num2 = this.getSeconds();
    return `${this.twoDigitsNumber(num1)}:${this.twoDigitsNumber(num2)}`;
  }
}
