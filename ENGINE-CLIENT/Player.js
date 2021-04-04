import { GameEntity } from "./mod.js";

import { WS_msg__recv, WS_msg__send } from "../CLIENT/scripts/websockets.js";

export var WS_msg_Player_ID;
(function (WS_msg_Player_ID) {
  WS_msg_Player_ID[WS_msg_Player_ID["Connection"] = 0] = "Connection";
  WS_msg_Player_ID[WS_msg_Player_ID["Sighting"] = 1] = "Sighting";
  WS_msg_Player_ID[WS_msg_Player_ID["Vanishing"] = 2] = "Vanishing";
  WS_msg_Player_ID[WS_msg_Player_ID["Takedown"] = 3] = "Takedown";
})(WS_msg_Player_ID || (WS_msg_Player_ID = {}));

export class Player extends GameEntity {
  constructor(eeID) {
    super(eeID);
  }

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
