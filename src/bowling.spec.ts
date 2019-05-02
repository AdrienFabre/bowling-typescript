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
  });
  it("three pins fall at each turn", () => {
    addThrow(3, 20);
    expect(bowling.getScore()).toBe(60);
  });
  it("one spare and all gutters", () => {
    addThrow(5, 2);
    addThrow(0, 18);
    expect(bowling.getScore()).toBe(10);
  });
  it("one spare and all threes", () => {
    addThrow(5, 2);
    addThrow(3, 18);
    expect(bowling.getScore()).toBe(67);
  });
  it("one strike and all gutters", () => {
    addThrow(10, 1);
    addThrow(0, 18);
    expect(bowling.getScore()).toBe(10);
  });
  it("one strike and all threes", () => {
    addThrow(10, 1);
    addThrow(3, 18);
    expect(bowling.getScore()).toBe(70);
  });
  it("perfect game, twelve strikes", () => {
    addThrow(10, 12);
    expect(bowling.getScore()).toBe(300);
  });
});