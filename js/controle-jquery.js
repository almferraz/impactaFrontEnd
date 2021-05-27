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
  $('#img1 img').hide();
  //mostra/oculta a imagem
  $('#img1 p').click(function () {
    $('#img1 img').toggle();
  });
}); // fim ready
