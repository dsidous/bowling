class Game {
  constructor() {
    this.rolls = [];
  }

  roll = (pins) => {
    this.rolls.push(pins);

    if (pins === 10) {
      this.rolls.push(0);
    }
  };

  isSpare = rollIndex => (this.getRollScore(rollIndex) + this.getRollScore(rollIndex + 1) === 10);

  isSpin = rollIndex => (this.getRollScore(rollIndex) === 10);

  getRollScore = rollIndex => (this.rolls[rollIndex] || 0);

  getSpinScore = rollIndex => (10 + this.getRollScore(rollIndex + 2) + this.getRollScore(rollIndex + 3));

  getSpareScore = rollIndex => (10 + this.getRollScore(rollIndex + 2));

  getFrameScore = (rollIndex) => {
    if (this.isSpin(rollIndex)) {
      return this.getSpinScore(rollIndex);
    }

    if (this.isSpare(rollIndex)) {
      return this.getSpareScore(rollIndex);
    }

    return this.getRollScore(rollIndex) + this.getRollScore(rollIndex + 1);
  };

  getScore = () => {
    let score = 0;
    let rollIndex = 0;

    for (let frameIndex = 0; frameIndex < 10; frameIndex++) {
      score += this.getFrameScore(rollIndex);
      rollIndex += 2;
    }

    return score;
  }

}

export default Game;