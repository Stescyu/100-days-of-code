//Array of Streamers
var myStreamers = ["moonmoon_ow", "nl_kripp", "amazhs", "forsenlol", "freecodecamp", "comster404", "summit1g"];

//Streamer API call
for(var i = 0; i < myStreamers.length; i++){

//Get Data from Endpoint
    $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/' + myStreamers[i] + '?callback=?', function(data) {
    var streamName = data.display_name;
    var streamLogo = data.logo;
    var streamStatus = data.status;
    var streamGame = data.game;
    var streamURL = data.url

//Streamers that do not exist
    if(streamName === undefined){
        streamName = data.message;
        $("ul").append('<li><img src="https://web.twitchapp.net/newport/cdn/assets/images/social/twitter-card.jpg"><span class="streamers">' + streamName + '</span><span class="status offline"></span><p class="content">This user does not exist or may have deleted their account.</p></li>')
    } else {
        
//Streamers that exist
    
        //Streamers that are online
            if(data.mature === true){
        $("ul").append('<a href="' + streamURL + '"><li><img src=' + streamLogo + '><span class="streamers">' + streamName + '</span><span class="status online"></span><p class="content">' + streamStatus + ' - <strong>' + streamGame + '</strong></p></li></a>')

        //Streamers that are offline
            } else if(data.mature === false){
        $("ul").append('<a href="' + streamURL + '"><li><img src=' + streamLogo + '><span class="streamers">' + streamName + '</span><span class="status offline"></span><p class="content">This user is currently offline, please follow on Twitch for latest updates.</p></li></a>')
            }
        }
    });
}



