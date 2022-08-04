$(document).ready(function(){
    $('.menu').hide()
    $('.menu_ham').on('click', function(){
        $('.menu').slideToggle(500)
    })

    $('.text-box').hide()
    $('.caja').on('click', function(){
        let ind = $('.caja').index(this)
        let textBox = $('.text-box').eq(ind)
        textBox.slideToggle(500)
    })
})