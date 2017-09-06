var X = $("#goFirst");
var O = $("#goSecond");
var turn = true;
var player = [];
var comp = [];
var winner = false;
var playerSym = "X";
var compSym = "O";

// $("#single").on("click", function(){
//   $("#pickPlayer").addClass("hideMenu");
//   $("#selection").removeClass("hideMenu");

  //Player Picked X
  X.on("click", function(){
    playerSym = "X";
    compSym = "O";
    $("#selection").addClass("hideMenu");
    $("#restartGame").removeClass("hideMenu");
    $("#restartGame").on("click", function(){
      restartGame();
    });
    $(".block").removeClass("noClick");
      //when player presses on an empty block
    $(".block").on("click", function(){
      //on player's turn
      if(turn == true){
        if(player.indexOf(parseInt($(this).attr("id"))) < 0 && comp.indexOf(parseInt($(this).attr("id"))) < 0 ){
          player.push(parseInt($(this).attr("id")));
          $(this).text("X");
          turn = false;
          console.log("player: " + player);
          win(player);
          tie();
      //on retarded computer's turn (need to think)
          if(turn == false){
          console.log("cpu");
          var cpuInput = Math.ceil(Math.random()*9);
          while(true){
            if(winner == true){
              break;
            } else if(player.indexOf(cpuInput) < 0 && comp.indexOf(cpuInput) < 0){
              comp.push(cpuInput);
              $("#" + cpuInput).text("O");
              break;
            } else {
              cpuInput = Math.ceil(Math.random()*9);
            }
          }
          turn = true;
          win(comp);
          tie();
          console.log("computer: " + comp);
        }
          //changes end here
      }
    }
    });
  })

  //Player Picked O
  O.on("click", function(){
    playerSym = "O";
    compSym = "X";
    $("#selection").addClass("hideMenu");
    $("#restartGame").removeClass("hideMenu");
    $("#restartGame").on("click", function(){
      restartGame();
    });
    $(".block").removeClass("noClick");
      //on retarded computer's turn (need to think)
      if(turn == true){
        console.log("cpu");
        var cpuInput = Math.ceil(Math.random()*9);
        while(true){
          if(winner == true){
            break;
          } else if(player.indexOf(cpuInput) < 0 && comp.indexOf(cpuInput) < 0){
            comp.push(cpuInput);
            $("#" + cpuInput).text("X");
            break;
          } else {
            cpuInput = Math.ceil(Math.random()*9);
          }
        }
        turn = false;
        win(comp);
        tie();
        console.log("computer: " + comp);
      }
        //changes end here
      //when player presses on an empty block
    $(".block").on("click", function(){
      //on player's turn
      if(turn == false){
        if(player.indexOf(parseInt($(this).attr("id"))) < 0 && comp.indexOf(parseInt($(this).attr("id"))) < 0 ){
          player.push(parseInt($(this).attr("id")));
          $(this).text("O");
          turn = true;
          console.log("player: " + player);
          win(player);
          tie();
      }
      if(turn == true){
        console.log("cpu");
        var cpuInput = Math.ceil(Math.random()*9);
        while(true){
          if(winner == true){
            break;
          } else if(player.indexOf(cpuInput) < 0 && comp.indexOf(cpuInput) < 0){
            comp.push(cpuInput);
            $("#" + cpuInput).text("X");
            break;
          } else {
            cpuInput = Math.ceil(Math.random()*9);
          }
        }
        turn = false;
        win(comp);
        tie();
        console.log("computer: " + comp);
      }
    }

    });
  })

// })

// //Multiplayer Code
// $("#multi").on("click", function(){
//   $("#pickPlayer").addClass("hideMenu");
//   $("#restartGame").removeClass("hideMenu");
//   $("#restartGame").on("click", function(){
//     restartGame();
//   });
//   $(".block").removeClass("noClick");
//   //when player presses on an empty block
//     $(".block").on("click", function(){
//       //on player's turn
//       if(turn == true){
//           if(player.indexOf(parseInt($(this).attr("id"))) < 0 && comp.indexOf(parseInt($(this).attr("id"))) < 0 ){
//             player.push(parseInt($(this).attr("id")));
//             $(this).text("X");
//             turn = false;
//             console.log("player1: " + player);
//             win(player);
//             tie();
//           }
//         } else if(turn == false) {
//           if(player.indexOf(parseInt($(this).attr("id"))) < 0 && comp.indexOf(parseInt($(this).attr("id"))) < 0 ){
//             comp.push(parseInt($(this).attr("id")));
//             $(this).text("O");
//             turn = true;
//             console.log("player2: " + comp);
//             win(comp);
//             tie();
//         }
//       }
//   });
// })

//If there is a tie
function tie(){
  if(player.length + comp.length == 9 && winner == false){
    console.log("tie");
    $("#display").removeClass("hideMenu");
    $("#display").html("<h1>We Have a Tie!</h1>");
    winner = true;
    setTimeout(function(){
      restartGame();
    }, 2000);
  }
}

//return only the array of 3 elements that add up to 15
function win(symbol){
for(var i = 0; i < symbol.length; i++){
  for(var j = 0; j < symbol.length; j++){
    for(var k = 0; k < symbol.length; k++){
      if(symbol[i] + symbol[j] + symbol[k] == 15 && symbol[i] != symbol[j] && symbol[j] != symbol[k] && symbol[i] != symbol[k]){
        $("#display").removeClass("hideMenu");
        $(".block").addClass("noClick")
        if(symbol == player){
          $("#display").html("<h1>Winner is " + playerSym + "!</h1>");
        } else if(symbol == comp){
          $("#display").html("<h1>Winner is " + compSym + "!</h1>");
        }
        console.log("winner");
        winner = true;
        setTimeout(function(){
          restartGame();
        }, 2000);
      }
    }
  }
}
}

//restart the game
function restartGame(){
  $("#restartGame").addClass("hideMenu");
  $("#selection").removeClass("hideMenu");
  $(".block").text("");
  $(".block").addClass("noClick");
  turn = true;
  player = [];
  comp = [];
  winner = false;
  $("#display").html("");
}
