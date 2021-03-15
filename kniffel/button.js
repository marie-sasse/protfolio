export default class Button {
  constructor(x, y, width, height, title) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.title = title;
    this.throw = 3;
    this.active = true;
  }

  display() {
    push();
    fill(255, 96, 96);
    rect(this.x, this.y, this.width, this.height);
    textSize(18);
    fill(47, 79, 79);
    textAlign(CENTER);
    text(this.title, this.x, this.y + this.height / 2 + 4, this.width);
    pop();
  }

  hitTest(x, y) {
    if (
      x > this.x &&
      x < this.x + this.width &&
      y > this.y &&
      y < this.y + this.height
    ) {
      return true;
    } else {
      return false;
    }
  }

  clicked() {}

  mouseClicked() {
    if (this.hitTest(mouseX, mouseY)) {
      this.clicked();
      this.throw -= 1;
      return true;
    }
    return false;
  }
}
