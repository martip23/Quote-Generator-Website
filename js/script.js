/*jslint browser: true*/
/*global $, jQuery*/

$(document).ready(function () { "use strict";
                               $("#coin-button").on("click", function () {
        $("#quote").html("Between a one and a three is always a two.");
        $("#author").html("Native American Proverb");
        $("#background").css("backgroundImage", "url(../media/caravan.jpg)");
        $("#content-container").css("backgroundColor", "rgba(204,102,0,0.8)");
    });
    });