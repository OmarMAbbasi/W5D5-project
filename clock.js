class Clock {
  constructor() {
    let currentTime = new Date();
    this.hours = (currentTime.getHours())%12;
    this.minutes = currentTime.getMinutes();
    this.seconds = currentTime.getSeconds();
    this.printTime();
    this._tick = this._tick.bind(this);
    setInterval(this._tick, 1000);
  };

  printTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  };

  _tick() {
    this.seconds++
    if (this.seconds === 60) {
      this.minutes++
      this.seconds = 0
      if (this.minutes === 60) {
        this.hours++
        this.minutes = 0
      }
    }
    
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.printTime();
  };
};

const clock = new Clock();