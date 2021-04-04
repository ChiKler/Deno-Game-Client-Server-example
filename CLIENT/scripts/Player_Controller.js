import { Player, WS_msg_Player_ID } from "../../ENGINE-CLIENT/mod.js";

import { WS_msg__recv, WS_msg__send } from "./mod.js";

export class Player_Controller {
  static async handle__WS_msg_Player__Connection__recv(
    g__ws_player,
  ) {
    WS_msg__recv(
      g__ws_player,
      "WS_msg_Player",
      WS_msg_Player_ID.Connection,
      (body) => {
        console.log(body);
      },
    );
  }

  static async handle__WS_msg_Player__Sighting__recv(
    g__ws_player,
  ) {
    WS_msg__recv(
      g__ws_player,
      "WS_msg_Player",
      WS_msg_Player_ID.Sighting,
      (body) => {
        console.log(body);
      },
    );
  }

  static async handle__WS_msg_Player__Vanishing__recv(
    g__ws_player,
  ) {
    WS_msg__recv(
      g__ws_player,
      "WS_msg_Player",
      WS_msg_Player_ID.Vanishing,
      (body) => {
        console.log(body);
      },
    );
  }

  static async handle__WS_msg_Player__Takedown__recv(
    g__ws_player,
  ) {
    WS_msg__recv(
      g__ws_player,
      "WS_msg_Player",
      WS_msg_Player_ID.Takedown,
      (body) => {
        console.log(body);
      },
    );
  }
}
