// @ts-ignore
import { Mutex } from "../vendor/utility/Mutex.ts";

export abstract class GameEntity {
  readonly eeID: number;
  constructor(eeID: number) {
    this.eeID = eeID;
  }

  private static eeID_count = 0;
  private static eeID_mutex = new Mutex();
  static async eeID_generate(amount: number): Promise<number> {
    const eeID_mutex__unlock = await GameEntity.eeID_mutex.lock();
    const eeID_count__old = GameEntity.eeID_count;
    GameEntity.eeID_count += amount;
    eeID_mutex__unlock();
    return (eeID_count__old);
  }
}
