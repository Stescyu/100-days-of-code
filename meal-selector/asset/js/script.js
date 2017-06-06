var food = ["Vietnamese", "Chinese", "English", "Burger", "Pizza", "Mexican", "Indonesian", "Japanese", "Korean", "Canadian", "Indian", "Jamaican"];

//On button pressed, change food type
$("button").on("click", function(){
    setTimeout(function(){
        $("span").text(randomFood());
    }, 500);
    $(".foodContent").animate({height: "toggle"}, 500);
    $(".foodContent").animate({height: "toggle"}, 500);
});

function randomFood(){
    return food[Math.floor(Math.random()*food.length)];
}