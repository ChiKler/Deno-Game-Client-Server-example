export abstract class GameObject {
  posX: number;
  posY: number;
  posR: number;

  constructor(posX: number, posY: number, posR: number) {
    this.posX = posX;
    this.posY = posY;
    this.posR = posR;
  }
}
