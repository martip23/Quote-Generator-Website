/*jslint browser: true*/
/*jslint devel: true */
/*global $, jQuery*/

$(document).ready(function () {
    "use strict";
    var themeNum = 1;
                               
    $("#coin-button").on("click", function () {

        $.ajax({
            url: "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",
            success: function (json) {
                $("#quote").html(json[0].content);
                $("#author").html(json[0].title);
            },
            cache: false
        });
        
        $.getJSON("data/theme.json", function (json) {
            $("#background").css("backgroundImage", json[themeNum].backgroundURL);
            $("#content-container").css("backgroundColor", json[themeNum].color);
            themeNum = (themeNum + 1) % 5;
        });
    });
    
    $("#tweet-button").on("click", function () {
        var textToTweet, tweetLink;
        textToTweet = $("quote").text();
        if (textToTweet.length > 140) {
            alert("Too many characters for tweet!");
        }
        tweetLink = "https://twitter.com/home?status=" + encodeURIComponent(textToTweet);
        window.open(tweetLink, '_blank');
    });
});