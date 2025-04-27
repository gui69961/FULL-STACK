const canvas = document.getElementById('meuCanvas');
const ctx = canvas.getContext('2d');

// Função para desenhar quadrados
function desenhar_quadrado(x, y, tamanho, cor) {
  ctx.fillStyle = cor;
  ctx.fillRect(x, y, tamanho, tamanho);
}

// Função para desenhar linhas
function desenhar_linha(x1, y1, x2, y2, cor) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = cor;
  ctx.stroke();
}

// Função para desenhar arcos (círculos ou semicírculos)
function desenhar_arco(x, y, raio, inicio, fim, cor) {
  ctx.beginPath();
  ctx.arc(x, y, raio, inicio, fim);
  ctx.strokeStyle = cor;
  ctx.stroke();
}

// Função para desenhar textos
function escrever(texto, x, y) {
  ctx.font = "16px Arial";
  ctx.fillStyle = "black";
  ctx.fillText(texto, x, y);
}

// -------------------------------
// DESENHAR A FIGURA:
function desenhar_escada(x, y, cor, lado = "direita") {
  ctx.fillStyle = cor;

  if (lado === "direita") {
    // Escada crescendo para direita
    ctx.fillRect(x, y + 30, 30, 30);
    ctx.fillRect(x + 30, y, 30, 60);
  } else if (lado === "esquerda") {
    // Escada crescendo para esquerda
    ctx.fillRect(x + 30, y + 30, 30, 30);
    ctx.fillRect(x, y, 30, 60);
  }
}



desenhar_escada(0, 250, "yellow"); // Escada amarela no canto inferior esquerdo
desenhar_escada(240, 240, "black"); // Escada preta no canto inferior direito



// Fundo já branco e borda no CSS

// Linhas principais
desenhar_linha(0, 0, 150, 150, "blue"); // linha azul
desenhar_linha(300, 0, 150, 150, "red"); // linha vermelha
desenhar_linha(0, 150, 300, 150, "green"); // linha horizontal verde
desenhar_linha(150, 150, 150, 300, "black"); // linha vertical preta (inferior)

// Quadrados grandes
desenhar_quadrado(0, 0, 50, "blue"); // quadrado azul no canto superior esquerdo
desenhar_quadrado(250, 0, 50, "red"); // quadrado vermelho no canto superior direito
desenhar_quadrado(0, 135, 40, "cyan"); // quadrado cyan na esquerda no meio
desenhar_quadrado(280, 135, 30, "cyan"); // quadrado cyan na direita no meio
desenhar_quadrado(120, 150, 30, "red"); // quadrado vermelho no centro



// Círculos
function desenhar_circulo(x, y, raio, corPreenchimento, corContorno) {
  ctx.beginPath();
  ctx.arc(x, y, raio, 0, Math.PI * 2);
  ctx.fillStyle = corPreenchimento;
  ctx.fill();
  ctx.strokeStyle = corContorno;
  ctx.stroke();
}





// Círculo central (cyan com contorno azul)
desenhar_circulo(150, 120, 10, "cyan", "blue");

// Círculo esquerdo (amarelo com contorno verde)
desenhar_circulo(80, 210, 10, "yellow", "green");

// Círculo direito (amarelo com contorno verde)
desenhar_circulo(220, 210, 10, "yellow", "green");



// Arcos verdes
desenhar_arco(150, 150, 30, Math.PI, 0, "green"); // arco pequeno
desenhar_arco(150, 150, 50, Math.PI, 0, "green"); // arco grande
desenhar_arco(150, 300, 50, Math.PI, Math.PI * 2, "green"); // arco inferior (descido)

// Texto "Canvas"
escrever("Canvas", 120, 80);

