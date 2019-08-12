import Game from './index';

let game;

describe('Game', () => {
  beforeEach(() => {
    game = new Game();
  });

  it('returns score 1 if roll 1', () => {
    game.roll(1);
    expect(game.getScore()).toEqual(1);
  });

  it('returns score 5 if roll 5', () => {
    game.roll(5);
    expect(game.getScore()).toEqual(5);
  });

  it('returns score 16 if roll a spare and 3', () => {
    rollSpare();
    game.roll(3);

    expect(game.getScore()).toEqual(16);
  });

  it('returns score 18 if roll 1 1 and a spare and 3', () => {
    game.roll(1);
    game.roll(1);
    rollSpare();
    game.roll(3);

    expect(game.getScore()).toEqual(18);
  });

  it('returns score 14 if roll a strike and 1 1', () => {
    rollStrike(1);
    game.roll(1);
    game.roll(1);

    expect(game.getScore()).toEqual(14);
  });

  it('returns score 60 if roll 3 strikes', () => {
    rollStrike(3);

    expect(game.getScore()).toEqual(60);
  });

  it('returns score 300 if roll perfect game', () => {
    rollStrike(12);
    expect(game.getScore()).toEqual(300);
  });
});

function rollSpare() {
  game.roll(5);
  game.roll(5);
};

function rollStrike(n) {
  for (let i = 0; i < n; i++) {
    game.roll(10);
  };
}