describe('Thermostat', function() {

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("starts with 20", function(){
    expect(thermostat.showTemp()).toEqual(20);
  });

  it('shows max temp', function(){
    expect(thermostat.maxTemp()).toEqual(thermostat.max)
  })

  it('increments temp by 1', function(){
    thermostat.increaseTemp();
    expect(thermostat.showTemp()).toEqual(thermostat.startTemp+=1);
  });

  it('decrement temp by 1', function(){
    thermostat.decreaseTemp();
    expect(thermostat.showTemp()).toEqual(thermostat.startTemp-=1);
  });

  it('cannot be decremented below minimum temp', function(){
  thermostat.decreaseTemp();
    thermostat.decreaseTemp();
      thermostat.decreaseTemp();
        thermostat.decreaseTemp();
          thermostat.decreaseTemp();
            thermostat.decreaseTemp();
              thermostat.decreaseTemp();
                thermostat.decreaseTemp();
                  thermostat.decreaseTemp();
                    thermostat.decreaseTemp();
    expect(function() {thermostat.decreaseTemp()
    }).toThrowError('nah mate too cold');
  });

  it('cannot be increased above max temp', function(){
    for(var i = 20; i < thermostat.max; i++){
      thermostat.increaseTemp()}
      expect(function() {thermostat.increaseTemp()
      }).toThrowError('sweaty');
    });

    it('power saving mode reduces max temperature', function() {
      thermostat.powerSaveOn();
      expect(thermostat.max).toEqual(25)
    })

    it('Changes tempture to below 25 if above', function(){
      thermostat.currentTemp = 29
      thermostat.powerSaveOn();
      expect(thermostat.currentTemp).toBe(25)
    })

    it('switching power mode off increases max temperature', function(){
      thermostat.powerSaveOff();
      expect(thermostat.max).toEqual(32)
    })

    it('reset button resets temperature to 20', function(){
      thermostat.reset();
      expect(thermostat.currentTemp).toEqual(thermostat.startTemp)
    });

    it('colour displays green if current temp is below 18', function(){
      thermostat.currentTemp = 17
      expect(thermostat.setColour()).toBe('green')
    })

    it('colour displays red if current temp is above 25', function(){
      thermostat.currentTemp = 26
      expect(thermostat.setColour()).toBe('red')
    })

    it('otherwise colour displays yellow', function(){
      thermostat.currentTemp = 20
      expect(thermostat.setColour()).toBe('yellow')
    })


  });
