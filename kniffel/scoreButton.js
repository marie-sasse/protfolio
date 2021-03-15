import Button from "./button.js";

export default class ScoreButton extends Button {
  constructor(x, y, width, heigt, title, id, dice, player) {
    super(x, y, width, heigt, title);
    this.id = id;
    this.dice = dice;
    this.player = player;
  }

  clicked() {
    let result = this.calculateEyes();
    this.player.score[this.id] = result[this.getIndexOfId(this.id) - 1];
  }
  //allgemeine augen werden berechnet
  calculateEyes() {
    let eyes = [0, 0, 0, 0, 0, 0];
    for (let i in this.dice) {
      let value = this.dice[i].value;
      eyes[value - 1] += value;
    }
    return eyes;
  }
  getIndexOfId(id) {
    if (id === "eins") {
      return 1;
    }
    if (id === "zwei") {
      return 2;
    }
    if (id === "drei") {
      return 3;
    }
    if (id === "vier") {
      return 4;
    }
    if (id === "fünf") {
      return 5;
    }
    if (id === "sechs") {
      return 6;
    }
  }
}
