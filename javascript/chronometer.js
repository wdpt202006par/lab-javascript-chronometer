class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      callback();
    },1000)
    };

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }
  getSeconds() {
    return this.currentTime % 60; 
  }
  twoDigitsNumber(num) {
    if (num < 10) {
      return `0${num}`;
    }
    return `${num}`;
    //return (num.toString().length === 1) ? `0${num}` : num.toString();
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime =0;
  }
  splitClick(minutes, seconds) {
    //let num1 = this.getMinutes();
    //let num2 = this.getSeconds();
    return `${this.twoDigitsNumber(this.getMinutes(minutes))}:${this.twoDigitsNumber(this.getSeconds(seconds))}`;
  }
}
