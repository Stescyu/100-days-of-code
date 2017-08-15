var X = $("#goFirst");
var O = $("#goSecond");
var turn = true;
var player = [];
var comp = [];

X.on("click", function(){
  //hides the menu
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
            console.log("player1: " + player);
            win(player);
        }
        } else if(turn == false) {
          if(player.indexOf(parseInt($(this).attr("id"))) < 0 && comp.indexOf(parseInt($(this).attr("id"))) < 0 ){
            comp.push(parseInt($(this).attr("id")));
            $(this).text("O");
            turn = true;
            console.log("player2: " + comp);
            win(comp);
      }
      }
  });
});



//return only the array of 3 elements that add up to 15
function win(symbol){
for(var i = 0; i < symbol.length; i++){
  for(var j = 0; j < symbol.length; j++){
    for(var k = 0; k < symbol.length; k++){
      if(symbol[i] + symbol[j] + symbol[k] == 15 && symbol[i] != symbol[j] && symbol[j] != symbol[k] && symbol[i] != symbol[k]){
        $("#display").removeClass("hideMenu");
        $(".block").addClass("noClick")
        if(symbol == player){
          $("#display").html("<h1>Winner is X!</h1>");
        } else if(symbol == comp){
          $("#display").html("<h1>Winner is O!</h1>");
        }
        console.log("winner");
      }
    }
  }
}
}

//restart the game
function restartGame(){
  $("#selection").removeClass("hideMenu");
  $("#restartGame").addClass("hideMenu");
  $(".block").text("");
  $(".block").addClass("noClick");
  turn = true;
  player = [];
  comp = [];
  $("#display").html("");
}
