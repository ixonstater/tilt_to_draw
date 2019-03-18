
export default class MotionTracker{
    constructor(midX, midY){
        this.xCoord = 50
        this.yCoord = 50
        this.xOffset = midX / 50
        this.yOffset = midY / 50
        this.xVel = 0
        this.yVel = 0
    }
    update(data){
        console.log(data.x)
        let {x,y} = data
        this.xVel += x * -0.03
        this.yVel += y * 0.03

        if(this.xVel < -1){
            this.xVel = -1
        }else if(this.xVel > 1){
            this.xVel = 1
        }
        if(this.yVel < -1){
            this.yVel = -1
        }else if(this.yVel > 1){
            this.yVel = 1
        }

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
        return ([this.xOffset * this.xCoord, this.yOffset * this.yCoord])
    }
}