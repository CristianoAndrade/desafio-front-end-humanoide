$(function () {

    
    if ($(window).width() >= 992) {

//Hide e show para botões e preço dos modelos
        $(function () {
            $(".produto_btn").hide();
            $(".produto_preco").hide();
        });

        $("#1").hover(function () {
            event.preventDefault();
            $("#btn1").toggle();
            $("#preco1").toggle();
        });

        $("#2").hover(function () {
            event.preventDefault();
            $("#btn2").toggle();
            $("#preco2").toggle();
        });

        $("#3").hover(function () {
            event.preventDefault();
            $("#btn3").toggle();
            $("#preco3").toggle();
        });

        $("#4").hover(function () {
            event.preventDefault();
            $("#btn4").toggle();
            $("#preco4").toggle();
        });

// Size de img com hover        
        $("#1").hover(function(){
            $('#1 img').toggleClass('produto_column--imgSize');
            $('#1 img').toggleClass('produto_img');
    });        
        
        $("#2").hover(function(){
            $('#2 img').toggleClass('produto_column--imgSize');
            $('#2 img').toggleClass('produto_img');
    }); 
        
        $("#3").hover(function(){
            $('#3 img').toggleClass('produto_column--imgSize');
            $('#3 img').toggleClass('produto_img');
    }); 
        
        $("#4").hover(function(){
            $('#4 img').toggleClass('produto_column--imgSize');
            $('#4 img').toggleClass('produto_img');
    });
        
    }
});
