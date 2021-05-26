window.onload = () => {
  console.log('Hello Word');
  document.getElementsByTagName('h1')[0].innerHTML = 'Aulas de JavaScript';
  document.getElementById('titulo2').style.color = 'red';
  document.querySelectorAll('p')[1].style.fontWeight = 'bold';
  document.querySelector('ul li.orange').style.color = 'orange';

  // VARIÁVEIS - DIV C1//////////

  var mensagem, p1, div1, status;
  let total;
  total = parseFloat('120');
  status = false;
  mensagem = 'Declarando Variáveis';
  p1 = document.querySelector('div.c1 p');
  div1 = document.querySelector('div.c1 div');

  p1.innerHTML = mensagem;
  // console.log(`A variável total é do tipo ${typeof(total)}`);
  div1.innerHTML = `<span>A variável total é do tipo ${typeof total} </span>`;
  div1.innerHTML += `<span>A variável mensagem é do tipo ${typeof mensagem} </span>`;
  div1.innerHTML += `<span>A variável status é do tipo ${typeof status} </span>`;
  div1.innerHTML += `<span>A variável Div1 é do tipo ${typeof div1} </span>`;

  // VARIÁVEIS - DIV C2//////////

  var p2, n1, n2, div2, operacao, resultado;
  p2 = document.querySelector('div.c2 p');
  div2 = document.querySelector('div.c2 div');
  // n1 = 10;
  // n2 = 4;

  p2.innerHTML = 'Event Click';

  // div2.innerHTML = `<span>n1 + n2 =${n1 + n2} </span> `;
  // div2.innerHTML = `<span>n1  (${n1}) + n2  (${n2}) = ${n1 + n2} </span> `;

  // operacao = 'multiplicar';

  //SWITCH CASE ///////

  function calculadora(op) {
    n1 = document.querySelector('#num1').value;
    n2 = document.querySelector('#num2').value;

    switch (op) {
      case 'somar':
        resultado = parseFloat(n1) + parseFloat(n2);
        break;
      case 'subtrair':
        resultado = n1 - n2;
        break;
      case 'multiplicar':
        resultado = n1 * n2;
        break;
      case 'dividir':
        resultado = n1 / n2;
        break;
    }
    console.log(resultado);
    // document.querySelector('#resultado').textContent = `O resultado é ${resultado}`;
    document.querySelector(
      '#resultado',
    ).textContent = `O resultado é = ${resultado}`;
  }
  // calculadora(operacao);

  document.querySelector('#btn1').onclick = function () {
    calculadora('somar');
  };
  document.querySelector('#btn2').onclick = function () {
    calculadora('subtrair');
  };
  document.querySelector('#btn3').onclick = function () {
    calculadora('multiplicar');
  };
  document.querySelector('#btn4').onclick = function () {
    calculadora('dividir');
  };
  //sortear background
  var sorteioBg, header;
  sorteiaBg = parseInt(Math.random() * 4) + 6;
  header = document.querySelector('header');
  header.style.backgroundImage =
    'url(../imagens/planoDeFundo/plano' + sorteiaBg + '.jpg)';
  // console.log(sorteiaBg);

  //Galeria de Fotos
  var galeria, tituloGaleria; // declaração variaveis
  galeria = document.querySelector('#galeria'); // representa o eleemento div#galeria
  tituloGaleria = document.querySelector('div.c3 p');

  //function galeriaFotos
  function galeriaFotos(categoria, qtd, tipo) {
    tituloGaleria.textContent = categoria;
    //

    //
    //for - iterador - inicia a variável em 1 até 09 passo +1 //
    for (var i = 1; i <= qtd; i++) {
      imagem = new Image(); // cria a herança para um novo elemento <img>
      var origem;
      //ternário - condição ? faça algo : faça outra coisa //////
      i < 10
        ? (origem = '../imagens/galeriaPref/' + tipo + '0' + i + '.jpg')
        : (origem = '../imagens/galeriaPref/' + tipo + i + '.jpg');
      imagem.src = origem; // define a origem da imagem
      imagem.style.width = '33%';
      galeria.appendChild(imagem); //anexa a imagem na div galeria
      // console.log(imagem);
      // console.log(origem.length);
    }
  }
  //chamada da função
  // galeriaFotos('Animais', 12, 'animals');
  galeriaFotos('Flores', 11, 'flowers');
  //controledos botões
  var btAnimais, btFlores, btNatureza;
  var btArray; //array de botões
  btAnimais = document.querySelector('#animais');
  btFlores = document.querySelector('#flores');
  btNatureza = document.querySelector('#natureza');
  btArray = [
    //   0          1       2      3
    [btAnimais, 'Animais', 12, 'animals'], //0
    [btFlores, 'Flores', 11, 'flowers'], //1
    [btNatureza, 'Natureza', 20, 'nature'], //2
  ];
  // console.log(btArray[0][0]); //btFlores - elemento ancora
  btArray.forEach(function (obj, index) {
    // primeiro objeto e segundo o index obj ou index pode ser qualquer caracter
    //obj = representa cada linha consumida pelo foreach
    //obj[0] = botoes, obj[1] = titulos, obj[2] = qtd, obj[3] = nome da foto.
    obj[0].onclick = function () {
      galeria.textContent = '';
      galeriaFotos(obj[1], obj[2], obj[3]);
      // alert(obj[2]);
    };
    // console.log(obj[1]);
    // console.log(obj);
  });
  //localStorage
  localStorage.dataDeHoje = '25/05/2021';
  var cnome, cemail, btconf;
  cnome = document.querySelector('input[name=nome]');
  cmail = document.querySelector('input[name=email]');
  btconf = document.querySelector('#btConfirma');

  btconf.onclick = function () {
    localStorage.setItem('nome', cnome.value); // chave, valor
    localStorage.setItem('email', cmail.value); // chave, valor
  };
  if (localStorage.nome) {
    document.querySelector(
      '#bemvindo',
    ).textContent = `Olá   ${localStorage.getItem('nome')}`;
  }
  // canvas HTML5
  var c1, ctx, img1;
  c1 = document.querySelector('canvas');
  ctx = c1.getContext('2d');
  img1 = new Image();
  img1.src = '../imagens/misc/success.png';
  // console.log(img1);
  img1.onload = function () {
    ctx.drawImage(this, 10, 10, 237, 261);
    ctx.drawImage(this, 100, 100, 237, 261);
    ctx.fillStyle = 'rgba(255,0,0,0.5)';
    //arc(x,y,raio,angulo inicial, angulo final)
    ctx.beginPath();
    ctx.arc(300, 200, 50, 0, Math.PI * 2);
    ctx.fill();
    // ctx.stroke();
    // create radial
    var gradiente = ctx.createLinearGradient(0, 0, 0, 550);
    gradiente.addColorStop(0, 'red');
    gradiente.addColorStop(0.4, 'khaki');
    gradiente.addColorStop(0.6, 'lightBlue');

    ctx.fillStyle = gradiente;
    ctx.lineWidth = '5';
    //rect x,y,largura,altura
    ctx.fillRect(400, 100, 150, 250);
    ctx.strokeRect(400, 100, 150, 250);
    ctx.fillStyle = 'white';
    ctx.font = '20px Georgia';
    ctx.fillText('Eita! tá brabo ?', 410, 130);
    // ctx.fillStyle="white";
    // ctx.font="50px Georgia";
    // ctx.fillText("Eita!",415,150);
    // ctx.font="25px Georgia";
    // ctx.fillStyle="brown";
    // ctx.fillText("Tá Brabo?",415,210);
  };

  //
}; // fechamento do Onload
// obj = objeto leitura
// index = número da iteração
