
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
        let {x,y} = data
        this.xVel += x * 0.01
        this.yVel += y * 0.03
        this.xCoord += this.xVel
        this.yCoord += this.yVel
        return ([this.xOffset * this.xCoord, this.yOffset * this.yCoord])
    }
}