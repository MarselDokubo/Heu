export class PaintCanvas {
  constructor(ctx) {
    this.ctx = ctx;
    this.snapshot = null;
    this.style = null;
  }

  getMousePos(x, y) {
    let bbox = this.ctx.canvas.getBoundingClientRect();
    return {
      x: x - bbox.left * (this.ctx.canvas.width / bbox.width),
      y: y - bbox.top * (this.ctx.canvas.height / bbox.height),
    };
  }

  setELementStyle({
    fillColor: fillStyle,
    strokeColor: strokeStyle,
    strokeWidth: lineWidth,
    opacity,
  }) {
    this.ctx.fillStyle = fillStyle || this.ctx.fillStyle;
    this.ctx.strokeStyle = strokeStyle || this.ctx.strokeStyle;
    this.ctx.lineWidth = lineWidth || this.ctx.lineWidth;
    this.ctx.opacity = opacity || this.ctx.opacity;
  }

  save() {
    this.snapshot = this.ctx.getImageData(
      0,
      0,
      this.ctx.canvas.width,
      this.ctx.canvas.height
    );
  }
  restore() {
    this.ctx.putImageData(this.snapshot, 0, 0);
  }

  draw(shape) {
    shape.draw(this.ctx);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }
}
