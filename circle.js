export default class Circle {
    constructor(x,y,radius, main, settings) {
        this.x = x
        this.y = y
        this.radius = radius
        
        this.type = "circle"

        this.main = main

        


        let heldSettings = this.genSettings(settings, {
            "static": false,
            "xv": 0,
            "yv": 0,
            "bounce": 0.7
        })
        
        this.xv = heldSettings.xv
        this.yv = heldSettings.yv
        this.static = heldSettings.static
        this.bounce = heldSettings.bounce
    }

    update(dt, speed) {
        if (!this.static) {
            this.y += this.yv*dt*speed
            if (this.checkCollisions() != false) {
                this.y -= this.yv*dt*speed
                this.yv *= -1*this.bounce
                if (this.yv < this.bounce*4 && this.yv > -this.bounce*4) { this.yv = 0 }
            }
            else {
                this.yv += 1*dt*speed
            }

            this.x += this.xv*dt*speed
            if (this.checkCollisions() != false) {
                this.x -= this.xv*dt*speed
                this.xv *= -1*this.bounce
                if (this.xv < this.bounce*3 && this.xv > -this.bounce*3) { this.xv = 0 }
            }
            else {
                this.xv *= 0.985
            }





        }
    }

    draw(ctx) {
        ctx.fillStyle = "blue"
        ctx.beginPath()

        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fill()
    }

    checkCollisions() {
        let tick = 0
        let toReturn = false
        this.main.shapes.forEach(s => {
            tick += 1
            if (s != this) {
                switch (s.type) {
                    case "circle":
                        if (this.main.collisions.circleCircle(this, s)) {
                            toReturn = s
                        }
                        break;
                    case "rect":
                        if (this.main.collisions.rectCircle(s,this)) {
                            toReturn = s
                        }
                        
                        break;
                    
                }
                



            }
        })
        return toReturn
    }
    genSettings(input,defaultI) {
        let output = defaultI
        Object.keys(input).forEach(k => {
            output[k] = input[k]
        })
        return output
    }
}