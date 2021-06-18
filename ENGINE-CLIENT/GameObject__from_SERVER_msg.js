import { Character__from_SERVER_msg } from "./Character__from_SERVER_msg.js";





export function GameObject__from_SERVER_msg(p__GameObject__SERVER_msg)
{
  let l__GameObject;

  if (p__GameObject__SERVER_msg.type == "Character")
  {
    l__GameObject = Character__from_SERVER_msg(
      p__GameObject__SERVER_msg,
    );
  }
  else
  {
    throw (new TypeError());
  }

  return (l__GameObject);
}