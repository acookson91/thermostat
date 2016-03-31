$(document).ready(function(){
  var thermostat = new Thermostat();

  updateTempture();

  $( "#temperature-up" ).click(function(){
    thermostat.increaseTemperature();
    updateTempture();
  });

  $("#temperature").text(thermostat.getCurrentTemperature())

  $("#temperature-down").click(function(){
    thermostat.decreaseTemperature();
    updateTempture();
  })

  $("#temperature-reset").click(function(){
    thermostat.resetTemperature();
    updateTempture();
  })

  $("#powersaving-on").click(function(){
    thermostat.switchPowerSavingModeOn();
    updateTempture();
  })

  $("#powersaving-off").click(function(){
    thermostat.switchPowerSavingModeOff();
    updateTempture();
  })

  function updateTempture() {
    $("#temperature").text(thermostat.getCurrentTemperature())
    $('body').attr('class', thermostat.energyUsage())
  };

  $('#select-city').submit(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
  displayWeather(city);
})

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city
    var token = '&appid=dc0f049c4ac9f94a8b5aa14cceed2346'
    var units = '&units=metric'
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    })
  }

})
