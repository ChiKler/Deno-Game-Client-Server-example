// @ts-ignore
import { GameEntity } from "./GameEntity.ts";
// @ts-ignore
import { GameObject } from "./GameObject.ts";

// @ts-ignore
import { WebSocket } from "https://deno.land/std@0.92.0/ws/mod.ts";

export class Player extends GameEntity {
  #ws_player: WebSocket;

  get ws_player(): WebSocket {
    return this.#ws_player;
  }
  /**
   * 
   * USE ONLY FROM WITHIN THE "User" CLASS.
   * 
  **/
  set ws_player(ws_player: WebSocket) {
    this.#ws_player = ws_player;
  }

  constructor(eeID: number, p__GameObject: GameObject, ws_player: WebSocket) {
    super(eeID, p__GameObject);

    this.#ws_player = ws_player;
  }
}
