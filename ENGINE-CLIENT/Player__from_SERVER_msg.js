import { GameObject__from_SERVER_msg } from "./GameObject__from_SERVER_msg.js";

import { Player } from "./Player.js";





export function Player__from_SERVER_msg(p__Player__SERVER_msg)
{
  return (new Player(
    {
      eeID: p__Player__SERVER_msg.args.GameEntity__Args.eeID,
      GameObject: GameObject__from_SERVER_msg(
        p__Player__SERVER_msg.args.GameEntity__Args.GameObject,
      ),
    },
    {},
  ));
}