import { Character } from "./Character.js";

import { Stat__from_SERVER_msg } from "./Stat__from_SERVER_msg.js";





export function Character__from_SERVER_msg(p__Character__SERVER_msg)
{
  return (new Character(
    {
      Pos: p__Character__SERVER_msg.args.GameObject__Args.Pos,
      
      HitBox: p__Character__SERVER_msg.args.GameObject__Args.HitBox,
      
      Stat_MovementSpeed: Stat__from_SERVER_msg(
        p__Character__SERVER_msg.args.GameObject__Args.Stat_MovementSpeed,
      ),
      Stat_SteeringSpeed: Stat__from_SERVER_msg(
        p__Character__SERVER_msg.args.GameObject__Args.Stat_SteeringSpeed,
      ),
      
      isMovementImpaired:
        p__Character__SERVER_msg.args.GameObject__Args.isMovementImpaired,
      isSteeringImpaired:
        p__Character__SERVER_msg.args.GameObject__Args.isSteeringImpaired,
    },
    p__Character__SERVER_msg.args.Character__Args,
  ));
}