$(function() {
    $('.btnMenu').on('click', function(){
       $('.navArea').animate({
           right: 0
       });
    });
    
    $('.btnClose').on('click', function() {
        $('.navArea').animate({
            right: '-100%'
        });
    });
});