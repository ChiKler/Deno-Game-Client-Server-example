export type Stat__Kind =
(
  | "MovementSpeed"
  | "SteeringSpeed"
);


export interface Stat__Args
{
  kind : Stat__Kind;
  
  base : number;
  base_bonus_flat? : number;
  base_bonus_pctg? : number;

  max_bonus_flat? : number;
  max_bonus_pctg? : number;

  curr? : number;
}


export class Stat
{
  kind : Stat__Kind;
  
  base : number;
  base_bonus_flat : number;
  base_bonus_pctg : number;

  max : number;
  max_bonus_flat : number;
  max_bonus_pctg : number;

  cap : number;

  curr : number;


  constructor(p__Stat__Args : Stat__Args)
  {
    this.kind = p__Stat__Args.kind;
    
    this.base = p__Stat__Args.base;
    this.base_bonus_flat = (p__Stat__Args.base_bonus_flat || 0);
    this.base_bonus_pctg = (p__Stat__Args.base_bonus_pctg || 1);

    this.max = ((this.base + this.base_bonus_flat) * this.base_bonus_pctg);
    this.max_bonus_flat = (p__Stat__Args.max_bonus_flat || 0);
    this.max_bonus_pctg = (p__Stat__Args.max_bonus_pctg || 1);

    this.cap = ((this.max + this.max_bonus_flat) * this.max_bonus_pctg);

    this.curr = (p__Stat__Args.curr || this.cap);
  }
  
  public get() : number {
    return (this.curr);
  }
}