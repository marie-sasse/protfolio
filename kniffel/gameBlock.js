export default class GameBlock {
  constructor(x, y, width, height, players, currentPlayer) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.players = players;
    this.currentPlayer = currentPlayer;
  }

  display() {
    stroke(238, 180, 180);
    strokeWeight(3);
    fill(255, 255, 255);
    rect(this.x, this.y, this.width, this.height);
    fill(238, 180, 180);
    rect(this.x, this.y, this.width, this.height - 240);
    stroke(238, 180, 180);
    strokeWeight(3);
    line(this.x + 70, this.y + 2, this.x + 70, this.y + 270);
    line(this.x + 140, this.y + 2, this.x + 140, this.y + 270);
    line(this.x + 210, this.y + 2, this.x + 210, this.y + 270);
    line(this.x + 280, this.y + 2, this.x + 280, this.y + 270);
    line(this.x, this.y + 65, this.x + 280, this.y + 65);
    line(this.x, this.y + 100, this.x + 280, this.y + 100);
    line(this.x, this.y + 135, this.x + 280, this.y + 135);
    line(this.x, this.y + 170, this.x + 280, this.y + 170);
    line(this.x, this.y + 205, this.x + 280, this.y + 205);
    line(this.x, this.y + 240, this.x + 280, this.y + 240);

    for (let i = 0; i < this.players.length; i++) {
      if (this.currentPlayer === i) {
        fill(205, 85, 85);
      } else {
        fill(255);
      }
      noStroke();
      textSize(20);
      text(this.players[i].name, this.x + 100 + 70 * i, this.y + 25);
    }

    fill(47, 79, 79);
    text("1", this.x + 30, this.y + 55);
    text("2", this.x + 30, this.y + 90);
    text("3", this.x + 30, this.y + 125);
    text("4", this.x + 30, this.y + 160);
    text("5", this.x + 30, this.y + 195);
    text("6", this.x + 30, this.y + 230);
    push();
    textSize(15);
    text("TOTAL:", this.x + 35, this.y + 263);
    pop();

    for (let i = 0; i < this.players.length; i++) {
      let n = 0;
      this.players[i].total();
      for (let j in this.players[i].score) {
        if (this.players[i].score[j] === -1) {
          text("-", this.x + 100 + 70 * i, this.y + 55 + 35 * n);
        } else {
          text(
            this.players[i].score[j],
            this.x + 100 + 70 * i,
            this.y + 55 + 35 * n
          );
        }
        n++;
        //hier schreibt man das ergebnis rein wenn nichts drinne steht heißt es -1 und angezwigt wird -
        //
        //Hierbei hat mir Leander geholfen
      }
    }
  }
}
