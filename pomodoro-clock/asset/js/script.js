console.log("Connected!");

var inputTime = $("#inputTime");
var displayTime = $("#displayTime")
var seconds = Math.round(inputTime.val())*60;
var timer = false;
var cycleCount = 1;


$("button").on("click", function(){
    seconds = Math.round(inputTime.val())*60;
    showTimer();
});

$(".fa-play-circle").on("click", function(){
  $(".status").text("Hustle Time...");
  $(".status").css("color","lightblue");
  $(".fa").css("color","lightblue");
  $("#displayTime").css("color", "lightblue");
  if(!timer){
    timer = setInterval(function(){
      if(seconds > 0){
        seconds -= 1
      }
      else {
        cycleCount += 1;
        if(cycleCount % 8 == 0){
          $(".status").text("Long Break...");
          $(".status").css("color","yellow");
          $(".fa").css("color","yellow");
          $("#displayTime").css("color", "yellow");
          seconds = 10 * 60;
        } else if(cycleCount % 2 == 0) {
          $(".status").text("Short Break...");
          $(".status").css("color","green");
          $(".fa").css("color","green");
          $("#displayTime").css("color", "green");
          seconds = 5 * 60;
        } else {
          $(".status").text("Hustle Time...");
          $(".status").css("color","lightblue");
          $(".fa").css("color","lightblue");
          $("#displayTime").css("color", "lightblue");
          seconds = Math.round(inputTime.val())*60;
        }
         }
 showTimer();
        }, 1000);
  }

})

$(".fa-pause-circle").on("click", function(){
  clearInterval(timer);
  timer = false;
  console.log("paused");
  $(".status").text("Paused...");
  $(".status").css("color","lightblue");
  $(".fa").css("color","lightblue");
  $("#displayTime").css("color", "lightblue");
})


$(".fa-stop-circle").on("click", function(){
  $(".status").text("Waiting...");
  $(".status").css("color","#fe0002");
  $(".fa").css("color","#fe0002");
  $("#displayTime").css("color", "#fe0002");
  clearInterval(timer);
  timer = false;
  seconds = Math.round(inputTime.val())*60
  showTimer();
  console.log("stop");
})

function showTimer(){
      var minuteTime = Math.floor(seconds/60);
      var secondTime = Math.floor(seconds % 60);
      if(minuteTime < 10){
        minuteTime = "0".concat(minuteTime);
      }
      if(secondTime < 10){
        secondTime = "0".concat(secondTime);
      }
      console.log(minuteTime + ":" + secondTime);

      displayTime.text(minuteTime + ":" + secondTime);


}