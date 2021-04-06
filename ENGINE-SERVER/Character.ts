// @ts-ignore
import { GameObject } from "./GameObject.ts";

export type Character_Skin = "Red" | "Green" | "Blue";

export class Character extends GameObject {
  readonly m__Character_Skin: Character_Skin;

  constructor(
    posX: number,
    posY: number,
    posR: number,
    p__Character_Skin: Character_Skin,
  ) {
    super(posX, posY, posR);

    this.m__Character_Skin = p__Character_Skin;
  }
}
