export default class Line {
  constructor(pos) {
    this.pos = pos;
    this.size = this.pos;
  }

  draw(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(this.pos.x, this.pos.y);
    ctx.lineTo(this.size.x, this.size.y);
    ctx.stroke();
    ctx.restore();
  }

  setSize(size) {
    this.size = size;
  }
}
