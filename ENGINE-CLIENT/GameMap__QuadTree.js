import { Rectangle } from "./Shape.js";





export class GameMap__QuadTree
{
  #quadrants;
  
  #quadrants_by_eeID;


  /*private */static generate_quadrants(p__Rectangle, p__GameEntities, p__quadrants, p__quadrants_by_eeID)
  {
    if (p__GameEntities.length > 2)
    {
      const p__Rectangle__Pos__X = p__Rectangle.Pos.X;
      const p__Rectangle__Pos__Y = p__Rectangle.Pos.Y;
      const p__Rectangle__Size__X__half = (p__Rectangle.Size.X / 2);
      const p__Rectangle__Size__Y__half = (p__Rectangle.Size.Y / 2);
      
      const p__Rectangle__NW = new Rectangle(
        {
          X: p__Rectangle__Pos__X,
          Y: p__Rectangle__Pos__Y,
          R: 0
        },
        {
          X: p__Rectangle__Size__X__half,
          Y: p__Rectangle__Size__Y__half
        }
      );
      const p__Rectangle__NW__GameEntities = p__Rectangle__NW.select_GameEntities_that_intersect(p__GameEntities);
      
      const p__Rectangle__NE= new Rectangle(
        {
          X: (p__Rectangle__Pos__X + p__Rectangle__Size__X__half),
          Y: p__Rectangle__Pos__Y,
          R: 0
        },
        {
          X: p__Rectangle__Size__X__half,
          Y: p__Rectangle__Size__Y__half
        }
      );
      const p__Rectangle__NE__GameEntities = p__Rectangle__NE.select_GameEntities_that_intersect(p__GameEntities);
      
      const p__Rectangle__SE= new Rectangle(
        {
          X: (p__Rectangle__Pos__X + p__Rectangle__Size__X__half),
          Y: (p__Rectangle__Pos__Y + p__Rectangle__Size__Y__half),
          R: 0
        },
        {
          X: p__Rectangle__Size__X__half,
          Y: p__Rectangle__Size__Y__half
        }
      );
      const p__Rectangle__SE__GameEntities = p__Rectangle__SE.select_GameEntities_that_intersect(p__GameEntities);
      
      const p__Rectangle__SW= new Rectangle(
        {
          X: p__Rectangle__Pos__X,
          Y: (p__Rectangle__Pos__Y + p__Rectangle__Size__Y__half),
          R: 0
        },
        {
          X: p__Rectangle__Size__X__half,
          Y: p__Rectangle__Size__Y__half
        }
      );
      const p__Rectangle__SW__GameEntities = p__Rectangle__SW.select_GameEntities_that_intersect(p__GameEntities);
      
      
      GameMap__QuadTree.generate_quadrants(p__Rectangle__NW, p__Rectangle__NW__GameEntities, p__quadrants_by_eeID);
      GameMap__QuadTree.generate_quadrants(p__Rectangle__NE, p__Rectangle__NE__GameEntities, p__quadrants_by_eeID);
      GameMap__QuadTree.generate_quadrants(p__Rectangle__SE, p__Rectangle__SE__GameEntities, p__quadrants_by_eeID);
      GameMap__QuadTree.generate_quadrants(p__Rectangle__SW, p__Rectangle__SW__GameEntities, p__quadrants_by_eeID);
    }
    else
    {
      p__quadrants.push(this);

      for (const p__GameEntity in p__GameEntities) {
        p__quadrants_by_eeID[p__GameEntity.eeID].push(this);
      };
    }
  }
  
  
  constructor(p__GameMap, p__GameEntities)
  {
    const l__GameEntities = new Array();
    
    p__GameEntities.forEach((p__GameEntity) => {
      l__GameEntities.push(p__GameEntity);
    });
    
    GameMap__QuadTree.generate_quadrants(
      new Rectangle({ X: 0, Y: 0, R: 0 }, { X: p__GameMap.Size.X, Y: p__GameMap.Size.Y }),
      l__GameEntities,
      this.#quadrants,
      this.#quadrants_by_eeID
    );console.log(this);
  }
  
  
  /*private */get_quadrants_that_intersect_with_Shape(p__Shape)
  {
    const l__quadrants = new Array();
    
    for (let l__quadrant in this.#quadrants)
    {
      if (p__Shape.intersects_Rectangle(l__quadrant)) l__quadrants.push(l__quadrant);
    }
    
    return (l__quadrants);
  }
}