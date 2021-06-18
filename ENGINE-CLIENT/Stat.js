export class Stat {
  kind;
  
  base;
  base_bonus_flat;
  base_bonus_pctg;

  max;
  max_bonus_flat;
  max_bonus_pctg;

  cap;
  curr;

  constructor(p__Stat__Args)
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

  /*public */get() {
    return (this.curr);
  }
}
