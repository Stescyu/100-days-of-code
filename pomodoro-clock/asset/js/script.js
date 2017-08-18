console.log("Connected!");

var inputTime = $("#inputTime");
var displayTime = $("#displayTime")
var seconds = 10;
var timer = false;
var cycleCount = 1;


$("button").on("click", function(){
    seconds = Math.round(inputTime.val())*60;
    showTimer();
});

$(".fa-play-circle").on("click", function(){
  if(!timer){
    timer = setInterval(function(){
      if(seconds > 0){
        seconds -= 1
      }
      else {
        cycleCount += 1;
        clearInterval(timer);
         }
 showTimer();
        }, 1000);
  }

})

$(".fa-pause-circle").on("click", function(){
  clearInterval(timer);
  timer = false;
  console.log("paused");
})


$(".fa-stop-circle").on("click", function(){
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