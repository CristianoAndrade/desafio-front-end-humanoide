$(function () {
    $("body").css("display", "none");
    
    //carrega hide do modal
    window.onload = carregaPagina();
    
    //abre e fecha janela de compra
    $('.adicionar_show--btn').click(adicionaItem);
    $('.modal_show--btn').click(adicionaItem);
    //muda a cor do botão dos tamanhos ao clicar
    $('#pp').click(mudaCorBotaoPP);
    $('#p').click(mudaCorBotaoP);
    $('#m').click(mudaCorBotaoM);
    $('#g').click(mudaCorBotaoG);

    // botão compra direciona para pagina dos produtos    
    $('.banner_btn').click(direcionaPagina);

    //botão altera os dados do produto
    $('#btn1').click(alteraDadoBtn1);
    $('#btn2').click(alteraDadoBtn2);
    $('#btn3').click(alteraDadoBtn3);
    $('#btn4').click(alteraDadoBtn4);



});

//function area__________________________________________________

    
function carregaPagina(){
    $('.modal_show').hide();
    $("body").fadeToggle(2000);
}


//function para direcionar pagina
function direcionaPagina() {
    $(window.document.location).attr('href', 'show.html');
}


//function para alterar os dados da pagina show

//btn1
function alteraDadoBtn1() {
    $.get("http://localhost/desafiohumanoide/server/data.json", selecionaProduto);

    function selecionaProduto(products) {

        $('html, body').animate({
            scrollTop: $(".banner_show").offset().top
        }, 1000);

        $('.banner_show').css({
            'background-image': 'url(../../layout/images/fantasia-01.png)'
        });

        $('.titulo_show p').text(products.products[0].title);

        $('.titulo_show').css({
            'left': '679px'
        });

        $('.descricao_show p').text(products.products[0].description);

        $('.preco_show p del').text('R$' + products.products[0].price);

        $('.preco_show p span').text('R$' + products.products[0].promotional_price);

        $('.preco_show').css({
            'top': '283px',
            'left': '685px'
        });

        $('.tamanho_show ul').html('<li><a id="pp" class="tamanho_show--btn">' + products.products[0].sizes[0] + '</a></li><li><a id="p" class="tamanho_show--btn">' + products.products[0].sizes[1] + '</a></li><li><a id="m" class="tamanho_show--btn">' + products.products[0].sizes[2] + '</a></li><li><a id="g" class="tamanho_show--btn">' + products.products[0].sizes[3] + '</a></li>');
        
        
        //mobile
        if ($(window).width() <= 375) {

            $('.titulo_show').css({
                'left': '137px',
                'top': '15px'
            });

            $('.descricao_show').css({
                'top': '36px'
            });

            $('.preco_show').css({
                'left': '145px',
                'top': '180px'
            });
            
            $('#1').hide();
            $('#4').hide();
            $('#2').show();
            $('#3').show();
            
        }
        
        $('#pp').click(mudaCorBotaoPP);
        $('#p').click(mudaCorBotaoP);
        $('#m').click(mudaCorBotaoM);
        $('#g').click(mudaCorBotaoG);

    }

}

//btn2
function alteraDadoBtn2() {
    $.get("http://localhost/desafiohumanoide/server/data.json", selecionaProduto);


    function selecionaProduto(products) {

        $('html, body').animate({
            scrollTop: $(".banner_show").offset().top
        }, 1000);

        $('.banner_show').css({
            'background-image': 'url(../../layout/images/fantasia-02.png)'
        });

        $('.titulo_show p').text(products.products[1].title);

        $('.titulo_show').css({
            'left': '679px'
        });

        $('.descricao_show p').text(products.products[1].description);

        $('.preco_show p').text('R$' + products.products[1].price);

        $('.preco_show').css({
            'top': '289px',
            'left': '593px'
        });

        $('.tamanho_show ul').html('</li><li><a id="p" class="tamanho_show--btn">' + products.products[1].sizes[0] + '</a></li><li><a id="m" class="tamanho_show--btn">' + products.products[1].sizes[1] + '</a></li><li><a id="g" class="tamanho_show--btn">' + products.products[1].sizes[2] + '</a></li>');


        //mobile
        if ($(window).width() <= 375) {

            $('.titulo_show').css({
                'left': '137px',
                'top': '15px'
            });

            $('.descricao_show').css({
                'top': '36px'
            });

            $('.preco_show').css({
                'left': '99px',
                'top': '180px'
            });

            $('.preco_show p').css({
                'font-weight': 'bold'
            });
            
            $('#2').hide();
            $('#1').hide();
            $('#3').show();
            $('#4').show();
            
        }
        
        $('#p').click(mudaCorBotaoP);
        $('#m').click(mudaCorBotaoM);
        $('#g').click(mudaCorBotaoG);

    }


}

//btn3
function alteraDadoBtn3() {
    $.get("http://localhost/desafiohumanoide/server/data.json", selecionaProduto);


    function selecionaProduto(products) {

        $('html, body').animate({
            scrollTop: $(".banner_show").offset().top
        }, 1000);

        $('.banner_show').css({
            'background-image': 'url(../../layout/images/fantasia-03.png)'
        });

        $('.titulo_show p').text(products.products[2].title);

        $('.titulo_show').css({
            'left': '679px'
        });

        $('.descricao_show p').text(products.products[2].description);

        $('.preco_show p del').text('R$' + products.products[2].price);

        $('.preco_show p span').text('R$' + products.products[2].promotional_price);

        $('.preco_show').css({
            'top': '289px',
            'left': '676px'
        });

        $('.tamanho_show ul').html('</li><li><a id="p" class="tamanho_show--btn">' + products.products[2].sizes[0] + '</a></li><li><a id="m" class="tamanho_show--btn">' + products.products[2].sizes[1] + '</a></li>');

        $('.tamanho_show ul').css({
            'justify-content': 'space-evenly'
        });


        //mobile
        if ($(window).width() <= 375) {

            $('.titulo_show').css({
                'left': '137px',
                'top': '15px'
            });

            $('.descricao_show').css({
                'top': '36px'
            });

            $('.preco_show').css({
                'left': '143px',
                'top': '180px'
            });
            
            $('#3').hide();
            $('#2').hide();
            $('#4').show();
            $('#1').show();
        }
        
        $('#p').click(mudaCorBotaoP);
        $('#m').click(mudaCorBotaoM);

    }

}

//btn4
function alteraDadoBtn4() {
    $.get("http://localhost/desafiohumanoide/server/data.json", selecionaProduto);


    function selecionaProduto(products) {

        $('html, body').animate({
            scrollTop: $(".banner_show").offset().top
        }, 1000);

        $('.banner_show').css({
            'background-image': 'url(../../layout/images/fantasia-01.png)'
        });

        $('.titulo_show p').text(products.products[3].title);

        $('.titulo_show').css({
            'left': '679px'
        });

        $('.descricao_show p').text(products.products[3].description);

        $('.preco_show p').text('R$' + products.products[3].promotional_price);

        $('.preco_show').css({
            'top': '289px',
            'left': '593px'
        });

        $('.tamanho_show ul').html('</li><li><a id="p" class="tamanho_show--btn">' + products.products[3].sizes[0] + '</a></li><li><a id="m" class="tamanho_show--btn">' + products.products[3].sizes[1] + '</a></li><li><a id="g" class="tamanho_show--btn">' + products.products[3].sizes[2] + '</a></li>');


        //mobile
        if ($(window).width() <= 375) {

            $('.titulo_show').css({
                'left': '137px',
                'top': '15px'
            });

            $('.descricao_show').css({
                'top': '36px'
            });

            $('.preco_show').css({
                'left': '99px',
                'top': '180px'
            });

            $('.preco_show p').css({
                'font-weight': 'bold'
            });
            
            $('#4').hide();
            $('#3').hide();
            $('#1').show();
            $('#2').show();
        }
        
        $('#p').click(mudaCorBotaoP);
        $('#m').click(mudaCorBotaoM);
        $('#g').click(mudaCorBotaoG);

    }
}

//function seleciona cada opção de tamanho

function mudaCorBotaoPP() {
        $("#pp").toggleClass('clicado');
        $('#p').removeClass('clicado');
        $('#m').removeClass('clicado');
        $('#g').removeClass('clicado');
}

function mudaCorBotaoP(){
        $('#p').toggleClass('clicado');
        $('#pp').removeClass('clicado');
        $('#m').removeClass('clicado');
        $('#g').removeClass('clicado');
}

function mudaCorBotaoM(){
        $('#m').toggleClass('clicado');
        $('#pp').removeClass('clicado');
        $('#p').removeClass('clicado');
        $('#g').removeClass('clicado');
}

function mudaCorBotaoG(){
        $('#g').toggleClass('clicado');
        $('#pp').removeClass('clicado');
        $('#p').removeClass('clicado');
        $('#m').removeClass('clicado');
}

function adicionaItem() {
    event.preventDefault();
    $('.modal_show').fadeToggle(1000);
}
