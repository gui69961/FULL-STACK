const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Funções básicas
function desenhar_quadrado(x, y, largura, altura, cor) {
  ctx.fillStyle = cor;
  ctx.fillRect(x, y, largura, altura);
}

function desenhar_linha(x1, y1, x2, y2, cor = "black") {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = cor;
  ctx.lineWidth = 1;
  ctx.stroke();
}

function desenhar_circulo(x, y, raio, corPreenchimento, corBorda = null) {
  ctx.beginPath();
  ctx.arc(x, y, raio, 0, 2 * Math.PI);
  if (corPreenchimento) {
    ctx.fillStyle = corPreenchimento;
    ctx.fill();
  }
  if (corBorda) {
    ctx.strokeStyle = corBorda;
    ctx.stroke();
  }
}

function desenhar_arco(x, y, raio, inicio, fim, sentidoHorario, corPreenchimento, corBorda = null) {
  ctx.beginPath();
  ctx.arc(x, y, raio, inicio, fim, sentidoHorario);
  if (corPreenchimento) {
    ctx.fillStyle = corPreenchimento;
    ctx.fill();
  }
  if (corBorda) {
    ctx.strokeStyle = corBorda;
    ctx.stroke();
  }
}

function escrever(texto, x, y, cor = "black") {
  ctx.fillStyle = cor;
  ctx.font = "16px Arial";
  ctx.fillText(texto, x, y);
}

// Desenho da cena
function desenhar() {
  // Texto
  escrever("Canvas", 120, 30);

  // Linhas principais
  desenhar_linha(0, 150, 300, 150, "green");     // horizontal verde
  desenhar_linha(0, 0, 150, 150, "blue");        // diagonal azul
  desenhar_linha(300, 0, 150, 150, "red");       // diagonal vermelha
  desenhar_linha(150, 150, 150, 300, "black");   // linha preta inferior

  // Quadrado vermelho central
  desenhar_quadrado(140, 155, 20, 20, "red");

  // Círculo azul claro com contorno azul escuro
  desenhar_circulo(150, 100, 10, "deepskyblue", "darkblue");

  // Bolinhas amarelas com contorno verde
  desenhar_circulo(90, 180, 10, "yellow", "green");
  desenhar_circulo(210, 180, 10, "yellow", "green");

  // Arcos verdes (superiores)
  desenhar_arco(150, 100, 30, Math.PI, 2 * Math.PI, false, null, "green");
  desenhar_arco(150, 100, 45, Math.PI, 2 * Math.PI, false, null, "green");

  // Arco ciano (inferior)
  desenhar_arco(150, 250, 30, 0, Math.PI, false, "cyan");

  // Arco verde (inferior)
  desenhar_arco(150, 250, 50, 0, Math.PI, false, null, "green");

  // Quadrado azul (canto superior esquerdo) — MENOR
  desenhar_quadrado(0, 0, 30, 30, "blue");

  // Quadrado vermelho (canto superior direito) — MAIOR
  desenhar_quadrado(270, 0, 30, 50, "red");

  // Quadrado amarelo e preto nos cantos inferiores
  desenhar_quadrado(0, 260, 40, 40, "yellow");
  desenhar_quadrado(260, 260, 40, 40, "black");

  // Cadeira amarela (inferior esquerdo)
  desenhar_quadrado(0, 240, 20, 20, "yellow");
  desenhar_quadrado(20, 240, 20, 20, "yellow");
  desenhar_quadrado(0, 260, 20, 20, "yellow");

  // Cadeira preta (inferior direito)
  desenhar_quadrado(280, 240, 20, 20, "black");
  desenhar_quadrado(260, 240, 20, 20, "black");
  desenhar_quadrado(280, 260, 20, 20, "black");

  // Quadrados cyan (devem atravessar a linha verde)
  desenhar_quadrado(20, 110, 20, 80, "cyan");   // esquerda
  desenhar_quadrado(260, 110, 20, 80, "cyan");  // direita
}

window.addEventListener("load", () => {
    const canvas = document.getElementById("myCanvas");
    canvas.style.border = "2px solid black";
  });
  
desenhar();

