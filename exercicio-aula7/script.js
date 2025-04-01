let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')


ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'blue';
ctx.fillRect(350,0,50,50);
ctx.strokeRect(350,0,50,50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'green';
ctx.strokeStyle = 'green';
ctx.fillRect(350,350,50,50);
ctx.strokeRect(350,350,50,50);
ctx.closePath();
ctx.beginPath();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'yellow';
ctx.fillRect(0,350,50,50);
ctx.strokeRect(0,350,50,50);
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'red';
ctx.strokeStyle = 'red';
ctx.fillRect(0,0,50,50);
ctx.strokeRect(0,0,50,50);
ctx.closePath();







ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(100,150,20,0,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(300,150,20,0,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'red'
ctx.moveTo(400,400);
ctx.lineTo(10,10);
ctx.fill();
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'blue'
ctx.moveTo(0,400);
ctx.lineTo(400,10);
ctx.fill();
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green'
ctx.moveTo(10,200);
ctx.lineTo(400,200);
ctx.fill();
ctx.stroke();
ctx.closePath();



ctx.beginPath();
ctx.lineWidth = 2;

ctx.strokeStyle = 'green';
ctx.arc(200,200,50,1*Math.PI,2*Math.PI);

ctx.stroke();
ctx.closePath();