export function drawGrid(ctx) {
  ctx.save();
  ctx.strokeStyle = "lightgray";
  ctx.lineWidth = 0.5;
  let spacing = 10;

  for (let i = spacing + 0.5; i < canvas.width; i += spacing) {
    ctx.moveTo(i, 0);
    ctx.lineTo(i, canvas.height);
    ctx.stroke();
  }
  for (let i = spacing + 0.5; i < canvas.height; i += spacing) {
    ctx.moveTo(0, i);
    ctx.lineTo(canvas.width, i);
    ctx.stroke();
  }

  ctx.restore();
}

function setMousePosition(e) {
  mousePos = {};
}
