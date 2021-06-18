import { Player__from_SERVER_msg } from "./Player__from_SERVER_msg.js";





export function GameEntity__from_SERVER_msg(p__GameEntity__SERVER_msg)
{
  let l__GameEntity;

  if (p__GameEntity__SERVER_msg.type == "Player")
  {
    l__GameEntity = Player__from_SERVER_msg(
      p__GameEntity__SERVER_msg,
    );
  }
  else
  {
    throw (new TypeError());
  }

  return (l__GameEntity);
}
