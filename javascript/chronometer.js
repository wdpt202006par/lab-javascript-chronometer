class Chronometer {
  constructor() {
    this.currentTimeInMillis = 0;
    this.intervalId = 0;
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTimeInMillis +=1;
      printTime()
    }, 10);
  }
    

  getMinutes() {
    let currentTime = this.currentTimeInMillis / 100;
    let nbrMinute = currentTime / 60;
    return Math.floor(nbrMinute);
  }
  
  getSeconds() {
    let currentTime = this.currentTimeInMillis / 100;
    let nbrSeconds = currentTime%60
    return Math.floor(nbrSeconds);
  }

  getMilliseconds() {
    return this.currentTimeInMillis % 100;
  }


  twoDigitsNumber(deuxDigits) {
      if(deuxDigits < 10) {
        return '0'+ deuxDigits;
      } else {
        return deuxDigits.toString();
      }
  }


  stopClick() {
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTimeInMillis = 0;
  }
  
  splitClick() {
    let min = this.getMinutes();
    let sec = this.getSeconds();
    let mil = this.getMilliseconds();
    return `${this.twoDigitsNumber(min)}:${this.twoDigitsNumber(sec)}:${this.twoDigitsNumber(mil)}`;
  }

}

