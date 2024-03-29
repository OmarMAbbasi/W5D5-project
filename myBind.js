

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function () {
  console.log("Turning on " + this.name);
};

const lamp = new Lamp();

turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"


Function.prototype.myBind = function myBind(context) {
  console.log()
  console.log(context)
  // return (context) => apply(context)
}

//myBind(context)
//Return => function
//^Captures this and context^
//Function.prototype.apply > (this & context)
