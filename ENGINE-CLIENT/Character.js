import { GameObject } from "./GameObject.js";
import { GameObject__HitBox } from "./GameObject__HitBox.js";

import { Rectangle } from "./Shape.js";

import { Stat } from "./Stat.js";





export class Character extends GameObject {
  m__Character__Skin;

  constructor(p__GameObject__Args, p__Character__Args) {
    p__Character__Args.Character__Skin =
      p__Character__Args.Character__Skin ||
        "Blue";

    p__GameObject__Args.HitBox = new GameObject__HitBox(
      [new Rectangle({ X: 0, Y: 0, R: 0 }, { X: 32, Y: 32 })]
    );

    p__GameObject__Args.Stat_MovementSpeed =
      p__GameObject__Args.Stat_MovementSpeed ||
        new Stat({ kind: "MovementSpeed", base: 300 });

    p__GameObject__Args.Stat_SteeringSpeed =
      p__GameObject__Args.Stat_SteeringSpeed ||
        new Stat({ kind: "SteeringSpeed", base: 360 });

    p__GameObject__Args.sprite =
      `/API/GameObject_Character_${p__Character__Args.Character__Skin}.png`;

    super(p__GameObject__Args);

    this.m__Character__Skin = p__Character__Args.Character__Skin;
  }
}
