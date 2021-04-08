// @ts-ignore
import { Character, Character_Skin } from "./Character.ts";
// @ts-ignore
import { GameEntity } from "./GameEntity.ts";
// @ts-ignore
import { GameObject } from "./GameObject.ts";
// @ts-ignore
import { Player } from "./Player.ts";

export interface SERVER_msg__Character {
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
): SERVER_msg__Character {
  let l__SERVER_msg__Character: SERVER_msg__Character;

  l__SERVER_msg__Character = {
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

  return (l__SERVER_msg__Character);
}

export type SERVER_msg__GameObject = SERVER_msg__Character;

export function from_SERVER_obj_to_SERVER_msg__GameObject(
  p__GameObject: GameObject,
): SERVER_msg__GameObject {
  let l__SERVER_msg__GameObject: SERVER_msg__GameObject;

  if (p__GameObject instanceof Character) {
    l__SERVER_msg__GameObject = from_SERVER_obj_to_SERVER_msg__Character(
      p__GameObject,
    );
  } else {
    throw new TypeError();
  }

  return (l__SERVER_msg__GameObject);
}

export interface SERVER_msg__Player {
  type: string;
  args: {
    eeID: number;
    GameObject: SERVER_msg__GameObject;
  };
}

export function from_SERVER_obj_to_SERVER_msg__Player(
  p__Player: Player,
): SERVER_msg__Player {
  let l__SERVER_msg__Player: SERVER_msg__Player;

  l__SERVER_msg__Player = {
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

  return (l__SERVER_msg__Player);
}

export type SERVER_msg__GameEntity = SERVER_msg__Player;

export function from_SERVER_obj_to_SERVER_msg__GameEntity(
  p__GameEntity: GameEntity,
): SERVER_msg__GameEntity {
  let l__SERVER_msg__GameEntity: SERVER_msg__GameEntity;

  if (p__GameEntity instanceof Player) {
    l__SERVER_msg__GameEntity = from_SERVER_obj_to_SERVER_msg__Player(
      p__GameEntity,
    );
  } else {
    throw new TypeError();
  }

  return (l__SERVER_msg__GameEntity);
}
