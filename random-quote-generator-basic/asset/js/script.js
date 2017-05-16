var author = $("#author");
var quote = $("#quote");
var newQuote = $("#newquote");
var url = "http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en#";

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
    $.getJSON(url, function(data){
  $(".share").html("<a class='twitter-share-button' href='https://twitter.com/share' data-size='large' data-text='" + data.quoteText + "'>Tweet</a>");
});
})

//Twitter Button
window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
  

  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };

  return t;
}(document, "script", "twitter-wjs"));

}


