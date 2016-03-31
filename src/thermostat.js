function Thermostat() {
  this.startTemp = 20
  this.currentTemp = this.startTemp
  this.min = 10
  this.max = 25
}

  Thermostat.prototype.showTemp = function() {
    return this.currentTemp
  };

  Thermostat.prototype.maxTemp= function() {
    return this.max
  }

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

  Thermostat.prototype.powerSaveOn = function() {
    if (this.currentTemp > 25) {
      this.currentTemp = 25;
    }
    this.max = 25;
  };

  Thermostat.prototype.powerSaveOff = function() {
    this.max = 32;
  }

  Thermostat.prototype.reset = function() {
    this.currentTemp = this.startTemp
  };

  Thermostat.prototype.setColour = function() {
    if (this.currentTemp > 25) {
      return 'red'
    } else if (this.currentTemp > 18) {
      return 'yellow'
    } else {
      return 'green'
    }
  };
