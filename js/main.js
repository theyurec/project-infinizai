$(function () {
    $('.burger').on('click', function(e) {
        e.preventDefault()
        $('.header__top').toggleClass('header__top--open')
        $('.burger').toggleClass('burger--close')
        $('.overlay').toggleClass('overlay--show')
    })
    setInterval(() => {
        if($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
            $('.burger').addClass('burger--follow')
        } else {
            $('.burger').removeClass('burger--follow')
        }
    },0)
    $('.sponsors__icons').slick({
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 5000,
        cssEase: 'linear',
        draggable: false,
        responsive:
        [
        {
            breakpoint: 1000,
            settings: {
            slidesToShow: 4,
            }
        },
        {
            breakpoint: 436,
            settings: {
            slidesToShow: 2,
            } 
        }
        ]
    });
    $('.customize__slider').slick({
        slidesToShow: 3,
        arrows: false,
        responsive:
        [
        {
            breakpoint: 570,
            settings: {
            slidesToShow: 2,
            }
        },
        {
            breakpoint: 458,
            settings: {
            slidesToShow: 1,
            } 
        }
        ]
    })

    $('.customize__slider-arrow-left').on('click', function(e){
        e.preventDefault()
        $('.customize__slider').slick('slickPrev')
    })
    $('.customize__slider-arrow-right').on('click', function(e){
        e.preventDefault()
        $('.customize__slider').slick('slickNext')
    })
    
});
