import Dice from "./dice.js";
import RollAllButton from "./rollAllButton.js";
import GameBlock from "./gameBlock.js";
import Player from "./player.js";
import ScoreButton from "./scoreButton.js";

let dice = [];
let throws = 2;
let status = "roll";
let i = 0;
let players = [new Player("P1"), new Player("P2"), new Player("P3")];
let currentPlayer = 0;
let scoreButtons = [];
let mode = 0;

for (let i = 0; i < 5; i++) {
  let d = new Dice(30 + i * 100, 100, 80, 80, color(205, 85, 85));
  dice.push(d);
}

let gameBlock = new GameBlock(50, 280, 280, 270, players, currentPlayer);
let rollAll = new RollAllButton(20, 20, 200, 40, "roll", dice);
let next = new RollAllButton(400, 20, 110, 40, "next player", dice);
let start = new RollAllButton(275, 300, 100, 100, "start");

function mouseClicked() {
  if (
    mode === 0 &&
    mouseX >= 275 &&
    mouseX <= 375 &&
    mouseY >= 300 &&
    mouseY <= 400
  ) {
    mode = 1;
  }

  for (i = 0; i < 5; i++) {
    dice[i].mouseClicked();
  }
  if (
    throws > 0 &&
    mouseX >= 20 &&
    mouseX <= 220 &&
    mouseY >= 20 &&
    mouseY <= 60
  ) {
    rollAll.mouseClicked();
    throws--;
    calculateEyes();
  }

  if (throws <= 0 && status != "choose") {
    let n = 0;
    for (let i in players[currentPlayer].score) {
      if (players[currentPlayer].score[i] === -1) {
        scoreButtons.push(
          new ScoreButton(
            100 + 50 * n,
            235,
            20,
            30,
            n + 1,
            i,
            dice,
            players[currentPlayer]
          )
        );
      }
      n++;
    }
    status = "choose";
    rollAll.active = false;
  }

  if (status === "choose") {
    for (let i in scoreButtons) {
      if (scoreButtons[i].mouseClicked() === true) {
        scoreButtons = [];
        break;
      }
    }
  }

  if (mouseX >= 400 && mouseX <= 510 && mouseY >= 20 && mouseY <= 60) {
    status = "roll";
    throws = 2;
    rollAll.active = true;
    currentPlayer++;

    if (currentPlayer >= players.length) {
      currentPlayer = 0;
    }
    for (let index in dice) {
      dice[index].active = true;
    }
    rollAll.clicked();
  }
}

window.mouseClicked = mouseClicked;

function draw() {
  createCanvas(650, 600);

  if (mode == 0) {
    background(202, 225, 255);
    fill(255);
    textSize(40);
    text("KNIFFEL", 250, 50, 100, 100);
    textSize(20);
    text("Do you like to start the game?", 50, 200, 300, 100);
    textSize(40);
    text("🦄", 70, 100, 300, 100);
    text("🐘", 95, 270, 300, 100);
    text("🦕", 150, 525, 300, 100);
    text("🐰", 520, 325, 300, 100);
    text("🦖", 500, 20, 300, 100);
    text("🦝", 400, 520, 300, 100);
    start.display();
  }
  if (mode == 1) {
    gameBlock.currentPlayer = currentPlayer;
    background(255, 240, 210);
    if (status === "roll") {
      rollAll.display();
      textSize(30);
      text("🦕", 250, 290, 400, 50);
      text("🐰", 300, 500, 400, 50);
      text("🦄", 400, 400, 400, 50);
    } else if (status === "choose") {
      for (let i in scoreButtons) {
        scoreButtons[i].display();
      }
      fill(205, 85, 85);
      text("choose the field would you like to enter:", 5, 200, 400, 50);
      textSize(30);
      text("🦄", 460, 290, 400, 50);
      text("🦝", 400, 500, 400, 50);
      text("🐘", 570, 400, 400, 50);
    }

    for (i = 0; i < 5; i++) {
      dice[i].display();
    }

    next.display();
    gameBlock.display();

    textSize(12);
    fill(205, 85, 85);
    text("throws remaning:" + throws, 250, 30, 110);
  }
}

window.draw = draw;

//als ich versucht habe es so einzubauen, dass man direkt auswählen kann, wo man eintragen will hat es mir alles zerhauen. Ich finde meine Lösung auch gut, da man die Würfel ja auch für die nächsten Würfe "einfrieren kann"
