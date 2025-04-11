const canvas = document.getElementById("meuCanvas");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = 'assets/imagem.png'; // Caminho da imagem

let pos = { x: canvas.width / 2, y: canvas.height / 2 };
const imgSize = 50;

img.onload = () => {
  draw();
};

canvas.addEventListener("mousemove", (e) => {
  const rect = canvas.getBoundingClientRect();
  let x = e.clientX - rect.left - imgSize / 2;
  let y = e.clientY - rect.top - imgSize / 2;

  // Impede a imagem de sair do canvas
  x = Math.max(0, Math.min(x, canvas.width - imgSize));
  y = Math.max(0, Math.min(y, canvas.height - imgSize));

  pos = { x, y };
  draw();
});

// Caso o mouse saia do canvas, mantém a imagem visível
canvas.addEventListener("mouseleave", () => {
  draw();
});

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, pos.x, pos.y, imgSize, imgSize);
}
