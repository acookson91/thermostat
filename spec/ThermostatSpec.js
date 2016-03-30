describe('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.temperature()).toEqual(20)
  });

  describe('up button', function(){

    it('increases temp', function(){
      thermostat.up();
      expect(thermostat.temperature()).toEqual(21)
      });
  })

  describe('down button', function(){

    it('decreases temp', function(){
      thermostat.down();
      expect(thermostat.temperature()).toEqual(19)
      });

    it('raises error when tries to go below min temp', function(){
      for(var i=1; i <= 10; i++){
        thermostat.down();
      };
      expect(function(){
        thermostat.down();
      }).toThrowError('too damn cold!');
    });
  });

});