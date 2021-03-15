export default class Player {
  constructor(name) {
    this.name = name;
    this.score = {
      eins: -1,
      zwei: -1,
      drei: -1,
      vier: -1,
      fünf: -1,
      sechs: -1,
      total: 0,
    };
  }

  total() {
    this.score.total = 0;
    for (let i in this.score) {
      if (this.score[i] > 0 && i != "total") {
        this.score.total += this.score[i];
      }
    }
    // das totale wird zusammengerechnet

    //Hierbei hat mir Leander ein bisschen geholfen
  }
}
