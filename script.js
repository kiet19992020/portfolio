let cursour = $('.cursor');
let cursorFollow = $('.cursorFollow');
let cursor_js = $('.img_js, .title_js');

$(window).on('mousemove', function(e) {
    console.log('mousemove');
    gsap.to(cursour, {
        x: e.clientX - (cursour.width() / 2), //lấy tọa độ điểm X
        y: e.clientY - (cursour.height() / 2), //lấy tọa độ điểm Y - () để mouse vào trọng tâm
        duration: 0.2,
    });
    gsap.to(cursorFollow, {
        x: e.clientX - (cursorFollow.width() / 2), //lấy tọa độ điểm X
        y: e.clientY - (cursorFollow.height() / 2), //lấy tọa độ điểm Y - () để mouse vào trọng tâm
        duration: 0.4,
    });
})

cursor_js.on('mouseenter', function() {
    cursorFollow.addClass('active')
})

cursor_js.on('mouseleave', function() {
    cursorFollow.removeClass('active')
})

let tl = gsap.timeline({ delay: 3})
tl.to([cursor_js,cursour,cursorFollow], {duration: 1, autoAlpha: 1})
tl.play();

$(document).ready(function () {
    //loadding start
    let cursour = $('.cursor');
    let cursorFollow = $('.cursorFollow');
    $(window).on("load", function () {
        $(".loader-wrapper").fadeTo(3500,1).fadeOut(1000);
    });
});