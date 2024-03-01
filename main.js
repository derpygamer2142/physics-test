import Circle from "./circle.js"
import Rect from "./rect.js"
import Collisions from "./collisions.js"

export default class Main {
    constructor(width, height) {
        this.width = width
        this.height = height
        this.collisions = new Collisions()

        this.shapes = []
        this.shapes.push(new Circle(width/2,height/2,50,this,
        {
            "static": false,
            "xv": 15
        }))
        this.shapes.push(new Rect(0,height*0.95,width,height*0.05,this, false))
    }

    update(dt, speed) {
        this.shapes.forEach(s => {
            s.update(dt,speed)
        })
    }

    draw(ctx) {
        this.shapes.forEach(s => {
            s.draw(ctx)
        })
    }
}