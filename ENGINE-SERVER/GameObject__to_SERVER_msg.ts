// @ts-ignore
import { Character } from "./Character.ts";

// @ts-ignore
import { Character__SERVER_msg, Character__to_SERVER_msg } from "./Character__to_SERVER_msg.ts";

// @ts-ignore
import { GameObject } from "./GameObject.ts";





export type GameObject__SERVER_msg =
(
  | Character__SERVER_msg
);


export function GameObject__to_SERVER_msg(p__GameObject : GameObject) : GameObject__SERVER_msg
{
  let l__GameObject__SERVER_msg : GameObject__SERVER_msg;

  if (p__GameObject instanceof Character)
  {
    l__GameObject__SERVER_msg = Character__to_SERVER_msg(p__GameObject);
  }
  else
  {
    throw (new TypeError());
  }

  return (l__GameObject__SERVER_msg);
}