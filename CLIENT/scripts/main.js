import {
  GameMap,
  GameMap_ID,
  Player,
  WS_msg_Player_ID,
} from "../../ENGINE-CLIENT/mod.js";

import { WS__make } from "./websockets.js";

import { WS_msg__recv, WS_msg__send } from "./websockets.js";

export const g__uuID = window.prompt("uuID", "Jane,John,Mary");

export const g__server_address = "localhost:3000";

export let g__ws_player;
function g__ws_player__set() {
  g__ws_player = WS__make("player");

  WS_msg__recv(
    g__ws_player,
    "WS_msg_Player",
    WS_msg_Player_ID.Connection,
    (body) => {
      console.log(body);
    },
  );
  WS_msg__recv(
    g__ws_player,
    "WS_msg_Player",
    WS_msg_Player_ID.Sighting,
    (body) => {
      console.log(body);
    },
  );
}
let g__ws_chat;
function g__ws_chat__set() {
  g__ws_chat = WS__make("chat");

  // WS_msg__recv(
  //   g__ws_chat,
  //   "WS_msg_Chat",
  //   WS_msg_Chat_ID.Message,
  //   (body) => {
  //     console.log(body);
  //   },
  // );
}

export async function g__connect_user() {
  const res = await fetch(
    `http://${g__server_address}/connect_user?uuID=${g__uuID}`,
  );
  return (res);
}
export async function g__connect_player() {
  g__ws_player__set();
  const res = await fetch(
    `http://${g__server_address}/connect_player?uuID=${g__uuID}`,
  );
  return (res);
}

// --- BLOCK DRAG --- //

document.oncontextmenu = function () {
  return false;
};
// --- BLOCK DRAG --- //

// --- BLOCK RIGHT CLICK --- //
document.onmousedown = function () {
  // return event.preventDefault ? event.preventDefault()
  //                             : event.returnValue = false;
  return false;
};
// --- BLOCK RIGHT CLICK --- //

// --- ALERT ON WINDOW CLOSING --- //
window.onbeforeunload = function () {
  return ("");
};
window.addEventListener("beforeunload", function (evt) {
  evt.preventDefault();
  evt.returnValue = "";
});
// --- ALERT ON WINDOW CLOSING --- //
