- Add feature: GameMap.disconnect_player waits until the player can safely be
  extracted from GameMap.#m__Players_Map.
- Fix bug: When a player is disconnected, they still remain on the GameMap.
- Fix bug: when a player is already in the GameMap and relogs, they don't
  receive the connection message on the client.
