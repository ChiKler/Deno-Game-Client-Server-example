// @ts-ignore
import { Player } from "./Player.ts";

// @ts-ignore
import { Player__SERVER_msg, Player__to_SERVER_msg } from "./Player__to_SERVER_msg.ts";

// @ts-ignore
import { GameEntity } from "./GameEntity.ts";





export type GameEntity__SERVER_msg =
(
  | Player__SERVER_msg
);


export function GameEntity__to_SERVER_msg(p__GameEntity : GameEntity) : GameEntity__SERVER_msg
{
  let l__GameEntity__SERVER_msg : GameEntity__SERVER_msg;

  if (p__GameEntity instanceof Player)
  {
    l__GameEntity__SERVER_msg = Player__to_SERVER_msg(p__GameEntity);
  }
  else
  {
    throw (new TypeError());
  }

  return (l__GameEntity__SERVER_msg);
}