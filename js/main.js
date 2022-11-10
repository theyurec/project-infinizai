$('.burger').on('click', function(e) {
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
})