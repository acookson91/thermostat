function Thermostat() {
  this.temp = 20
  this.min = 10
  this.max = 32
}

  Thermostat.prototype.showTemp = function() {
    return this.temp
  };

  Thermostat.prototype.increaseTemp = function() {
    if (this.temp >= this.max) {
      throw new Error('sweaty')
    } else {
    this.temp++ }
  };

  Thermostat.prototype.decreaseTemp = function() {
    if (this.temp <= this.min) {
      throw new Error('nah mate too cold')
    } else {
    this.temp-- }
  };
