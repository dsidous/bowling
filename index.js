class Game {
  constructor() {
    this.rolls = [];
  }

  roll = (pins) => {
    this.rolls.push(pins);
  };

  isSpare = rollIndex => (this.getRollScore(rollIndex) + this.getRollScore(rollIndex + 1) === 10);

  isStrike = rollIndex => (this.getRollScore(rollIndex) === 10);

  getRollScore = rollIndex => (this.rolls[rollIndex] || 0);

  getStrikeScore = rollIndex => (10 + this.getRollScore(rollIndex + 1) + this.getRollScore(rollIndex + 2));

  getSpareScore = rollIndex => (10 + this.getRollScore(rollIndex + 2));

  getFrameScore = (rollIndex) => {
    if (this.isStrike(rollIndex)) {
      return this.getStrikeScore(rollIndex);
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
      rollIndex += this.isStrike(rollIndex) ? 1 : 2;
    }

    return score;
  }

}

export default Game;