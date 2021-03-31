import { Player, WS_msg_Player_ID } from "../../ENGINE/mod.js";

import { g__ws_game, g__ws_game__set } from "./main.js";

import { g__canvas__set } from "./canvas.js";

import { ws_msg_recv } from "./websockets.js";

function init() {
  g__canvas__set();

  g__ws_game__set();

  ws_msg_recv(
    g__ws_game,
    "WS_msg_Player",
    WS_msg_Player_ID.Connection,
    (body) => {
      // ...
    },
  );
  ws_msg_recv(
    g__ws_game,
    "WS_msg_Player",
    WS_msg_Player_ID.Sighting,
    (body) => {
      // ...
    },
  );
}

window.onload = init();
