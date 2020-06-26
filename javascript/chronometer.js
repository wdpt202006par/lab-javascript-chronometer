class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++, 1000;
    });
  }
  //callback to be invoked ?

  getMinutes() {
    // ... your code goes here
    let timeInMinutes = Math.floor(this.currentTime / 60);
    return timeInMinutes;
  }
  getSeconds() {
    // ... your code goes here
    if (this.currentTime === 0) return 0;
    else {
      return this.currentTime % 60;
    } // reste du currentTime - les minutes
  }
  twoDigitsNumber(getMinutes) {
    // ... your code goes here
    if (getMinutes < 10) return `0${getMinutes}`;
    else {
      return getMinutes;
    }
  }
  //do the same for getSeconds ?
  stopClick() {
    // ... your code goes here
    clearInterval(this.intervalId); //arreter l'interval pour arreter l'horloge
  }
  resetClick() {
    // ... your code goes here
    this.currentTime = 0; // pas besoin de return ?
  }
  splitClick() {
    // ... your code goes here
    return `${this.twoDigitsNumber(this.getMinutes())}:${this.twoDigitsNumber(this.getSeconds())}`;
  }
}
