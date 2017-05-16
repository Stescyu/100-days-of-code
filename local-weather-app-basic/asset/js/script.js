$(document).ready(function(){

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&APPID=8e0c4e2702c0d9c5dae50002a145f5e7"
        console.log(url);  
    })

} else {
    console.log("Geolocational Data Not Available");
}


});

function getWeather(){
}
