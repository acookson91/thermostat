function Thermostat(start) {
  this.startTemp = start
  this.currentTemp = this.startTemp
  this.min = 10
  this.max = 25
  this.isPowerSaveOn = true
  this.colour = 'green'
  // this.currentTemp < 18 ? this.colour = 'green' : this.currentTemp > 25 ? this.colour = 'red' : this.colour = 'yellow'
  // this.colour = (this.currentTemp < 18 ? 'green' : this.currentTemp > 25 ? 'red' : 'yellow')

}

  Thermostat.prototype.showTemp = function() {
    return this.currentTemp
  };

  Thermostat.prototype.increaseTemp = function() {
    if (this.currentTemp >= this.max) {
      throw new Error('sweaty')
    } else {
    this.currentTemp++ }
  };

  Thermostat.prototype.decreaseTemp = function() {
    if (this.currentTemp <= this.min) {
      throw new Error('nah mate too cold')
    } else {
    this.currentTemp-- }
  };

  Thermostat.prototype.powerSave = function() {
    this.isPowerSaveOn ? this.max += 7 : this.max -=7
    this.isPowerSaveOn ^= true
  };

  Thermostat.prototype.reset = function() {
    this.currentTemp = this.startTemp
  };

  Thermostat.prototype.setColour = function() {
    if (this.currentTemp > 25) {
      this.colour = 'red'
    } else if (this.currentTemp > 18) {
      this.colour = 'yellow'
    } else {
      this.colour = 'green'
    }
  };
