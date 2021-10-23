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
    $(window).on("load", function () {
        $(".loader-wrapper").fadeTo(2500,1).fadeOut(1000);
    });
});


//header-start
const timeline2 = gsap.timeline({
    defaults: {
        duration: 4
    }
})
timeline2
    .from('.header', {
        opacity: 0,
        delay: "2",
        ease:  Power4.easeIn,
    }) //ben tren xuong

const timeline = gsap.timeline({
    defaults: {
        duration: 2.5,
    }
})
timeline
    .from('.banner-title', {
        y: '50vh',
        ease: Power4.easeIn,
		delay: "0.5",
        opacity: 0
    }, 1)
    .from('.banner-img', {
        x: '-100vw',
        ease: 'power2.in',
		delay: "0.5",
        opacity: 0
}, 1)

