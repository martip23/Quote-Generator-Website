/*jslint browser: true*/
/*global $, jQuery*/

$(document).ready(function () { "use strict";

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
        
        $.ajax({
            url: "../data/theme.json",
            success: function (json) {
                $("#background").css("background-image", json[themeNum].backgroundURL);
                $("#content-container").css("background-color", json[themeNum].color);
                themeNum = (themeNum + 1) % 5;
            }
        });
    });
    });