// @ts-ignore
import { GameObject } from "./GameObject.js";
// @ts-ignore
import { GameObject__HitBox } from "./GameObject__HitBox.js";
// @ts-ignore
import { Rectangle } from "./Shape.js";
// @ts-ignore
import { Stat } from "./Stat.js";

export class Character extends GameObject {
  m__Character_Skin;

  constructor(p__GameObject__Args, p__Character__Args) {
    p__Character__Args.Character_Skin = p__Character__Args.Character_Skin ||
      "Blue";

    p__GameObject__Args.HitBox =
      new GameObject__HitBox([new Rectangle({ X: 0, Y: 0, R: 0 }, { X: 32, Y: 32 })])

    p__GameObject__Args.Stat_MovementSpeed =
      p__GameObject__Args.Stat_MovementSpeed ||
        new Stat({ value__base: 300 });

    p__GameObject__Args.Stat_SteeringSpeed =
      p__GameObject__Args.Stat_SteeringSpeed ||
        new Stat({ value__base: 360 });

    p__GameObject__Args.sprite =
      `/API/GameObject_Character_${p__Character__Args.Character_Skin}.png`;

    super(p__GameObject__Args);

    this.m__Character_Skin = p__Character__Args.Character_Skin;
  }
}
