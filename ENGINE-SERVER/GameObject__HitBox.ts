// @ts-ignore
import { Rectangle } from "./Shape.ts";





export class GameObject__HitBox
{
  Rectangles : Array<Rectangle>;
  
  
  constructor(p__Rectangles : Array<Rectangle>)
  {
    this.Rectangles = p__Rectangles;
  }
}