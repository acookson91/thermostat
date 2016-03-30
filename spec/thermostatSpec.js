describe('Thermostat', function() {

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("Starts with 20", function(){
    expect(thermostat.showTemp()).toEqual(20);
  });

  it('increments temp by 1', function(){
    thermostat.increaseTemp();
    expect(thermostat.showTemp()).toEqual(21);
  });

  it('decrement temp by 1', function(){
    thermostat.decreaseTemp();
    expect(thermostat.showTemp()).toEqual(19);
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
  });
