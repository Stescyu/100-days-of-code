$(document).ready(function(){

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&APPID=8e0c4e2702c0d9c5dae50002a145f5e7"

        
        $.getJSON(url, function(data){
            var place = data.name + ", " + data.sys.country;
            var celcius = Math.round(data.main.temp - 273.15);
            var fahrenheit = Math.round(9/5 * data.main.temp - 459.67);
            var mainCondition = data.weather[0].main;
            var subCondition =  data.weather[0].description;
            var currentTemp = true;
            $("#temp").text(celcius);
            $("#location").text(place);
            $("#condition").text(mainCondition + "; " + subCondition);
            $("#unit").click(function(){
                if(currentTemp) {
                    $("#temp").text(fahrenheit);
                    currentTemp = false;
                } else {
                    $("#temp").text(celcius);
                    currentTemp = true;
                }
            });

            if(data.weather[0].main.toLowerCase() === "rain"){
                $("#icon").html("<img src='asset/images/rain.png'>")
            } else if(data.weather[0].main.toLowerCase() === "clear") {
                $("#icon").html("<img src='asset/images/sunny.png'>")
            } else if(data.weather[0].main.toLowerCase() === "thunderstorm") {
                $("#icon").html("<img src='asset/images/storm.png'>")
            } else if(data.weather[0].main.toLowerCase() === "clouds") {
                $("#icon").html("<img src='asset/images/cloudy.png'>")
            }
        })
    })

} else {
    console.log("Geolocational Data Not Available");
}



});


