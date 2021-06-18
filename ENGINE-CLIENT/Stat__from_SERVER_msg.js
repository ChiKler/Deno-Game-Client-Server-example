import { Stat } from "./Stat.js";





export function Stat__from_SERVER_msg(p__Stat__SERVER_msg)
{
  return (
    new Stat({
      kind: p__Stat__SERVER_msg.args.Stat__Args.kind,
      
      base: p__Stat__SERVER_msg.args.Stat__Args.base,
      base_bonus_flat: p__Stat__SERVER_msg.args.Stat__Args.base_bonus_flat,
      base_bonus_pctg: p__Stat__SERVER_msg.args.Stat__Args.base_bonus_pctg,
      
      max_bonus_flat: p__Stat__SERVER_msg.args.Stat__Args.max_bonus_flat,
      max_bonus_pctg: p__Stat__SERVER_msg.args.Stat__Args.max_bonus_pctg,
      
      curr: p__Stat__SERVER_msg.curr,
    })
  );
}