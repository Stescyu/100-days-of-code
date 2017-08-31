var comp = [];
var player = [];
var strict = false;
var count = 1;
var redsnd = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
var bluesnd = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
var greensnd = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
var yellowsnd = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");

//Red Button Pressed
$(".red").on("click", function(){
  redsnd.play();
  redsnd.currentTime=0;
  player.push(1)
})
//Blue Button Pressed
$(".blue").on("click", function(){
  bluesnd.play();
  bluesnd.currentTime=0;
  player.push(2)
})
//Green Button Pressed
$(".green").on("click", function(){
  greensnd.play();
  greensnd.currentTime=0;
  player.push(3)
})
//Yellow Button Pressed
$(".yellow").on("click", function(){
  yellowsnd.play();
  yellowsnd.currentTime=0;
  player.push(4)
})

//Strict Mode Toggle
$("#strictBut").on("click", function(){
  if(!strict){
    $(".onOff").text("ON");
    $(".onOff").css("color", "red");
    strict = true;
    restart();
  } else {
    $(".onOff").text("OFF");
    $(".onOff").css("color", "green");
    strict = false;
    restart();
  }
})

//Starting/Restarting Game

$("#start").on("click", function(){

  restart();
  playSimon();
  topRepeat();
    //Strict Mode OFF
  if(!strict){
    //check if button pressed matches the simon says
    var pos = 0;
    $(".block").on("click", function(){
      if(player[pos] != comp[pos]){
        $("#display").text("Try Again");
        pos = 0;
        player = [];
        topRepeat();
      } else {
        if(player.length == comp.length){
          if(count < 20){
            pos = 0;
            playSimon();
            topRepeat();
            player = [];
            count += 1;
            $(".countDis").text(count);
          } else {
            $("#display").text("YOU WIN!");
            setTimeout(function(){
              restart();
            }, 2000);
          }
        } else {
          pos += 1;
        }
      }
    })

//Strict Mode ON
  } else {
    //check if button pressed matches the simon says
    var pos = 0;
    $(".block").on("click", function(){
      if(player[pos] != comp[pos]){
        $("#display").text("Start Over");
          restart();
          playSimon();
          topRepeat();
      } else {
        if(player.length == comp.length){
          if(count < 20){
            pos = 0;
            playSimon();
            topRepeat();
            player = [];
            count += 1;
            $(".countDis").text(count);
          } else {
            $("#display").text("YOU WIN!");
            setTimeout(function(){
              restart();
            }, 2000);
          }
        } else {
          pos += 1;
        }
      }
    })

  } 
});

//Simon Says Game
function playSimon(){
  $("#display").text("Game Started");
 var random = Math.ceil(Math.random()*4);
 switch(random){
      case 1:
      comp.push(1);
      break;
   case 2:
      comp.push(2);
      break;
   case 3:
      comp.push(3);
      break;
   case 4:
      comp.push(4);
      break;
 }
    console.log(comp);
}

//Top layer repeat
function topRepeat(){
      if(!topRep){
        var status = 0;
        var topRep = setInterval(function(){
        if(status < comp.length){
          repeatSimon(comp[status]);
          console.log(comp[status]);
          status += 1;
    } else {
      clearInterval(topRep);
      status = 0;
      topRep = false;
    }
    }, 1200);
  } 
}


//Repeat the pattern
function repeatSimon(num){
  switch(num){
   case 1:
      simonRep(".red", redsnd, "redlit");
      break;
   case 2:
      simonRep(".blue", bluesnd, "bluelit");
      break;
   case 3:
      simonRep(".green", greensnd, "greenlit");
      break;
   case 4:
      simonRep(".yellow", yellowsnd, "yellowlit");
      break;
    }
}

function simonRep(item, sound, lit){
      $(item).addClass(lit);
      sound.play();
      sound.currentTime=0;
      setTimeout(function(){
        $(item).removeClass(lit);
      }, 1000)
}

//Reset The Game
function restart(){
  count = 1;
  comp = [];
  player = [];
  $(".countDis").text(count);
}