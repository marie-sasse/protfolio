import Button from "./button.js";

export default class Dice extends Button {
  constructor(x, y, height, width, cubecolor) {
    super(x, y, 60, 60);
    this.x = x;
    this.y = y;
    this.cubecolor = cubecolor;
    this.height = height;
    this.width = width;
    this.value = this.getRandomValue();
    this.active = true;
  }
  getRandomValue() {
    return ceil(random(0, 6));
  }

  roll() {
    if (this.active) {
      this.value = this.getRandomValue();
      return this.value;
    }
  }

  display() {
    fill(this.cubecolor);
    rect(this.x, this.y, this.width, this.height);

    //cube points
    if (this.active) {
      fill(255, 255, 255);
    } else {
      fill(0, 0, 0);
    }
    if (this.value === 1) {
      ellipse(this.x + 40, this.y + 40, this.width / 5, this.height / 5);
    } else if (this.value === 2) {
      ellipse(this.x + 20, this.y + 20, this.width / 5, this.height / 5);
      ellipse(this.x + 60, this.y + 60, this.width / 5, this.height / 5);
    } else if (this.value === 3) {
      ellipse(this.x + 18, this.y + 18, this.width / 5, this.height / 5);
      ellipse(this.x + 41, this.y + 40, this.width / 5, this.height / 5);
      ellipse(this.x + 63, this.y + 63, this.width / 5, this.height / 5);
    } else if (this.value === 4) {
      ellipse(this.x + 20, this.y + 20, this.width / 5, this.height / 5);
      ellipse(this.x + 60, this.y + 20, this.width / 5, this.height / 5);
      ellipse(this.x + 20, this.y + 60, this.width / 5, this.height / 5);
      ellipse(this.x + 60, this.y + 60, this.width / 5, this.height / 5);
    } else if (this.value === 5) {
      ellipse(this.x + 18, this.y + 18, this.width / 5, this.height / 5);
      ellipse(this.x + 63, this.y + 18, this.width / 5, this.height / 5);
      ellipse(this.x + 18, this.y + 63, this.width / 5, this.height / 5);
      ellipse(this.x + 63, this.y + 63, this.width / 5, this.height / 5);
      ellipse(this.x + 41, this.y + 41, this.width / 5, this.height / 5);
    } else if (this.value === 6) {
      ellipse(this.x + 20, this.y + 18, this.width / 5, this.height / 5);
      ellipse(this.x + 20, this.y + 41, this.width / 5, this.height / 5);
      ellipse(this.x + 20, this.y + 63, this.width / 5, this.height / 5);
      ellipse(this.x + 60, this.y + 18, this.width / 5, this.height / 5);
      ellipse(this.x + 60, this.y + 41, this.width / 5, this.height / 5);
      ellipse(this.x + 60, this.y + 63, this.width / 5, this.height / 5);
    }
  }

  clicked() {
    if (this.active) {
      this.active = false;
    } else {
      this.active = true;
    }
  }
}
