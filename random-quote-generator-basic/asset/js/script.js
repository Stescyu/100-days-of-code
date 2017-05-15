var author = $("#author");
var quote = $("#quote");
var newQuote = $("#newquote");
var url = "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en#";

$(document).ready(function(){

getQuote();


newQuote.on("click", function(){
    getQuote();
});
});

function getQuote(){
    $.getJSON(url, function(data){
    quote.text(data["quoteText"]);
    author.text(data["quoteAuthor"]);
})
}


