// @ts-ignore
import { GameObject__SERVER_msg, GameObject__to_SERVER_msg } from "./GameObject__to_SERVER_msg.ts";

// @ts-ignore
import { Player } from "./Player.ts";





export interface Player__SERVER_msg
{
  type : string;
  args :
  {
    GameEntity__Args :
    {
      eeID : number;
      GameObject : GameObject__SERVER_msg;
    };
    Player__Args : {};
  };
}


export function Player__to_SERVER_msg(p__Player : Player) : Player__SERVER_msg
{
  return ({
    type: "Player",
    args: {
      GameEntity__Args: {
        // @ts-ignore
        eeID: p__Player.eeID,
        // @ts-ignore
        GameObject: GameObject__to_SERVER_msg(p__Player.m__GameObject),
      },
      Player__Args: {},
    },
  });
}