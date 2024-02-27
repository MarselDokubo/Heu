export default class Rectangle {
  constructor(pos) {
    this.pos = pos;
    this.size = this.pos;
    this.length = 0;
    this.breadth = 0;
  }
  draw(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(this.pos.x, this.pos.y, this.length, this.breadth);
    ctx.stroke();
    ctx.restore();
  }

  setSize(size) {
    this.size = size;
    this.length = Math.abs(this.size.x - this.pos.x);
    this.breadth = Math.abs(this.size.y - this.pos.y);
  }
}
