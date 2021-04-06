// @ts-ignore
import { Character, Character_Skin } from "./Character.ts";
// @ts-ignore
import { GameEntity } from "./GameEntity.ts";
// @ts-ignore
import { GameObject } from "./GameObject.ts";
// @ts-ignore
import { Player } from "./Player.ts";

export interface Character__SERVER_msg {
  type: string;
  args: {
    posX: number;
    posY: number;
    posR: number;

    Character_Skin: Character_Skin;
  };
}

export function from_SERVER_obj_to_SERVER_msg__Character(
  p__Character: Character,
): Character__SERVER_msg {
  let l__Character__SERVER_msg: Character__SERVER_msg;

  l__Character__SERVER_msg = {
    type: "Character",
    args: {
      // @ts-ignore
      posX: p__Character.posX,
      // @ts-ignore
      posY: p__Character.posY,
      // @ts-ignore
      posR: p__Character.posR,

      Character_Skin: p__Character.m__Character_Skin,
    },
  };

  return (l__Character__SERVER_msg);
}

export type GameObject__SERVER_msg = Character__SERVER_msg;

export function from_SERVER_obj_to_SERVER_msg__GameObject(
  p__GameObject: GameObject,
): GameObject__SERVER_msg {
  let l__GameObject__SERVER_msg: GameObject__SERVER_msg;

  if (p__GameObject instanceof Character) {
    l__GameObject__SERVER_msg = from_SERVER_obj_to_SERVER_msg__Character(
      p__GameObject,
    );
  } else {
    throw new TypeError();
  }

  return (l__GameObject__SERVER_msg);
}

export interface Player__SERVER_msg {
  type: string;
  args: {
    eeID: number;
    GameObject: GameObject__SERVER_msg;
  };
}

export function from_SERVER_obj_to_SERVER_msg__Player(
  p__Player: Player,
): Player__SERVER_msg {
  let l__Player__SERVER_msg: Player__SERVER_msg;

  l__Player__SERVER_msg = {
    type: "Player",
    args: {
      // @ts-ignore
      eeID: p__Player.eeID,
      GameObject: from_SERVER_obj_to_SERVER_msg__GameObject(
        // @ts-ignore
        p__Player.m__GameObject,
      ),
    },
  };

  return (l__Player__SERVER_msg);
}

export type GameEntity__SERVER_msg = Player__SERVER_msg;

export function from_SERVER_obj_to_SERVER_msg__GameEntity(
  p__GameEntity: GameEntity,
): GameEntity__SERVER_msg {
  let l__GameEntity__SERVER_msg: GameEntity__SERVER_msg;

  if (p__GameEntity instanceof Player) {
    l__GameEntity__SERVER_msg = from_SERVER_obj_to_SERVER_msg__Player(
      p__GameEntity,
    );
  } else {
    throw new TypeError();
  }

  return (l__GameEntity__SERVER_msg);
}
