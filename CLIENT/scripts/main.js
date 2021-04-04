import { GameMap, GameMap_ID, Player } from "../../ENGINE-CLIENT/mod.js";

import { Player_Controller, WS__make } from "./mod.js";

export const g__uuID = window.prompt("uuID", "Jane,John");

export const g__server_address = "localhost:3000";

let g__ws_player;
function g__ws_player__set() {
  g__ws_player = WS__make("player");

  Player_Controller.handle__WS_msg_Player__Connection__recv(g__ws_player);
  Player_Controller.handle__WS_msg_Player__Sighting__recv(g__ws_player);
}
let g__ws_chat;
function g__ws_chat__set() {
  g__ws_chat = WS__make("chat");

  //Chat.handle__WS_msg_Chat__Message__recv(g__ws_chat);
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
