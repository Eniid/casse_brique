export default class Ship {
    constructor(animation) {
        this.animation = animation;
        this.canvas = this.animation.canvasElt;
        this.ctx = this.animation.ctx
        this.shipW = 10; 
        this.shipH = 30;
        this.shipSpeedx = 1;
        this.shipPosX =  0;
    }
    


    draw(){        
        this.ctx.save()
        this.ctx.translate(this.canvas.width/2, this.canvas.height/2);

        this.ctx.beginPath()
        this.ctx.fillStyle = "white";
        this.ctx.moveTo(this.shipPosX , 0);
        this.ctx.lineTo(this.shipPosX  + 10, 30);
        this.ctx.lineTo(this.shipPosX -10, 30);
        this.ctx.fill();   
        
        this.ctx.restore;
    }; 

    update(){
        this.shipPosX += this.shipSpeedx; 
        if(this.shipPosX > this.canvas.width)
        this.draw(); 
    }
}
