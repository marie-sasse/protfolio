import Button from "./button.js";

export default class RollAllButton extends Button {
  constructor(x, y, width, height, title, dice) {
    super(x, y, width, height);
    this.title = title;
    this.dice = dice;
  }

  display() {
    fill(238, 180, 180);
    rect(this.x, this.y, this.width, this.height, this.height / 4);
    fill(47, 79, 79);
    textSize(20);
    textAlign(CENTER);
    text(this.title, this.x + 2, this.y + 10 + this.height / 2, this.width);
  }

  clicked() {
    for (let i in this.dice) {
      this.dice[i].roll();
    }
  }
}
