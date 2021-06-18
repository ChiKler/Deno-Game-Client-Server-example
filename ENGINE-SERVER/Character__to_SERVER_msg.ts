// @ts-ignore
import { Character, Character__Skin } from "./Character.ts";

// @ts-ignore
import { GameObject__HitBox } from "./GameObject__HitBox.ts";

// @ts-ignore
import { Stat__SERVER_msg, Stat__to_SERVER_msg } from "./Stat__to_SERVER_msg.ts";





export interface Character__SERVER_msg
{
  type : string;
  args :
  {
    GameObject__Args :
    {
      Pos : { X : number; Y : number; R : number };
      
      HitBox : GameObject__HitBox;      

      Stat_MovementSpeed : Stat__SERVER_msg;
      Stat_SteeringSpeed : Stat__SERVER_msg;

      isMovementImpaired : boolean;
      isSteeringImpaired : boolean;
    };
    Character__Args :
    {
      Character__Skin : Character__Skin;
    };
  };
}


export function Character__to_SERVER_msg(p__Character : Character) : Character__SERVER_msg
{
  return ({
    type: "Character",
    args: {
      GameObject__Args: {
        // @ts-ignore
        Pos: p__Character.Pos,

        // @ts-ignore
        HitBox: p__Character.HitBox,

        // @ts-ignore
        Stat_MovementSpeed: Stat__to_SERVER_msg(p__Character.m__Stat_MovementSpeed),
        // @ts-ignore
        Stat_SteeringSpeed: Stat__to_SERVER_msg(p__Character.m__Stat_SteeringSpeed),

        // @ts-ignore
        isMovementImpaired: p__Character.isMovementImpaired,
        // @ts-ignore
        isSteeringImpaired: p__Character.isSteeringImpaired,
      },
      Character__Args: {
        Character__Skin: p__Character.m__Character__Skin,
      },
    },
  });
}