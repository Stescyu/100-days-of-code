//all npm installs declared
var express = require("express");
var app = express();
var request = require("request");
var unescape = require("underscore.string/unescapeHTML");
var stripTags = require("underscore.string/stripTags");
var port = process.env.PORT || 3000;

//res.render("quotegen.ejs"); => res.render("quotegen");
app.set("view engine", "ejs");

//declared static directory
app.use(express.static(__dirname + '/public'));

//use request to get the body elements and render into quotegen page
app.get("/", function(req,res){
    //endpoint
    var url = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
    //request for body
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            //parses the string into object
            var quote = JSON.parse(body);
            var actquote = quote["0"]["content"];
            actquote = unescape(actquote);
            actquote = stripTags(actquote);
            var actauthor = quote["0"]["title"];
            res.render("quotegen", {quote: actquote, author: actauthor});
        }
    })
});

//spin up server
app.listen(port);
console.log("Server Started at port " + port);