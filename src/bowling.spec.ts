import { Bowling } from './bowling'

describe("Bowling", () => {

  let bowling: Bowling;

  beforeEach(() => {
    bowling = new Bowling();
  });

  let addThrow = (pins: number, times: number) => {
    for (let i = 0; i < times; ++i) {
        bowling.addThrow(pins);
    }
  };

  it("zero pin falls, all gutters", () => {
    let numberOfTurns = 20;
    addThrow(0, 20);
    expect(bowling.getScore()).toBe(0);
  })
  it("three pins fall at each turn", () => {
    addThrow(3, 20);
    expect(bowling.getScore()).toBe(60);
  })
})
