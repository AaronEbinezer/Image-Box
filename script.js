var length = $('.image-wrapper').find('img').length;
var w = $('.image-wrapper').width();
var i, j, k, l;
$(document).ready(function() {
    for (i = 1; i <= length; i++) {
        j = i * i;
        if (j >= length) {
            k = Math.sqrt(j);
            break;
        }
    }
    l = w / k;
    $("img").css("width", l);
    $("img").css("height", l);
    // $("div").html(length);
});
