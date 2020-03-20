
export default class Asteroide {
    constructor(animation, colors) {
        this.animation = animation;
        this.canvas = this.animation.canvasElt;
        this.ctx = this.animation.ctx
        this.raduis = 10 + Math.round(Math.random()*30);
        this.possiblepixelsW = this.canvas.width - this.raduis
        this.possiblepixelsH = this.canvas.height - 2* this.raduis
        this.poseX = this.raduis + Math.floor(Math.random()*this.possiblepixelsW)
        this.poseY = - this.raduis + Math.floor(Math.random()*this.possiblepixelsW)
        this.color = colors[Math.floor(Math.random()*colors.length)]; 
        console.log('tot');
    }


    draw(){         
        this.ctx.beginPath()
        this.ctx.fillStyle = this.color
        this.ctx.arc(this.poseX, this.poseY, this.raduis, 0, Math.PI*2)
        this.ctx.fill();
    }

    update(){
        this.draw(); 
    }
}
