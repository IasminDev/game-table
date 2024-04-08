var player1 = {
  nome: "Player1",
  imagem: "https://img.icons8.com/color/48/000000/red-panda.png",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var player2 = {
  nome: "Player2",
  imagem: "https://img.icons8.com/dusk/64/000000/headset.png",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var player3 = {
  nome: "Player3",
  imagem:
    "https://img.icons8.com/external-tulpahn-outline-color-tulpahn/64/4a90e2/external-icecream-fast-food-color-outline-tulpahn-outline-color-tulpahn.png",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var player4 = {
  nome: "Player4",
  imagem:
    "https://img.icons8.com/stickers/48/4a90e2/paint-palette-with-brush.png",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};
var player5 = {
  nome: "Player5",
  imagem: "https://img.icons8.com/clouds/64/4a90e2/teddy-bear.png",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
};

player1.pontos = calcularPontos(player1);
player2.pontos = calcularPontos(player2);
player3.pontos = calcularPontos(player3);
player4.pontos = calcularPontos(player4);
player5.pontos = calcularPontos(player5);

function calcularPontos(jogador) {
  var pontos =
    jogador.vitorias * 2 + jogador.empates / 2 - jogador.derrotas / 2;
  return pontos;
}

var jogadores = [player1, player2, player3, player4, player5];

exibirListaJogadores(jogadores);

function exibirListaJogadores(jogadores) {
  var html = "";
  for (var i = 0; i < jogadores.length; i++) {
    jogadores[i].pontos = calcularPontos(jogadores[i]);
    //html = html + "...."
    html +=
      "<tr><td>" +
      "<img class='jogador-imagem' src=" +
      jogadores[i].imagem +
      "/>" +
      "<br>" +
      jogadores[i].nome +
      "</td>";
    html += "<td>" + jogadores[i].vitorias + "</td>";
    html += "<td>" + jogadores[i].empates + "</td>";
    html += "<td>" + jogadores[i].derrotas + "</td>";
    html += "<td>" + jogadores[i].pontos + "</td>";
    html +=
      "<td><button onClick='adicionarVitoria(" +
      i +
      ")' name='botao'>Vitória</button></td>";
    html +=
      "<td><button onClick='adicionarEmpate(" +
      i +
      ")' name='botao'>Empate</button></td>";
    html +=
      "<td><button onClick='adicionarDerrota(" +
      i +
      ")' name='botao'>Derrota</button></td>";
    html +=
      "<td><button onClick='zerarPontuacao(" +
      i +
      ")' name='botao'>Zerar</button></td>";
    html +=
      "<td><button onClick='removerJogador(" +
      i +
      ")' name='botao'>Remover</button></td></tr>";
  }
  //var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = html;
}

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  //jogador.vitorias = jogador.vitorias + 1
  jogador.vitorias++;
  jogador.pontos = calcularPontos(jogador);
  //if(jogador[i] != (jogador.vitorias)){jogador.derrotas++}
  exibirListaJogadores(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calcularPontos(jogador);
  exibirListaJogadores(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  jogador.pontos = calcularPontos(jogador);
  exibirListaJogadores(jogadores);
}

function zerarPontuacao(i) {
  var jogador = jogadores[i];
  jogador.vitorias = 0;
  jogador.empates = 0;
  jogador.derrotas = 0;
  jogador.pontos = 0;
  exibirListaJogadores(jogadores);
}

function removerJogador(i) {
  jogadores.splice(i, 1);
  exibirListaJogadores(jogadores);
}

function adicionarJogadores() {
  var error = document.getElementById("error");
  var novoNome = document.getElementById("nomeJogador");
  var novaImagem = document.getElementById("imagemJogador");
  var nome = novoNome.value;
  var imagem = novaImagem.value;

  if (
    (nome != "" && imagem != "" && imagem.endsWith(".jpg")) ||
    imagem.endsWith(".png") ||
    imagem.endsWith(".JPG") ||
    imagem.endsWith(".PNG") ||
    imagem.endsWith(".gif") ||
    imagem.endsWith(".jpeg")
  ) {
    var novoJogador = {
      nome: nome,
      imagem: imagem,
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      pontos: 0
    };
    error.innerHTML = "";
    jogadores.push(novoJogador);
  } else {
    error.innerHTML =
      "Digite o nome e um link de imagem para adicionar um novo jogador.";
  }

  novoNome.value = "";
  novaImagem.value = "";
  exibirListaJogadores(jogadores);
}

function zerarTabela() {
  var jogador = jogadores[i];
  for (var i = 0; i < jogadores.length; i++) {
    jogadores[i].vitorias = 0;
    jogadores[i].empates = 0;
    jogadores[i].derrotas = 0;
    jogadores[i].pontos = 0;
  }
  var botoes = document.getElementsByName("botao");
  var botoesLista = Array.prototype.slice.call(botoes);
  botoesLista.forEach(function (element) {
    element.disabled = false;
  });
  error.innerHTML = "";
  resultado.innerHTML = "";
  exibirListaJogadores(jogadores);
}

function finalizaJogo() {
  var resultado = document.getElementById("resultado");
  var total = "";
  var nomeVencedor = "";
  var empate = "";
  var numero = "";

  for (var i = 0; i < jogadores.length; i++) {
    if (i == 0) {
      total = jogadores[i].pontos;
      nomeVencedor = jogadores[i].nome;
      empate = "sim";
    } else {
    }

    if (total < jogadores[i].pontos) {
      total = jogadores[i].pontos;
      nomeVencedor = jogadores[i].nome;
      empate = "nao";
    } else if (total < jogadores[i].pontos) {
      total = jogadores[i].pontos;
      nomeVencedor = jogadores[i].nome;
      empate = "nao";
      return total;
      return nomeVencedor;
    }

    if (total > jogadores[i].pontos) {
      empate = "nao";
    } else if (total > jogadores[i].pontos) {
      empate = "nao";
    }

    console.log(empate);
  } //next

  if (empate == "nao") {
    resultado.innerHTML =
      "O vencedor foi " + nomeVencedor + " com " + total + " pontos.";
  } else if (empate == "sim") {
    resultado.innerHTML = "Não houve vencedor.";
  }

  var botoes = document.getElementsByName("botao");
  var botoesLista = Array.prototype.slice.call(botoes);
  botoesLista.forEach(function (element) {
    element.disabled = true;
  });
}

//https://wallpapercave.com/wp/wp5147454.jpg
