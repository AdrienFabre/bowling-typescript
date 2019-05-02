import { Bowling } from './bowling'

describe("Bowling", () => {
  it("zero pin falls, all gutters", () => {
    let bowling = new Bowling();
    let numberOfTurns = 20;
    for (let i = 0; i < numberOfTurns; ++i) {
      bowling.addThrow(0);
    }
    expect(bowling.getScore()).toBe(0);
  })
})
