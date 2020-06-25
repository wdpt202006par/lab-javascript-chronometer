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
    let minutes = 0;
    // Pour chaque 60 secondes
    // Ajoute +1 minute
    if (this.currentTime%60 === 59) {
      minutes += 1;
    }
    return minutes;
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