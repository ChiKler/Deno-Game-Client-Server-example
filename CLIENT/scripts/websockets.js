import { g__server_address, g__uuID } from "./main.js";

export function WS__make(ws_kind) {
  return (new WebSocket(
    `ws://${g__server_address}/ws_${ws_kind}__set?uuID=${g__uuID}`,
  ));
}

export function WS_msg__send(ws, obj) {
  ws.send(JSON.stringify(obj));
}

export function WS_msg__recv(ws, kind, id, callback) {
  ws.addEventListener("message", function (evt) {
    const obj = JSON.parse(evt.data);

    if ((obj.kind == kind) && (obj.id == id)) {
      console.log(obj);
      callback(obj.body);
    }
  });
}
