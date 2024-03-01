export default class Rect {
    constructor(x,y,width,height,main, isstatic = false) {
        this.x = x
        this.y = y
        this.w = width
        this.h = height
        this.static = isstatic

        this.main = main

        this.type = "rect"

    }
    update(dt, speed) {
        if (!this.static) {
            
        }
    }

    draw(ctx) {
        ctx.fillStyle = "red"
        ctx.fillRect(this.x,this.y,this.w,this.h)
    }
}