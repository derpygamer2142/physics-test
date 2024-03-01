import Misc from "./misc.js";
export default class Collisions {
    constructor() {
        this.misc = new Misc()
    }
    circleCircle(a,b) {
        return (this.misc.dist(a.x,a.y,b.x,b.y) < (a.radius + b.radius))
    }

    rectCircle(r,c) {
        let testX = c.x
        let testY = c.y

        if (c.x < r.x ) { testX = r.x }
        else if (c.x > r.x + r.w) { testX = r.x + r.w}

        if (c.y < r.y) { testY = r.y }
        else if (c.y > r.y + r.h) { testY = r.y + r.h}

        let dist = this.misc.dist(c.x,c.y,testX,testY)
        if (dist < c.radius) {
            return true
            
        }
        return false
    }
}