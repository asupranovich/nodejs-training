var util = require('util');

function Animal(name) {
    this.name = name;
}

Animal.prototype.walk = function() {
    console.log(this.name + " walks");
};

function Rabbit(name) {
    this.name = name;
}

util.inherits(Rabbit, Animal);

Rabbit.prototype.jump = function() {
  console.log(this.name + " jumps");  
};

var bunny = new Rabbit("Bunny");
bunny.walk();
bunny.jump();


