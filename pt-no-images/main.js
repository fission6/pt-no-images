console.log("Hey");

$(function() {

    function removeImages() {
        $('.post_body img, .post_body iframe').remove();
        setTimeout(removeImages, 100);
    }

    removeImages();

});