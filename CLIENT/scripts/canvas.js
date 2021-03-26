export const cvs = document.getElementById("canvas-GameMap-default");
export const ctx = cvs.getContext("2d");


export let half_canvas_sizeX;
export let half_canvas_sizeY;


export function set_canvas()
{
    d9_ctx.canvas.width  = window.innerWidth ;
    d9_ctx.canvas.height = window.innerHeight;
    
    half_canvas_sizeX = d9_ctx.canvas.width /2;
    half_canvas_sizeY = d9_ctx.canvas.height/2;
};
globalThis.set_canvas = set_canvas;