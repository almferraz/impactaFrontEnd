$().ready(function () {
  console.log('Hello Word');
  //Acessando elemento HTML
  $('#lista li').addClass('estilo1');
  $('#lista li').eq(0).css({ color: 'green', 'text-transform': 'capitalize' });

  //identificando valor do texto da lista
  if ($('#lista li').eq(6).text('Andre')) {
    console.log('ok');
  }
  //consumindo coleção HTML
  $('#lista li').each(function () {
    console.log($(this).html());
    //condição comparar texto
    if ($(this).text() == 'Violino') {
      console.log('Aprenda Violino..');
      $(this).css({ cursor: 'pointer', 'text-decoration': 'underline' });
      $(this).click(function () {
        // window.location.href = 'https://www.submarino.com.br/busca/violino';
        window.open((href = 'https://www.submarino.com.br/busca/violino'));
      });
    }
  });
  //show - Hide Elementos ///////////
  $('#img1 p').css({
    cursor: 'pointer',
    'text-decoration': 'underline',
  });
  // $('#img1 img').eq(0).hide();
  $('#img1 img').hide();
  //mostra/oculta a imagem
  $('#img1 p').click(function () {
    // $('#img1 img').eq(0).fadeToggle(2000);
    $('#img1 img')
      .eq(0)
      .fadeToggle(2000, function () {
        // function CallBack
        $('#img1 img').eq(1).fadeToggle();
      });
  });
  //animação jquery /////////
  var animaP = $('#anima p');
  var animaImg = $('#anima img');
  // animaP.addClass('noCap');
  animaImg.eq(1).css({ left: '-40%', top: '25%' });
  // define as posições do segundo parágrafo
  animaP.eq(1).css({ left: '5%', bottom: '-20%' });
  animaP
    .eq(0)
    .animate(
      { left: '10%', top: '10%', 'font-size': '200%' },
      2000,
      function () {
        animaImg.eq(1).animate(
          {
            left: '15%',
          },
          2500,
          function () {
            animaP.eq(1).animate(
              {
                bottom: '20%',
                'font-size': '150%',
              },
              function () {
                animaImg.eq(0).animate({
                  left: '70%',
                  top: '30%',
                });
              },
            );
          },
        );
      },
    );
}); // fim ready

// //Animação JQUERY //////////
// var animaP=$("#anima p");
// var animaImg=$("#anima img");
// animaP.addClass("noCap");
// //define as posições iniciais da imagem do dialogo /////////
// animaImg.eq(1).css({"left":"-40%","top":"25%"});
// //animação do primeiro parágrafo (Comunique-se)
// animaP.eq(0).animate({
//     left:"10%",
//     top:"10%",
//     "font-size":"300%",
//  },2000,function(){
//  //call back da segunda animação (imagem diálogo)
//     animaImg.eq(1).animate({
//         left:"15%"
//     },2500);
//  });
