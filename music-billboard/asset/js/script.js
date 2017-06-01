$(document).ready(function(){

var url = "https://itunes.apple.com/us/rss/topsongs/limit=10/xml";

$.ajax({
    type: "GET",
    url: url,
    dataType: "xml",
    success: xmlData
});

});

function xmlData(xml){
    $(xml).find("entry").each(function(){
        $(".container").append('<div class="playlist"><p>' + $(this).find("title").text() + '</p>
        </div>')
    })
}



