
export default class MotionTracker{
    constructor(midX, midY){
        this.xCoord = 50
        this.yCoord = 50
        this.xOffset = midX / 50
        this.yOffset = midY / 50
        this.xVel = 0
        this.yVel = 0
        this.friction = 1.2
        this.maxXVel = 1.5
        this.maxYVel = 1.5
    }
    update(data){
        let {x, y} = data
        let [xForce, yForce] = this.applyFriction(x,y)
        console.log(xForce,yForce)
        this.calcVelocity(xForce, yForce)
        this.generateCoords()
        return ([this.xOffset * this.xCoord, this.yOffset * this.yCoord])
    }

    applyFriction(x,y){
        let tempx = 0
        let tempy = 0
        if(Math.abs(x) - this.friction < 0){
            tempx = 0
        }else if(this.isPositive(x)){
            tempx = x - this.friction
        }else{
            tempx = x + this.friction
        }
        if(Math.abs(y) - this.friction < 0){
            tempy = 0
        }else if(this.isPositive(y)){
            tempy = y - this.friction
        }else{
            tempy = y + this.friction
        }
        return([tempx, tempy])
    }

    calcVelocity(xForce,yForce){
        this.xVel += xForce * -0.03
        this.yVel += yForce * 0.03

        if(xForce == 0){
            this.xVel /= 1.3
        }

        if(yForce == 0){
            this.yVel /= 1.3
        }

        if(this.xVel < -this.maxXVel){
            this.xVel = -this.maxXVel
        }else if(this.xVel > this.maxXVel){
            this.xVel = this.maxXVel
        }
        if(this.yVel < -this.maxYVel){
            this.yVel = -this.maxYVel
        }else if(this.yVel > this.maxYVel){
            this.yVel = this.maxYVel
        }
    }

    generateCoords(){
        this.xCoord += this.xVel
        this.yCoord += this.yVel

        if(this.xCoord > 100){
            this.xVel *= -1
            this.xCoord -= 1
        }else if(this.xCoord < 0){
            this.xVel *= -1
            this.xCoord += 1
        }
        if(this.yCoord > 100){
            this.yVel *= -1
            this.yCoord -= 1
        } else if(this.yCoord < 0){
            this.yVel *= -1
            this.yCoord += 1
        }
    }

    isPositive(num){
        return num > 0
    }
}