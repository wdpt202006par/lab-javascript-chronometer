class Chronometer {

  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;

  }
  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime ++;
      callback();
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
    clearInterval(this.intervalId)
  }
  resetClick() {
    return this.currentTime = 0;
  }
  splitClick(min, sec) {
    let minutes = this.getMinutes(min); 
    let seconds = this.getSeconds(sec);
    return `${this.twoDigitsNumber(minutes)}:${this.twoDigitsNumber(seconds)}`
  }
}