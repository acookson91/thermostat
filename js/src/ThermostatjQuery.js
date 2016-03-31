
//jQuery(function($){
$(document).ready(function(){
  var thermostat = new Thermostat();

  $( "#temperature-up" ).click(function(){
    thermostat.increaseTemperature();
    $("#temperature").text(thermostat.getCurrentTemperature())
  });
  $("#temperature").text(thermostat.getCurrentTemperature())
  $("body").css("background-color", function(){
    var usage = thermostat.energyUsage();
    if (usage === 'low-usage'){
      $("body").css("background-color", "blue");
    }else if(usage === 'medium-usage'){
      $("body").css("background-color", "yellow");
    }else{
      $("body").css("background-color", "red");
    };
  })
  $("#temperature-down").click(function(){
    thermostat.decreaseTemperature();
    $("#temperature").text(thermostat.getCurrentTemperature())
  })
  $("#temperature-reset").click(function(){
    thermostat.resetTemperature();
    $("#temperature").text(thermostat.getCurrentTemperature())
  })
  $("#powersaving-on").click(function(){
    thermostat.switchPowerSavingModeOn();
    $("#temperature").text(thermostat.getCurrentTemperature())
  })
  $("#powersaving-off").click(function(){
    thermostat.switchPowerSavingModeOff();
    $("#temperature").text(thermostat.getCurrentTemperature())
  })
  $("button").click(function(){

    var usage = thermostat.energyUsage();
    if (usage === 'low-usage'){
      $("body").css("background-color", "blue");
    }else if(usage === 'medium-usage'){
      $("body").css("background-color", "yellow");
    }else{
      $("body").css("background-color", "red");
    };

  })
})
