export default class Circle {
  constructor(pos) {
    this.pos = pos;
    this.size = this.pos;
    this.radius = 0;
  }
  draw(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.restore();
  }

  setSize(size) {
    this.size = size;
    this.radius = Math.abs(this.size.x - this.pos.x);
  }
}
