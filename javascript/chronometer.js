class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime +=1;
      printTime()
    }, 1000);
  }
    

  getMinutes() {
    let nbrMinute = this.currentTime / 60;
    return Math.floor(nbrMinute);
  }
  
  getSeconds() {
    return this.currentTime%60;
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
    this.currentTime = 0;
  }
  
  splitClick(minute, seconde) {
    let min = this.getMinutes(minute);
    let sec = this.getSeconds(seconde);
    return `${this.twoDigitsNumber(min)}:${this.twoDigitsNumber(sec)}`;
  }
}
