


$(function () {

  $("#tittle").fitText(1.2, { minFontSize: '40px', maxFontSize: '100px' });
  $("#currentTemp").fitText(1.2, { minFontSize: '10px', maxFontSize: '100px' });
  $("#cityName").fitText(1.4, { minFontSize: '10px', maxFontSize: '100px' });
  $(".btn-xlarge").fitText(1.5, { minFontSize: '8px', maxFontSize: '30px' });

  $(".bb").click(function() {
    var ipApi = "http://ip-api.com/json";

    alertify.success("Fetching you're current location and weather now!");

    $.getJSON(ipApi, function(json){
      console.log(json);
      var city = json.city
    

    console.log(city);
    var weatherApi = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=a3c08e43b5625ffda3f45a7783e8b9ce';
    $.getJSON(weatherApi,function(json){
      console.log(json);
      var ktemp = json.main.temp;
      var ctemp = (ktemp-273.15).toFixed(2);
      console.log(ctemp);

      $( "#currentTemp" ).text(ctemp + " Celsius");
      $( "#cityName" ).text(city);

      })
    })


  });


});
