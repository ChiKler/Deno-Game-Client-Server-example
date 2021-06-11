// @ts-ignore
import { GameObject, GameObject__Args } from "./GameObject.ts";
// @ts-ignore
import { GameObject__HitBox } from "./GameObject__HitBox.ts";
// @ts-ignore
import { Rectangle } from "./Shape.ts";
// @ts-ignore
import { Stat } from "./Stat.ts";

export type Character_Skin = "Red" | "Green" | "Blue";

export interface Character__Args {
  Character_Skin?: Character_Skin;
}

export class Character extends GameObject {
  readonly m__Character_Skin: Character_Skin;

  constructor(
    p__GameObject__Args: GameObject__Args,
    p__Character__Args: Character__Args,
  ) {
    p__GameObject__Args.HitBox =
      new GameObject__HitBox([new Rectangle({ X: 0, Y: 0, R: 0 }, { X: 32, Y: 32 })])

    p__GameObject__Args.Stat_MovementSpeed =
      p__GameObject__Args.Stat_MovementSpeed ||
        new Stat({ value__base: 300 });

    p__GameObject__Args.Stat_SteeringSpeed =
      p__GameObject__Args.Stat_SteeringSpeed ||
        new Stat({ value__base: 360 });

    super(p__GameObject__Args);

    this.m__Character_Skin = p__Character__Args.Character_Skin || "Blue";
  }
}
