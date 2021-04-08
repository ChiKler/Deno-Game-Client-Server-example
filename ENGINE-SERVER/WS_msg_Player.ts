import {
  from_SERVER_obj_to_SERVER_msg__GameEntity,
  from_SERVER_obj_to_SERVER_msg__Player,
  SERVER_msg__GameEntity,
  SERVER_msg__Player,
  // @ts-ignore
} from "./from_SERVER_obj_to_SERVER_msg.ts";
// @ts-ignore
import { GameEntity } from "./GameEntity.ts";
// @ts-ignore
import { GameMap_ID } from "./GameMap.ts";
// @ts-ignore
import { Player } from "./Player.ts";
import {
  WS_msg,
  WS_msg__body,
  WS_msg__recv,
  WS_msg__send,
  // @ts-ignore
} from "../SERVER/scripts/websockets.ts";

export enum WS_msg_Player_ID {
  Connection,
  Disconnection,
  Sighting,
  Vanishing,
  Takedown,
}

export class WS_msg_Player__body extends WS_msg__body {}

export class WS_msg_Player__body__Connection {
  m__Player__source: SERVER_msg__Player;
  m__GameMap_ID: GameMap_ID;

  constructor(p__Player__source: Player, p__GameMap_ID: GameMap_ID) {
    this.m__Player__source = from_SERVER_obj_to_SERVER_msg__Player(
      p__Player__source,
    );
    this.m__GameMap_ID = p__GameMap_ID;
  }
}
export class WS_msg_Player__body__Disconnection {
  m__GameMap_ID?: GameMap_ID;

  constructor(p__GameMap_ID?: GameMap_ID) {
    this.m__GameMap_ID = p__GameMap_ID;
  }
}
export class WS_msg_Player__body__Sighting {
  m__GameEntity__source: SERVER_msg__GameEntity;

  constructor(p__GameEntity__source: GameEntity) {
    this.m__GameEntity__source = from_SERVER_obj_to_SERVER_msg__GameEntity(
      p__GameEntity__source,
    );
  }
}
export class WS_msg_Player__body__Vanishing {
  m__GameEntity__source: SERVER_msg__GameEntity;

  constructor(p__GameEntity__source: GameEntity) {
    this.m__GameEntity__source = from_SERVER_obj_to_SERVER_msg__GameEntity(
      p__GameEntity__source,
    );
  }
}
export class WS_msg_Player__body__Takedown {
  m__GameEntity__source: SERVER_msg__GameEntity;

  constructor(p__GameEntity__source: GameEntity) {
    this.m__GameEntity__source = from_SERVER_obj_to_SERVER_msg__GameEntity(
      p__GameEntity__source,
    );
  }
}

export class WS_msg_Player<WS_msg_Player__body__Ty extends WS_msg_Player__body>
  extends WS_msg<WS_msg_Player__body__Ty> {
  static async handle__WS_msg_Player__Connection__send(
    p__Player__source: Player,
    p__GameMap_ID: GameMap_ID,
  ): Promise<void> {
    WS_msg__send<
      WS_msg_Player__body__Connection,
      WS_msg_Player<WS_msg_Player__body__Connection>
    >(p__Player__source.ws_player, {
      kind: "WS_msg_Player",
      id: WS_msg_Player_ID.Connection,
      body: new WS_msg_Player__body__Connection(
        p__Player__source,
        p__GameMap_ID,
      ),
    });
  }
  static async handle__WS_msg_Player__Disconnection__send(
    p__Player__source: Player,
    p__GameMap_ID?: GameMap_ID,
  ): Promise<void> {
    WS_msg__send<
      WS_msg_Player__body__Disconnection,
      WS_msg_Player<WS_msg_Player__body__Disconnection>
    >(p__Player__source.ws_player, {
      kind: "WS_msg_Player",
      id: WS_msg_Player_ID.Connection,
      body: new WS_msg_Player__body__Disconnection(p__GameMap_ID),
    });
  }

  static async handle__WS_msg_Player__Sighting__send(
    p__GameEntity__source: GameEntity,
    p__Player__target: Player,
  ): Promise<void> {
    WS_msg__send<
      WS_msg_Player__body__Sighting,
      WS_msg_Player<WS_msg_Player__body__Sighting>
    >(p__Player__target.ws_player, {
      kind: "WS_msg_Player",
      id: WS_msg_Player_ID.Sighting,
      body: new WS_msg_Player__body__Sighting(p__GameEntity__source),
    });
  }

  static async handle__WS_msg_Player__Vanishing__send(
    p__GameEntity__source: GameEntity,
    p__Player__target: Player,
  ): Promise<void> {
    WS_msg__send<
      WS_msg_Player__body__Vanishing,
      WS_msg_Player<WS_msg_Player__body__Vanishing>
    >(p__Player__target.ws_player, {
      kind: "WS_msg_Player",
      id: WS_msg_Player_ID.Sighting,
      body: new WS_msg_Player__body__Sighting(p__GameEntity__source),
    });
  }

  static async handle__WS_msg_Player__Takedown__send(
    p__GameEntity__source: GameEntity,
    p__Player__target: Player,
  ): Promise<void> {
    WS_msg__send<
      WS_msg_Player__body__Takedown,
      WS_msg_Player<WS_msg_Player__body__Takedown>
    >(p__Player__target.ws_player, {
      kind: "WS_msg_Player",
      id: WS_msg_Player_ID.Sighting,
      body: new WS_msg_Player__body__Sighting(p__GameEntity__source),
    });
  }
}
