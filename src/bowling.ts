export class Bowling {

  private score: number = 0;

  public addThrow(pins: number): void {
    this.score += pins;
  }

  public getScore(): number {
    return this.score;
  }
}