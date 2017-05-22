var searchTerm = $("#searchTerm")

//Random Search Button opens up link on new tab
$("#randomBtn").on("click", function(){
    window.open("https://en.wikipedia.org/wiki/Special:Random", "_blank");
    searchTerm.val("");
})

//Submit Value from Search Box on Search Button Submit
$("#submitBtn").on("click", function(){
if(searchTerm.val() !== "") {
        $("#msg").text("");
    getData();
    } else {
         $("#msg").text("Search Term is Required");
    }
})

//"Enter"" also submits
searchTerm.on("keypress", function(e){
    if(e.which === 13){
        $("#submitBtn").click();
    }
})

function getData(){
    $(".eachBox").remove();
        var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=" + searchTerm.val();
        $.getJSON(url, function(data){
//Loop through each of the JSON object
    for(var i = 0; i < data[1].length; i++){
        var title = data[1][i];
        var description = data[2][i];
        var link = data[3][i];

//Create search results
        $(".resultBox").append("<a href='" + link + "'><div class='eachBox'><p><strong>" + title + "</strong></p><p><em>" + description + "</em></p></div></a>");
    }
    $(".results").css("display", "block");
    $("#term").text(searchTerm.val());
    searchTerm.val("");
})
}