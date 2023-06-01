function slideshow () {
    $(".image img").hide()
    $(".image img").fadeIn(1200);

    $('#next').on('click' , function() {
        if (slide != (images.length - 1)) {
            $("img").hide()
            $('img').attr('src', images[slide+1])
            $("img").fadeIn(1000)
            slide++;
        }

    })
}