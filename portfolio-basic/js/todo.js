//Add new items
$("input[type='text']").on("keypress", function(event){
	if(event.which === 13){
		var value = $("input").val();
		$("ul").append("<li><span class='del'><i class='glyphicon glyphicon-remove' aria-hidden='true'></i></span>" + value + "</li>")
		$("input").val("")
	}
})
//Check off finished items
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});
//Option to remove items
$("ul").on("click", ".del", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
})
//Button to hide input form
$(".glyphicon-pencil").on("click", function(){
	$("input[type='text']").fadeToggle(500);
})