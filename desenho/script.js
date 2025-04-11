const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

function desenhar_quadrado(x, y, cor, tamanho = 40) {
  ctx.fillStyle = cor;
  ctx.fillRect(x, y, tamanho, tamanho);
}

function desenhar_linha(x1, y1, x2, y2, cor = "black") {
  ctx.strokeStyle = cor;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function desenhar_arco(x, y, raio, anguloInicial, anguloFinal, cor = "black", preenchido = true) {
  ctx.beginPath();
  ctx.arc(x, y, raio, anguloInicial, anguloFinal);
  if (preenchido) {
    ctx.fillStyle = cor;
    ctx.fill();
  } else {
    ctx.strokeStyle = cor;
    ctx.stroke();
  }
}

function escrever(texto, x, y, cor = "black", fonte = "16px Arial") {
  ctx.fillStyle = cor;
  ctx.font = fonte;
  ctx.fillText(texto, x, y);
}

function desenhar_canvas() {
  // Quadrados
  desenhar_quadrado(0, 0, "blue");
  desenhar_quadrado(260, 0, "red");
  desenhar_quadrado(0, 260, "yellow");
  desenhar_quadrado(260, 260, "black");
  desenhar_quadrado(130, 130, "red", 40);
  desenhar_quadrado(40, 90, "cyan", 20);
  desenhar_quadrado(240, 90, "cyan", 20);

  // Linhas
  desenhar_linha(0, 150, 300, 150, "green");
  desenhar_linha(150, 0, 150, 300, "black");
  desenhar_linha(0, 0, 150, 150, "blue");
  desenhar_linha(300, 0, 150, 150, "red");

  // Círculos
  desenhar_arco(150, 150, 12, 0, 2 * Math.PI, "deepskyblue");
  desenhar_arco(80, 170, 12, 0, 2 * Math.PI, "yellow");
  desenhar_arco(220, 170, 12, 0, 2 * Math.PI, "yellow");

  // Arcos verdes e ciano
  desenhar_arco(150, 120, 30, Math.PI, 2 * Math.PI, "green", false);
  desenhar_arco(150, 120, 50, Math.PI, 2 * Math.PI, "green", false);
  desenhar_arco(150, 250, 30, 0, Math.PI, "cyan");
  desenhar_arco(150, 250, 50, 0, Math.PI, "green", false);

  // Texto
  escrever("Canvas", 120, 70);
}

desenhar_canvas();
