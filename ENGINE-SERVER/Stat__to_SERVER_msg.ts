// @ts-ignore
import { Stat, Stat__Kind } from "./Stat.ts";





export interface Stat__SERVER_msg
{
  args :
  {
    Stat__Args :
    {
      kind : Stat__Kind;
      
      base : number;
      base_bonus_flat : number;
      base_bonus_pctg : number;
      
      max_bonus_flat : number;
      max_bonus_pctg : number;
      
      curr : number;
    };
  };
};


export function Stat__to_SERVER_msg(p__Stat : Stat) : Stat__SERVER_msg
{
  return ({
    args: {
      Stat__Args: {
        kind: p__Stat.kind,
        
        base: p__Stat.base,
        base_bonus_flat: p__Stat.base_bonus_flat,
        base_bonus_pctg: p__Stat.base_bonus_pctg,
        
        max_bonus_flat: p__Stat.max_bonus_flat,
        max_bonus_pctg: p__Stat.max_bonus_pctg,
        
        curr: p__Stat.curr,
      },
    },
  });
}