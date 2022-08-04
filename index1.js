$(document).ready(function(){
    $('.menu').hide()
    $('.menuHam').on('click', function(){
        $('.menu').slideToggle(500);
    })

    $('.text-box').hide()
    $('.caja').on('click', function(){
        let ind = $('.caja').index(this)
        let text = $('.text-box').eq(ind)
        text.slideToggle(500)
    })
})