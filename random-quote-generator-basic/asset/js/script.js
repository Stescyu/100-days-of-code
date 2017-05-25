var author = $("#author");
var quote = $("#quote");
var newQuote = $("#newquote");
var url = "https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en#";

$(document).ready(function(){

//Generate Quote on Start
getQuote();

//Generate New Quote when pressed
newQuote.on("click", function(){
    getQuote();
    $("blockquote").animate({width: 'toggle'}, 800);
    $("blockquote").animate({width: 'toggle'}, 800);
});
});

function getQuote(){
    $.getJSON(url, function(data){
    quote.text(data.quoteText);
    author.text(data.quoteAuthor);
    $(".twittershare").attr("href", "https://twitter.com/intent/tweet?text=" + data.quoteText + " - " + data.quoteAuthor);
})
}




