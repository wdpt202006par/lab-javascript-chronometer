class Chronometer {
  constructor() {
   
    this.currentTime= 0;
    this.intervalId= 0;
  }
  startClick(callback) {
  this.intervalId = setInterval(() => {
     this.currentTime++ 
    }, 1000)
//Hint 2: In case you get an error while invoking the callback, try to wrap it in the if statement.
  }
  getMinutes() {
   return (Math.floor(this.currentTime / 60))
  }
  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60
  }
  twoDigitsNumber(time) {
      if (time < 10 ) {
        return `0${time}`
      } else {
          return `${time}`
      }
    }

  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    

  }
  splitClick() {
    // ... your code goes here
  }
}
