export var Player_WSMsg_ID;
(function (Player_WSMsg_ID) {
  Player_WSMsg_ID[Player_WSMsg_ID["Connection"] = 0] = "Connection";
  Player_WSMsg_ID[Player_WSMsg_ID["Sighting"] = 1] = "Sighting";
  Player_WSMsg_ID[Player_WSMsg_ID["Vanishing"] = 2] = "Vanishing";
  Player_WSMsg_ID[Player_WSMsg_ID["Takedown"] = 3] = "Takedown";
})(Player_WSMsg_ID || (Player_WSMsg_ID = {}));

export class Player {
  uuID;

  constructor(uuID) {
    this.uuID = uuID;
  }
}
